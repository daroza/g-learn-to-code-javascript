var adventure = function() {

	/*LEARN TO CODE - CODE YOUR OWN ADVENTURE

	Welcome to this code your own adventure lesson. Let's get started!

	As the article stated, we will be using some built in JavaScript functions to get input from our player. The first thing we want to do is find out if the player actually wants to play the game. The first function we will use is
	called confirm. To use confirm, you invoke the function with a string as an argument, like this...

	confirm('Can you hear me now?');*/


	/*STEP 1: Create a variable called proceed and assign it to a confirm function that asks your player if they are ready to play. Then, log the variable proceed to the console.*/




	var proceed = confirm('You are about to embark on a great journey. Only the strong of arm and thick of hair shall prevail. Do you wish to proceed?');

	console.log(proceed);





	/*Notice what happens in the console when you choose either 'OK' or 'cancel'.


	STEP 2: Write an if/else statement using the value of the variable 'proceed' as the expression.

		- If the value is true we are going to use another built in function called prompt to ask the user 	their name. Assign the result of the function the the variable, playerName;

		- If it is false we will use a built in function called alert to give them a farewell message. You must return the function to stop running the program, otherwise the program will continue even if they choose not to play.*/





	if (proceed === true) {
		var playerName = prompt('What ist thou name, oh fearless one?');
	}

	else {
		return alert('Your spine is as thin as your hair! The forest folk shall sing of your cowardace for the rest of time.')
	}

	console.log(playerName);





	/*STEP 3: Now we have a player and we have saved a value for their name. Next we need to offer them a choice. Describe their environment and give them 2 options such as left or right.*/





	var choiceOne = prompt('You find yourself at the entrance of a dark cave. Etched in the stone above is a warning to any traveler who might stumble apon this place. "All without hair are welcome but beware. Should your locks be thick and strong, surley you will not last long." Do you "stay" or "run"?');





	/*STEP 4: Create an if/else if/else statement that produces a different result based on the players answer.

	 	- One option should end the game. The other should offer another prompt with two more options.

	 	-One option should include the variable playerName. You can do this by adding a string and the
	 	variable playerName together like this...

	 	'Blah blah blah ' + playerName + ' blah blah blah!'

	If the player's answer does not match any of the options, use the else statement to let them know that they
	didn't give a valid response.*/




	if (choiceOne === 'run') {
		return alert('You suspect that this is the lair of the dreaded beast Rogaineous and, being as vain as you are, you decide that you must not risk the health of your gorgeous hair by entering the cave. You turn and run away. As you run you notice a figure leave the cave and pursue you through the woods. You increase your gait in hopes of making it to town before the figure catches you. Just before you reach the clearing at the edge of the woods, you are over taken by the creature, Rogaineous. He drags you back to the cave and uses your hair to make a delicious spagetti. He offers to share but you choose to return to town in shame, just as bald as the day you were born. YOU LOSE!');
	}

	else if (choiceOne === 'stay') {
		var choice2 = prompt('You decide to wait outside the cave until someone else passes by so you can ask them to go in with you. An hour goes by and you begin to give up on aquiring a companion. Just as you rise to leave, it begins to rain. Fearing that the rain will ruin your perfect hair, you take a few steps into the cave to escape the downpour. As your eyes begin to adjust to the dark, you see a figure trembling in the corner. It is Rogaineous, the dreaded hair monster, although he does not look very dreadful now. You call out to him. "I am ' + playerName + ', and I am not afraid! He responds, "Well I am very afraid of the rain. Will you stay and keep me company until it ends?" Do you "stay" or "leave"?');
	}

	else {
		return alert('Your answer did not match either of the options. Since you can not follow directions, YOU LOSE!');
	}


	/*STEP 5: Add your final two conditional statements below. They should both be alerts. One will cause the player to lose, the other will cause them to win.*/

	if (choice2 === 'leave') {
		return alert('You reply to Rogaineous, "I would never stay to comfort the likes of you, the one who has stolen the hair of so many heads! You are a curse apon this land and I pray you die of fright tonight!" You turn to leave but before you get outside, a landslide covers the entrance trapping you in the cave. Rogaineous laughs maniacally and says, "Now your hair is mine forever!". YOU LOSE!');
	}

	else if (choice2 === 'stay') {
		return alert('You decide to stay with Rogaineous until the rain ends. You talk for hours and by the time the storm ends you have realized that you have a lot in common. You start a book club and get together every tuesday for dinner and reading. Eventually you move into the cave so that you and Rogaineous can work full time on writing a book for the village children. Your book is published by the royal library and becomes a huge success! You travel the world doing readings in every relm. You go down in history as the greatest authors of village children books of all time. YOU WIN!!!');
	}

	else {
		return alert('Your answer did not match either of the options. Since you can not follow directions, YOU LOSE!');
	}
};

adventure();
