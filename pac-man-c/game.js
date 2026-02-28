const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const scoreNode = document.getElementById('score');
const livesNode = document.getElementById('lives');
const statusNode = document.getElementById('status');
const restartBtn = document.getElementById('restart');

const tileSize = 40;
const cols = canvas.width / tileSize;
const rows = canvas.height / tileSize;

const levelMap = [
  '##############',
  '#............#',
  '#.####.##.##.#',
  '#.#..........#',
  '#.#.##..##.#.#',
  '#...#....#...#',
  '#.###.##.###.#',
  '#............#',
  '#.##.####.##.#',
  '##############'
];

let pellets = new Set();
let score = 0;
let lives = 3;
let running = true;
let win = false;

const pacman = {
  x: 1,
  y: 1,
  dirX: 0,
  dirY: 0,
  nextX: 0,
  nextY: 0,
  mouth: 0
};

const ghosts = [
  { x: 12, y: 1, color: '#ff4d4d', dirX: -1, dirY: 0 },
  { x: 12, y: 8, color: '#ff8cf0', dirX: -1, dirY: 0 }
];

function setStatus(text) {
  statusNode.textContent = text;
}

function resetPellets() {
  pellets = new Set();
  for (let y = 0; y < rows; y += 1) {
    for (let x = 0; x < cols; x += 1) {
      if (levelMap[y][x] === '.') {
        pellets.add(`${x},${y}`);
      }
    }
  }
}

function isWall(x, y) {
  if (x < 0 || x >= cols || y < 0 || y >= rows) {
    return true;
  }
  return levelMap[y][x] === '#';
}

function tryMove(entity, dx, dy) {
  const nx = entity.x + dx;
  const ny = entity.y + dy;
  if (!isWall(nx, ny)) {
    entity.x = nx;
    entity.y = ny;
    return true;
  }
  return false;
}

function eatPellet() {
  const key = `${pacman.x},${pacman.y}`;
  if (pellets.has(key)) {
    pellets.delete(key);
    score += 10;
    if (pellets.size === 0) {
      running = false;
      win = true;
      setStatus('You win!');
    }
  }
}

function resetPositions() {
  pacman.x = 1;
  pacman.y = 1;
  pacman.dirX = 0;
  pacman.dirY = 0;
  pacman.nextX = 0;
  pacman.nextY = 0;

  ghosts[0].x = 12;
  ghosts[0].y = 1;
  ghosts[0].dirX = -1;
  ghosts[0].dirY = 0;

  ghosts[1].x = 12;
  ghosts[1].y = 8;
  ghosts[1].dirX = -1;
  ghosts[1].dirY = 0;
}

function handleDeath() {
  lives -= 1;
  if (lives <= 0) {
    running = false;
    setStatus('Game over!');
    return;
  }
  setStatus('Ouch! Keep going.');
  resetPositions();
}

function checkCollision() {
  for (const ghost of ghosts) {
    if (ghost.x === pacman.x && ghost.y === pacman.y) {
      handleDeath();
      break;
    }
  }
}

function randomDirection(ghost) {
  const options = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ].filter(([dx, dy]) => !isWall(ghost.x + dx, ghost.y + dy));

  if (options.length === 0) {
    return [0, 0];
  }

  return options[Math.floor(Math.random() * options.length)];
}

function moveGhosts() {
  for (const ghost of ghosts) {
    if (!tryMove(ghost, ghost.dirX, ghost.dirY)) {
      [ghost.dirX, ghost.dirY] = randomDirection(ghost);
      tryMove(ghost, ghost.dirX, ghost.dirY);
    } else if (Math.random() < 0.3) {
      [ghost.dirX, ghost.dirY] = randomDirection(ghost);
    }
  }
}

function update() {
  if (!running) {
    return;
  }

  if (pacman.nextX !== 0 || pacman.nextY !== 0) {
    if (!isWall(pacman.x + pacman.nextX, pacman.y + pacman.nextY)) {
      pacman.dirX = pacman.nextX;
      pacman.dirY = pacman.nextY;
    }
  }

  if (pacman.dirX !== 0 || pacman.dirY !== 0) {
    tryMove(pacman, pacman.dirX, pacman.dirY);
  }

  pacman.mouth += 0.25;
  eatPellet();
  moveGhosts();
  checkCollision();

  scoreNode.textContent = `Score: ${score}`;
  livesNode.textContent = `Lives: ${lives}`;
}

function drawMaze() {
  for (let y = 0; y < rows; y += 1) {
    for (let x = 0; x < cols; x += 1) {
      if (levelMap[y][x] === '#') {
        ctx.fillStyle = '#304bd6';
        ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
      }

      if (pellets.has(`${x},${y}`)) {
        ctx.beginPath();
        ctx.fillStyle = '#f4f4f0';
        ctx.arc(x * tileSize + tileSize / 2, y * tileSize + tileSize / 2, 4, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
}

function drawPacman() {
  const centerX = pacman.x * tileSize + tileSize / 2;
  const centerY = pacman.y * tileSize + tileSize / 2;
  const mouthOpen = (Math.sin(pacman.mouth) + 1) * 0.2 + 0.05;

  let angle = 0;
  if (pacman.dirX === -1) angle = Math.PI;
  if (pacman.dirY === -1) angle = -Math.PI / 2;
  if (pacman.dirY === 1) angle = Math.PI / 2;

  ctx.beginPath();
  ctx.fillStyle = '#f9d548';
  ctx.moveTo(centerX, centerY);
  ctx.arc(
    centerX,
    centerY,
    tileSize * 0.4,
    angle + mouthOpen,
    angle + Math.PI * 2 - mouthOpen
  );
  ctx.closePath();
  ctx.fill();
}

function drawGhost(ghost) {
  const x = ghost.x * tileSize;
  const y = ghost.y * tileSize;

  ctx.fillStyle = ghost.color;
  ctx.beginPath();
  ctx.roundRect(x + 4, y + 4, tileSize - 8, tileSize - 8, 8);
  ctx.fill();

  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.arc(x + 15, y + 18, 5, 0, Math.PI * 2);
  ctx.arc(x + 25, y + 18, 5, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#1a1a2e';
  ctx.beginPath();
  ctx.arc(x + 15, y + 18, 2, 0, Math.PI * 2);
  ctx.arc(x + 25, y + 18, 2, 0, Math.PI * 2);
  ctx.fill();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawMaze();
  drawPacman();
  ghosts.forEach(drawGhost);
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

function restart() {
  score = 0;
  lives = 3;
  running = true;
  win = false;
  resetPellets();
  resetPositions();
  scoreNode.textContent = 'Score: 0';
  livesNode.textContent = 'Lives: 3';
  setStatus('Ready!');
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft' || event.key.toLowerCase() === 'a') {
    pacman.nextX = -1;
    pacman.nextY = 0;
  }
  if (event.key === 'ArrowRight' || event.key.toLowerCase() === 'd') {
    pacman.nextX = 1;
    pacman.nextY = 0;
  }
  if (event.key === 'ArrowUp' || event.key.toLowerCase() === 'w') {
    pacman.nextX = 0;
    pacman.nextY = -1;
  }
  if (event.key === 'ArrowDown' || event.key.toLowerCase() === 's') {
    pacman.nextX = 0;
    pacman.nextY = 1;
  }

  if (!running && !win && event.key === 'Enter') {
    restart();
  }
});

restartBtn.addEventListener('click', restart);

resetPellets();
resetPositions();
requestAnimationFrame(gameLoop);
