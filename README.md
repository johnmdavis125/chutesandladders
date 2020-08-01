
# chutesandladders
<!--
/////////////////////
// GAME DESCRIPTION
/////////////////////

Chutes & Ladders is a classic boardgame I grew up with as a kid. 

There are 100 squares on the board and 2+ players. The number of spaces the player advances each turn is determined by rolling a die once per turn. If the player lands at the bottom of a ladder, they immediately climb to the top. If the child lands at the top of a chute, they immediately slide to the bottom. The win state is reached when a player lands exactly on square 100, at which point the other player loses. The game will continue until this 
happens.  

/////////////////////
// MVP
/////////////////////

- There will be 2 players
- Locations of the chutes & ladders are pre-set & reflect the classic game board layout. 
- At the beginning of the game, a modal will appear with a game description 
- The players can then enter their names which will be displayed when it is their turn
- The player will take their turn by clicking the "roll the die" button to generate a       random number between 1 - 6
- The number of wins for each player will be displayed
- Either player has the option of clicking on the "how to play button" at any time
- Either player has the option of clicking on the "reset game" button at any time
- The name of the winner will be displayed at the end of the game
- The option to play again or quit will be presented at the end of the game

- Commits to Github every day
/////////////////////
// STRETCH GOALS
/////////////////////

- CSS Animations!

/////////////////////
// Technologies used 
/////////////////////

- Built with HTML, CSS, JavaScript and jQuery 
- Played in the DOM, not the console
- Hosted on Github pages or Vercel
- Hosted in repository on my personal github account

/////////////////////
// The approach taken
/////////////////////

In the spirit of OOP, I intend to use objects to organize the flow of the game logic. 

There will be classes for the players, ladders, and chutes. 

All three class types will have properties that store their current position on the board. The player class will also have methods to coordinate their movement. 

Event listeners & functions will be written in such a way that the entire scope of a players' activity will be activated upon a player simply clicking the "roll the die" button once at the beginning of her/her turn. This activity will be reflected by feedback via visual animations or text-based messages.   

Upon Game start, the program will: 
    - Welcome the players & ask for their names
    - Provide a game description
    - Prompt to begin the game

Upon die roll, the program will: 
    - Generate a random # between 1 - 6
    - Move the current player accordingly
    - Check if at base of a ladder or top of a chute
    - Move accordingly
    - Check if win state reached
    - If win, display winner, iterate scoreboard & prompt for play again or quit
    - If not, switch to the other player's turn

/////////////////////
// Site Link
/////////////////////

// Link

/////////////////////
// Unsolved problems, 
/////////////////////

//

/////////////////////
// Future Updates
/////////////////////

//

/////////////////////
// MISC
/////////////////////

//

////////////////////////////
// DEPLOYMENT & MVP TIMELINE
////////////////////////////
// Friday
    // Research deployment process
    // Wireframe
    // Detailed Pseudo Code
        // Break down the project into parts
// Saturday
    // Build initial html/css/js files 
    // Deploy to GitHub!
    // Build HTML & some basic CSS 
        // Use wireframe to set initial classes/id's
    // Start JS (pending successful deployment to GitHub)
// Sunday
    // JS
// Monday
    // JS
// Tuesday
    // Reach MVP
    // Implement Stretch Goal
    // All functionality complete by end of day
// Wednesday
    // Clean up code & comments
    // Practice presentation 
// Thursday
    // Project Due at 1000
-->