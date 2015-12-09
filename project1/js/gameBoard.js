$(document).ready(function(){

soundManager.setup({
  url: 'soundmanager/swf',
  flashVersion: 9,
  onready: function() {}
});

  var myDing = soundManager.createSound({
   url: 'js/sounds/ding.wav'
  });
  
  var myWrong = soundManager.createSound({
   url: 'js/sounds/wrong.mp3'
  });



var content = [
  ["Name a famous celebrity who in the last 10 years has made a cameo appearance in Coronation Street","Peter Kay","Prince Charles","Norman Wisdom","Ian McKellen"  ],
  ["Name any annual ‘Bank Holiday’","Spring Bank","August Bank Holiday","Good Friday","Christmas Day"  ],
  ["Name any boxing weight division","Heavyweight","Bantam Weight","Lightweight","Flyweight"  ],
  ["Something you can buy from a hospital shop","Flowers","Newspapers","Chocolate","Cards"  ],
  ["Name a popular food on a Barbecue?","Sausage","Steak","Chicken","Burgers"  ],
  ["Name Something Seen On A Front Door","Numbers","Letter Box","Handle","Knockers"  ],
  ["Give a reason why people don’t use public transport","Never on time","Too crowded","Too expensive","Quicker by car"  ],
  ["Name something only usable when it hardens","Cement","Ice Cubes","Plaster Cast","Tyres"  ],
  ["Name something associated with Holland","Windmills","Tulips","Amsterdam","Clogs"  ],
  ["Name any play by William Shakespeare","Hamlet","Romeo & Juliet","Twelfth Night","Macbeth"  ],
  ["Something you should do before a long trip","Go to toilet","Fill up with petrol","Take Sweets/food","Secure House"  ],
  ["Name your sexiest favourite part of the body?","Bottom or Bum","Breasts or Bosom","Eyes","Lips"  ],
  ["Name A James Bond Theme Tune","Live & Let Die","A View To A Kill","Goldfinger","Nobody Does It Better"  ],
  ["Name something you would keep secret","Affair","Weight","Bank Balance","Winning Lottery"  ],
  ["Past or present name any pop group that you can spread on toast","Marmalade","The Jam","Hot Butter","HoneyZ"  ],
  ["Name something you might win at a fairground","Coconut","Goldfish","Cuddly Toy","Money"  ],
  ["Name any UK shipping forecast areas","Dogger Bank","Viking","Cromarty","Rockall"  ],
  ["Something that children take to the beach","Bucket & Spade","Ice Cream","Beach Toys","Footballs/Balls"  ],
  ["Name a TV Programme that really annoys you?","Big Brother","Trisha","Richard & Judy","Weakest Link"  ],
  ["Name A children's story featuring a witch","Lion The Witch & The Wardrobe","Snow White","Wizard Of Oz","Hansel & Gretel"  ],
  ["Name something scrubbed after use","Pans","Bath","Hands","Oven"  ],
  ["Past or present name a famous real life dog","Lassie","Shep","Digby","Rin Tin Tin"  ],
  ["Name any UK monarch beginning with the letter ‘E’","Elizabeth","Edward","Ethelred","Edmund"  ],
  ["Name an excuse a driver might give to the police when caught speeding","Didn’t see the speed sign","Didn’t realise they were","Late for work","Going to Hospital"  ],
  ["Name any wife of Henry V111","Anne Boleyn","Catherine Howard","Jane Seymour","Catherine Parr"  ],
  ["Something you do virtually every day of your life","Breath","Sleep","Wake Up","Toilet"  ],
  ["Name an activity that, at your first attempt could cause a fall?","Skating","Riding a bike","Walking","Drinking"  ],
  ["Name something that is used only once","Tea Bag","Toilet Paper","Match","Stamp"  ],
  ["Name a quiet animal","Mouse","Rabbit","Bat","Hamster"  ],
  ["Name a famous country and western singer","Tammy Wynette","Dolly Parton","Johnny Cash","Willie Nelson"  ],
  ["Name something a couple might save from their Wedding day","Photos","Cake","Wedding Dress","Ring"  ],
  ["Name a musical instrument you blow into","Trumpet","Flute","Clarinet","Saxophone"  ],
  ["Name any London Underground line","Bakerloo","Circle","Victoria","Central"  ],
  ["Somewhere you would see uniformed guards","Prison","Buckingham Palace","Security Vehicles","Military Bases"  ],
  ["Name an order a Film Director Might Give","Action","Cut","Lights","Take 1"  ],
  ["Name a part of the body that moves a lot","Mouth or Tongue","Eye lids","Head","Arms or hands"  ],
  ["Name something Husbands borrow from wives","Money","Car","Hair Dryer","Deodorant"  ],
  ["Name a British coin no longer in circulation","Sixpence","Farthing","Threepenny Bit","Half Crown"  ],
  ["Name something that is sold by the Bunch","Bananas","Flowers","Grapes","Onions"  ],
  ["Name a reason a husband might send his wife flowers","Anniversary","Valentines’ day","Birthday","Apology"  ],
  ["Name a city that has hosted the Summer Olympic Games within the last 20 years","Sydney","Athens","Barcelona","Los Angeles"  ],
  ["Something you associate with Texas","Cowboys","Oil","Dallas","Lone Star"  ],
  ["Name a breed of strong dog?","Rottweiller","St. Bernard","Bulldog","Huskies"  ],
  ["Name A method of escaping from prison","Tunnel","Over the wall or fence","Sheets from window","Helicopter"  ],
  ["Name a type of pole","Flag","May","North or South","Totem"  ],
  ["Name any Caribbean Island","Jamaica","Barbados","Bahamas","Trinidad"  ],
  ["Other than shoes or boots, name something you buy from a shoe shop","Polish","Insoles","Laces","Horns"  ],
  ["Name a job a person might apply for at a supermarket","Checkout person","Self Stacker","Fork lift driver","Manager"  ],
  ["Name a any UK hit by David Bowie","Life on Mars","Rebel Rebel","Space Oddity","The Laughing Gnome"  ],
  ["Something you might do with left over Sunday joint meat","Make sandwiches","Fry up","Give to dog","Make soup"  ],
  ["Name something you can shoot without a firearm","A Film","A Goal","Pool Ball","The Rapids"  ],
  ["Name something associated with Star Trek","Mr Spock","Enterprise","Captain Kirk","Klingons"  ],
  ["Name something found in Hawaii","Beaches","Grass Skirts","Palm Trees","Pineapples"  ],
  ["Other than 007 name any character from a James Bond film","Oddjob","Miss Moneypenny","Jaws","M"  ],
  ["Name something you would dread to see from an aeroplane window","Engine on fire","Another plane","Broken wings","The pilot"  ],
  ["Give a reason why a parent might want their child to join the Army","See the World","Earn a living","Discipline","Make them proud"  ],
  ["Name any item of the 70’s fashion","Tank Top","Hot Pants","Flares","Platform Shoes"  ],
  ["Something that airlines charge extra for","First Class","Baggage","Taxes","Meals"  ],
  ["Name something people do in Boots","Hike","Play Sports","Climb","Buy Medicine"  ],
  ["Name something you get from the post office","Stamps","Pension","TV Licence","Car Tax"  ],
  ["Name a fish you do not eat","Goldfish","Jellyfish","Starfish","stickleback"  ],
  ["Name a coloured flag used in Formula One racing","Chequered","Yellow","Black","Red"  ],
  ["Name something that you might trip over in the family home","Extension Cables","Children’s Toys","Carpet","Shoes"  ],
  ["Name a reason for sticking out your tongue","Being Rude","Doctors","Having it pierced","Licking your lips"  ],
  ["Name something that is pulled","Cracker","Leg","A pint","Caravan"  ],
  ["Something new recruits do at an army training camp","Haircuts","March","PT","Discipline"  ],
  ["Name the first thing a man does after he finishes making love","Goes to sleep","Smokes a cigarette","Gets dressed and goes home","Kisses and cuddles his partner"  ],
  ["Past or present name a character who has been a bar maid in the Rovers Return","Betty Turpin/Driver","Bet Lynch","Liz McDonald","Vera Duckworth"  ],
  ["Name a famous Tom","Jones","Cruise","Hanks","Selleck"  ],
  ["Name a sweet found in a box of Celebrations","Bounty","Mars Bar","Maltesers","Snicker"  ],
  ["Name something you might want to have straightened","Teeth","Hair","Nose","Trousers"  ],
  ["Give a shortened mans name that only has 3 letters","Bob","Tim","Ben","Jim"  ],
  ["Name a food that does not go well with kissing","Garlic","Onions","Curry","Fish"  ],
  ["Something a boy scout might have in his back pack","Penknife","Tent","Map","Compass"  ],
  ["Name Something That Requires Wind To Function","Windmill","Kite","Yacht","Wind chimes"  ],
  ["Give a slang name for a toilet","Bog","Lavvy","Crapper","Pot"  ],
  ["Other than your birth certificate, name something on which you would find your date of birth","Passport","Driving Licence","Medical Records","Tombstone"  ],
  ["TOPIC","ANSWER 1","ANSWER 2","ANSWER 3","ANSWER 4"  ],
  ["NAME A CHARACTER FROM THE WIZARD OF OZ","TIN MAN","DOROTHY","LION","SCARECROW"  ],
  ["NAME SOMETHING THAT HELPS YOU FALL ASLEEP","ALCOHOL","SLEEPING PILLS","WATCHING TV","LISTEN TO MUSIC"  ],
  ["NAME SOMETHING THAT DRIVERS DO WITH THEIR HANDS WHEN THEY SHOULD BE AT THE WHEEL","USE A MOBILE PHONE","PICK YOUR NOSE","SMOKE","MESSING WITH RADIO/CASSETTE"  ],
  ["NAME SOMETHING ASSOCIATED WITH HIPPIES","DRUGS","LONG HAIR","FLOWERS(POWER)","FREE LOVE"  ],
  ["NAME A CHOCOLATE BAR BEGINNING WITH THE LETTER 'T'","TWIX","TOBLERONE","TIME-OUT","TOPIC"  ],
  ["NAME SOMETHING PEOPLE DO WHEN THEY HAVE FINISHED A MEAL","BURP","LIGHT A CIGARETTE","HAVE COFFEE/TEA","WIPE YOUR MOUTH"  ],
  ["NAME SOMETHING YOU CAN SEE BUT YOU CANNOT TOUCH","THE SUN","THE MOON","THE CLOUDS","A RAINBOW"  ],
  ["NAME SOMETHING YOU BUY OR HIRE FOR A WEDDING","WEDDING DRESS","SUIT/TOP HAT & TAILS","CAR","FLOWERS"  ],
  ["NAME A SPORT WHERE BEING TALL IS AN ADVANTAGE","BASKETBALL","GOALKEEPER/SOCCER","HIGH JUMP","NETBALL"  ],
  ["NAME A NOCTURNAL ANIMAL","HEDGEHOG","OWL","BADGER","CAT"  ]
  ]

var p1Score = 0;
var p2Score = 0;
var p1Lives = 3;
var p2Lives = 3;
var choices = ["", "", "", ""];
var round = 0;
var turn = 0;
var topicAnswerArray = []

$("#reset").click(function (){
  topicAnswerArray = reset();
  p1Score = 0;
  p2Score = 0;
  p1Lives = 3;
  p2Lives = 3;
  turn = 0;
  $("#player1Score").text((p1Score) + "pts");
  $("#player2Score").text((p2Score) + "pts");
  $("#player1Lives").text((p1Lives));
  $("#player2Lives").text((p2Lives));

  //console.log("reset")
});

var randomIndex = Math.round((Math.random()*89));
console.log(randomIndex);
var topicAnswerArray = content[randomIndex]; // 0, 1, 2, 3, 4
$("#topic").text('"' + topicAnswerArray[0] +  '"');


setChoices = function() {

// LONG WINDED RANDOM SORTER FOR CHOICES ARRAY <<START>>
// LONG WINDED RANDOM SORTER FOR CHOICES ARRAY <<START>>
var selectionArray = [topicAnswerArray[1], topicAnswerArray[2], topicAnswerArray[3], topicAnswerArray[4]]
console.log(selectionArray);
var randomNumber = Math.random();
var randomNumber2 = Math.random();
var randomNumber3 = Math.random();
if (randomNumber > 0 && randomNumber < 0.25) {
  choices[0] = selectionArray[0]; selectionArray.splice([0], 1);  
} else if (randomNumber > 0.25 && randomNumber < 0.5) {
  choices[0] = selectionArray[1]; selectionArray.splice([1], 1);  
} else if (randomNumber > 0.5 && randomNumber < 0.75) {
  choices[0] = selectionArray[2]; selectionArray.splice([2], 1);  
} else if (randomNumber > 0.75 && randomNumber < 1.0) {
  choices[0] = selectionArray[3]; selectionArray.splice([3], 1);  
} 
if (randomNumber2 > 0 && randomNumber2 < 0.33) {
  choices[1] = selectionArray[0]; selectionArray.splice([0], 1);  
} else if (randomNumber2 > 0.33 && randomNumber2 < 0.66) {
  choices[1] = selectionArray[1]; selectionArray.splice([1], 1);  
} else if (randomNumber2 > 0.66 && randomNumber2 < 1.0) {
  choices[1] = selectionArray[2]; selectionArray.splice([2], 1);  
}
if (randomNumber3 > 0 && randomNumber3 < 0.50) {
  choices[2] = selectionArray[0]; selectionArray.splice([0], 1);  
} else if (randomNumber3 > 0.50 && randomNumber3 < 1.00) {
  choices[2] = selectionArray[1]; selectionArray.splice([1], 1);  
}
choices[3] = selectionArray[0]
console.log(choices);
return choices;
// LONG WINDED RANDOM SORTER FOR CHOICES ARRAY <<END>>
// LONG WINDED RANDOM SORTER FOR CHOICES ARRAY <<END>>
}

setChoices();
$("#player1Score").text((p1Score) + "pts");
$("#player2Score").text((p2Score) + "pts");
$("#round").text("round: " + (round));

$("#C1").text(choices[0]);
$("#C2").text(choices[1]);
$("#C3").text(choices[2]);
$("#C4").text(choices[3]);

$( ".answers" ).draggable({ 
  helper : "clone", 
  cursor : "move" 
});



checkWinner = function() {

  if ((p1Lives === 0) || (p2Lives === 0)) 
  { //alert("theres a loser")  
    $("#C1").text("GAME OVER");
    $("#C2").text("GAME OVER");
    $("#C3").text("GAME OVER");
    $("#C4").text("GAME OVER");
    $("#droppable1").text("GAME OVER");
    $("#droppable2").text("GAME OVER");
    $("#droppable3").text("GAME OVER");
    $("#droppable4").text("GAME OVER");
    if (p1Lives === 0) 
    { //alert("loser = player 1")
      $("#displayBoard").text("PRESS RESET TO START AGAIN").fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
      $("#topic").text("GAME OVER, PLAYER 2 WINS").fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);

    }
    else if (p2Lives === 0) 
    { $("#displayBoard").text("PRESS RESET TO START AGAIN").fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
      $("#topic").text("GAME OVER, PLAYER 1 WINS").fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);

    }
    }   else if (($("#droppable1").text() !== "most popular.........40pts") && ($("#droppable2").text() !== "2nd most popular.....30pts")  && ($("#droppable3").text() !== "3rd most popular.....20pts") && ($("#droppable4").text() !== "least popular........10pts"))
    {
        if (p1Score > p2Score) {
          $("#displayBoard").text("Player 1 has won this round - well done!").fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
          //console.log(round);
          round++;
          topicAnswerArray = reset();
        } else if (p2Score > p1Score) {
          $("#displayBoard").text("Player 2 has won this round - well done!").fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
          //console.log(round);
          round++;
          topicAnswerArray = reset();
        } else {
          $("#displayBoard").text("Looks like a tie, next round!").fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
          //console.log(round);
          round++;
          topicAnswerArray = reset();
        }
      } 
  }
//TAKEN OUT CHUNK OF CODE REFERENCE "DRAGGABLE QUALITIES"

// THIS WORKSSSSS!!!!!
$( "#droppable1" ).droppable({
	tolerance : "intersect",
  //accept : key1,
  //activeClass: "active",
  hoverClass:  "hover",
   drop: function(event, ui) {  
      if (event.toElement.innerHTML === topicAnswerArray[1]) 
      {console.log(topicAnswerArray[1]);
      myDing.play();  
      $( "#droppable1" ).text(topicAnswerArray[1]);
      $("#"+event.toElement.id).text("")
      $( "#droppable1" ).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
      if (turn%2 === 0) {p1Score=p1Score+40;} else {p2Score=p2Score+40}
      $("#displayBoard").text("Nice one - correct").fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);}
    else {console.log(topicAnswerArray[1]);
      myWrong.play(); 
      $("#displayBoard").text("Sorry dude - that's wrong").fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
      if (turn%2 === 0) {p1Lives=p1Lives-1;} else {p2Lives=p2Lives-1};
      console.log(p1Lives);
      console.log(p2Lives);
    } //$( "#droppable1" ).text(topicAnswerArray[1])
    turn++;
    $("#player1Score").text((p1Score) + "pts");
    $("#player2Score").text((p2Score) + "pts");
    $("#player1Lives").text((p1Lives));
    $("#player2Lives").text((p2Lives));   
    $("#turn").text("turn: " + (turn));
    checkWinner();
  }     
 });

$( "#droppable2" ).droppable({
  tolerance : "intersect",
  //accept : key2,
  //activeClass: "active",
  hoverClass:  "hover",
   drop: function(event, ui) {    
    if (event.toElement.innerHTML === topicAnswerArray[2]) 
      //{console.log(event.toElement.innerHTML);
      {$( "#droppable2" ).text(topicAnswerArray[2]);
      myDing.play();
      $("#"+event.toElement.id).text("");
      $( "#droppable2" ).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
      if (turn%2 === 0) {p1Score=p1Score+30;} else {p2Score=p2Score+30};
      $("#displayBoard").text("Nice one - correct").fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);}
    else {myWrong.play(); 
      $("#displayBoard").text("Sorry dude - that's wrong").fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
      if (turn%2 === 0) {p1Lives=p1Lives-1;} else {p2Lives=p2Lives-1};
      console.log(p1Lives);
      console.log(p2Lives);
    }
    turn++;
    $("#player1Score").text((p1Score) + "pts");
    $("#player2Score").text((p2Score) + "pts");
    $("#player1Lives").text((p1Lives));
    $("#player2Lives").text((p2Lives));

   
  $("#turn").text("turn: " + (turn));
    checkWinner();
  }
 });

$( "#droppable3" ).droppable({
  tolerance : "intersect",
  //accept : key3,
  //activeClass: "active",
  hoverClass:  "hover",
   drop: function(event, ui) {    
    if (event.toElement.innerHTML === topicAnswerArray[3]) 
      //{$("#"+event.toElement.innerHTML).text("already selected");
      {$( "#droppable3" ).text(topicAnswerArray[3]);
      myDing.play();
      $("#"+event.toElement.id).text("")
      $( "#droppable3" ).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
      if (turn%2 === 0) {p1Score=p1Score+20;} else {p2Score=p2Score+20};
    $("#displayBoard").text("Nice one - correct").fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);}
    else {myWrong.play(); 
      $("#displayBoard").text("Sorry dude - that's wrong").fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
      if (turn%2 === 0) {p1Lives=p1Lives-1;} else {p2Lives=p2Lives-1};
      console.log(p1Lives);
      console.log(p2Lives);
    }
    turn++;
    $("#player1Score").text((p1Score) + "pts");
    $("#player2Score").text((p2Score) + "pts");
    $("#player1Lives").text((p1Lives));
    $("#player2Lives").text((p2Lives));

  $("#turn").text("turn:" + (turn));
    checkWinner();
  }
 });

$( "#droppable4" ).droppable({
  tolerance : "intersect",
  //accept : key4,
  //activeClass: "active",
  hoverClass:  "hover",
   drop: function(event, ui) {    
    if (event.toElement.innerHTML === topicAnswerArray[4])    
      //{$("#"+event.toElement.innerHTML).text("already selected");
      {$( "#droppable4" ).text(topicAnswerArray[4]);
      myDing.play();
      $("#"+event.toElement.id).text("");
      $( "#droppable4" ).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
      if (turn%2 === 0) {p1Score=p1Score+10;} else {p2Score=p2Score+10};
      //alert("correct")
      $("#displayBoard").text("Nice one - correct").fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);}
      else {myWrong.play(); 
        $("#displayBoard").text("Sorry dude - that's wrong").fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
      if (turn%2 === 0) {p1Lives=p1Lives-1;} else {p2Lives=p2Lives-1};
      console.log(p1Lives);
      console.log(p2Lives);
    }
    turn++;
    $("#player1Score").text((p1Score) + "pts");
    $("#player2Score").text((p2Score) + "pts");
    $("#player1Lives").text((p1Lives));
    $("#player2Lives").text((p2Lives));

    $("#turn").text("turn:" + (turn));
    checkWinner();
  }
 });


// reset function
reset = function() {
  turn = 0;
  round++;
  $("#round").text("round: " + (round));
  var randomIndex = Math.round((Math.random()*89));
  //console.log(randomIndex);
  var topicAnswerArray = content[randomIndex]; // 0, 1, 2, 3, 4
  //$("#C1").text("Hello");
   
  //console.log(topicAnswerArray[0]);
  $("#topic").text('"' + topicAnswerArray[0] +  '"');

  //var choices = ["", "", "", ""];
  var selectionArray = [topicAnswerArray[1], topicAnswerArray[2], topicAnswerArray[3], topicAnswerArray[4]]
  
  var randomNumber = 0;
  var randomNumber2 = 0;
  var randomNumber3 = 0;

  var randomNumber = Math.random();
  var randomNumber2 = Math.random();
  var randomNumber3 = Math.random();
  if (randomNumber > 0 && randomNumber < 0.25) {
    choices[0] = selectionArray[0]; selectionArray.splice([0], 1);  
  } else if (randomNumber > 0.25 && randomNumber < 0.5) {
    choices[0] = selectionArray[1]; selectionArray.splice([1], 1);  
  } else if (randomNumber > 0.5 && randomNumber < 0.75) {
    choices[0] = selectionArray[2]; selectionArray.splice([2], 1);  
  } else if (randomNumber > 0.75 && randomNumber < 1.0) {
    choices[0] = selectionArray[3]; selectionArray.splice([3], 1);  
  } 
  if (randomNumber2 > 0 && randomNumber2 < 0.33) {
    choices[1] = selectionArray[0]; selectionArray.splice([0], 1);  
  } else if (randomNumber2 > 0.33 && randomNumber2 < 0.66) {
    choices[1] = selectionArray[1]; selectionArray.splice([1], 1);  
  } else if (randomNumber2 > 0.66 && randomNumber2 < 1.0) {
    choices[1] = selectionArray[2]; selectionArray.splice([2], 1);  
  }
  if (randomNumber3 > 0 && randomNumber3 < 0.50) {
    choices[2] = selectionArray[0]; selectionArray.splice([0], 1);  
  } else if (randomNumber3 > 0.50 && randomNumber3 < 1.00) {
    choices[2] = selectionArray[1]; selectionArray.splice([1], 1);  
  }
  choices[3] = selectionArray[0]
  console.log(choices);
  console.log(selectionArray);

  $("#C1").text(choices[0]);
  $("#C2").text(choices[1]);
  $("#C3").text(choices[2]);
  $("#C4").text(choices[3]);
  
  $("#droppable1").text("most popular.........40pts");
  $("#droppable2").text("2nd most popular.....30pts");
  $("#droppable3").text("3rd most popular.....20pts");
  $("#droppable4").text("least popular........10pts");
   
  console.log(topicAnswerArray); 
  return topicAnswerArray;
  
  };
 

// LEAVE THIS ALONE >> SOUNDMANAGER
//}); 


// LEAVE THESE ALONE  
});
