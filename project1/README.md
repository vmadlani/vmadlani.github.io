# Project_1: “Drag ’N’ Drop Family Fortunes”

Currently (Dec 2015) I am a student at London General Assembly Web Development Immersive Course.
The third week assignment was to make a functional game on a browser. 

Inspired by childhood memories as well as with input from my family, I decided to create a game based on one of the longest running game shows of all time (1978), Family Fortunes, otherwise known as Family Feud in America. The game is based on contestants guessing answers to a topic that a survey has been carried out on. Another source of inspiration was something that was mentioned by classmates and my family - teletext games, which were simple and addictive. That’s the look I have decided to go for. My twist on this is called  “Drag ’N’ Drop Family Fortunes”. I hope you enjoy it as much as I do. 

How the game works:
> The objective of the game is to get as high a score as possible
> The game stops once a player loses 3 lives
> Points are scored by dragging answer boxes at the bottom of the page onto the right rows of the table. There are different amounts of points allocated to getting different levels of popularity of answers correct. (40pts for top answer, 30pts for second best, 20pts for third best and 10pts for least popular). 

My approach:

Before I began to write some code, I thought about the different approaches I could use to solve the problem. I also sketched some designs (low fidelity….) and listed out key functionality that would have to be incorporated. 

I decided to design the core of the game around 2 groups of HTML elements, one for the answers, and one for the table that the players need to drag it onto. In order to identify whether an answer has been dragged onto the correct point in the table, I check the text content of the answer box against a ranking of the answers that are stored in an array. A correct answer add points to the relevant player, whereas an incorrect answer reduces their lives. I also created a display board to prompt players and update them of who has won certain rounds / game over. 

A key challenge for me was getting to grips with jQuery UI, in order to be able to drag and drop elements. I had to learn this from scratch and came across some fantastic sources - in partic Tutorials Point, which helped a great deal. I thought the CSS would be easier than it was. I used Google fonts for the first time to get the retro / arcade game font. Lastly, I added in some key sounds for getting a wrong answer / correct answer.

The values of the answers and the topic were sourced from:
http://www.freequiz4u.com/family%20fortunes%202008.htm#No 1
which provides topics and the topic 4 answers in each case.

The languages I used were:
* HTML 5
* CSS 3 (including animation)
* JavaScript
* jQuery (+jQuery UI)

Instructions:


Unsolved problems / challenges:
I used a really long winded way to generate my random choices, (40 lines of code…)
I wanted to use objects a lot more than I did.
The most difficult part of the JS code was the reset button, it kept on going wrong an dI needed help from Niall to sort this out. 

If I had another day(s):
WDI Team console surveys > e.g.. most difficult homework, funniest moments in class so far, favourite pizza toppings etc. 
Top scores / leaderboard > like in arcade games
Get more granular survey data, so that points can be scored in line with actual popularity of the answers.

//

CHECKLIST:

### Technical Requirements	

Your app must:	
* **Render a game in the browser**	DONE
* **Switch turns** between two players	DONE
* **Design logic for winning** & **visually display which player won**	DONE
Reset button	DONE
* **Include separate HTML / CSS / JavaScript files**	DONE
* Stick with **KISS (Keep It Simple Stupid)** and **DRY (Don't Repeat Yourself)** principles	DONE
* Use **Javascript or jQuery** for **DOM manipulation**	DONE
* **Deploy your game online**, where the rest of the world can access it	DONE
* Use **semantic markup** for HTML and CSS (adhere to best practices)	DONE

### Necessary Deliverables	
* A **working game, built by you**, hosted somewhere on the internet	DONE
* A **link to your hosted working game** in the URL section of your Github repo	DONE
* A **git repository hosted on Github**, with a link to your hosted game, and frequent commits dating back to the very beginning of the project	DONE
* **A ``readme.md`` file** with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.	THIS IS IT

### Project Feedback + Evaluation
* __Project Workflow__: Did you complete the user stories, wireframes, task tracking, and/or ERDs, as specified above? Did you use source control as expected for the phase of the program you’re in (detailed above)?
* __Technical Requirements__: Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex?
* __Creativity__: Did you added a personal spin or creative element into your project submission? Did you deliver something of value to the end user (not just a login button and an index page)?
* __Code Quality__: Did you follow code style guidance and best practices covered in class, such as spacing, modularity, and semantic naming? Did you comment your code as your instructors have in class?
* __Deployment__: Did you deploy your application to a public url using GitHub Pages?
* __Total__: Your instructors will give you a total score on your project between:


