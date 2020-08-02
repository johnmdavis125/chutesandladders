console.log($); 

// Task 1
// Generate 10 boxes in a row
// Create player object
// Generate dieRoll
// Move player 

class Player {
    constructor(name, currentPos){
        this.name = name
        this.currentPos = currentPos
    }
    //move()
    //fall()
    //climb()
}

const player1 = new Player('Player 1', 0, 0);  
console.log(player1); 


// BREAK // BREAK // BREAK // BREAK //
const $startButton = $('#start-button');
const $board = $('#board');

let boxIdCounter = 0; 
const genBoard = () => {
    $board.empty();
    for (let i = 0; i < 10; i++) {
      const $box = $('<div>');
      $box.addClass('box');
      $box.attr('id', i + 1);
      $box.text(i + 1);  
      $box.appendTo('body'); 
      console.log($box); 
    }
}

const startGame = () => {
    genBoard(); 

    // $('#2').css('background-image', )

}

$startButton.on("click", startGame); 

//


// BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK //

//////////////////////////
///     PSEUDO CODE    ///
//////////////////////////

// HTML
    // Outer game board set by pre-set HTML
        // Start Game button
        // Board Container
// CSS
    // Classes, ID's pre-set to style game board boxes upon game load
    // Animations
        // Die roll
        // Player move
        // Player Fall
        // Player Climb
        // Player celebrate win?

// JS

// Classes
    // Player Class
    // Ladder Class
    // Chute Class

    // All three class types will have properties that store their current position on the board. The player class will also have methods to coordinate their movement. 

// Objects
    // Player 1 & 2
    // Ladders x 8
    // Chutes x 10

// Functions / Methods
    // startGame
        // genBoard
        // Display Modal
        // Prompt for player names
        
    // rollDie
        // Gen rand #
        // display roll value
        // player move() - method
        // checkFallorClimb()
        // toggle players turn - display
        
    // checkFallOrClimb
        // conditional if
            // fallDown()
            // climbUp() 
        // checkWin
        
// Event Listeners
    // Start Game Button
    // Modal - how to play 
        // Open & Close
    // Restart Game (Home screen) Button
    // Roll Die Button

// REFERENCES

// Modal Mockup - including timed popup
// Generate boxes - color palette
// Classes / objects - space battle/lanscaper
// Selecting/moving objects in DOM - lotr/to-do list
// Animations - watch video
// Fade in/out - watch arthur's demo from ...day??

// Research Q's
// How to Refresh Browser to play next game?
// How to do animations


// WAITING AREA

// class Player {
//     constructor(name, startPos, endPos){
//         this.name = name
//         this.startPos = startPos
//         this.endPos = endPos
//     }
//     //move()
//     //fall()
//     //climb()
// }
// class Ladder {
//     constructor(name, startPos, endPos){
//         this.name = name
//         this.startPos = startPos
//         this.endPos = endPos
//     }
// }
// class Chute {
//     constructor(name, startPos, endPos){
//         this.name = name
//         this.startPos = startPos
//         this.endPos = endPos
//     }
// }

// class Factory {
//     constructor (company) {
//         this.company = company;
//         this.laddersArray = [];
//     }
//     generateLadder () {
//         const ladder = new Ladder(this.company, this.laddersArray.length);
//         this.laddersArray.push(ladder);
//     }
// }

// // Create new instance of Factory class called ladderFactory
// const ladderFactory = new Factory('Ladders Inc');