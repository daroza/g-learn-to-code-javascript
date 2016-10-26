var adventure = function() {

/*LEARN TO CODE - CODE YOUR OWN ADVENTURE

Welcome to this code your own adventure lesson. Let's get started!

As the article stated, we will be using some built in JavaScript functions to get input from our player. The first thing we want to do is find out if the player actually wants to play the game. The first function we will use is called confirm. To use confirm, you invoke the function with a string as an argument, like this...

confirm('Can you hear me now?');*/


/*STEP 1: Create a variable called proceed and assign it to a confirm function that asks your player if they are ready to play. Then, log the variable proceed to the console.*/



[YOUR CODE HERE]



/*Notice what happens in the console when you choose either 'OK' or 'cancel'.


STEP 2: Write an if/else statement using the value of the variable 'proceed' as the expression.

	- If the value is true we are going to use another built in function called prompt to ask the user their name. Assign the result of the function to the variable, playerName;

	- If it is false we will use a built in function called alert to give them a farewell message. You must return the function to stop running the program, otherwise the program will continue even if they choose not to play.*/



[YOUR CODE HERE]



/*STEP 3: Now we have a player and we have saved a value for their name. Next we need to offer them a choice.
Describe their environment and give them 2 options such as left or right.*/



[YOUR CODE HERE]



/*STEP 4: Create an if/else if/else statement that produces a different result based on the players answer.

 	- One option should end the game. The other should offer another prompt with two more options.

 	-One option should include the variable playerName. You can do this by adding a string and the
 	variable playerName together like this...

 	'Blah blah blah ' + playerName + ' blah blah blah!'

If the player's answer does not match any of the options, use the else statement to let them know that they
didn't give a valid response.*/



[YOUR CODE HERE]



/*STEP 5: Add your final two conditional statements below. They should both be alerts. One will cause the player to lose, the other will cause them to win.*/



[YOUR CODE HERE]



};

adventure();
