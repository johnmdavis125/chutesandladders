console.log($); 

// Task 1 - COMPLETE!!!
// Generate 10 boxes in a row
// Create player object
// Generate dieRoll
// Move player 

// Task 2 - COMPLETE!!!
// Generate Full Board
// Give genBoard function to Start Game button
// Create new button called roll
// Give genRandNum & movePlayer call statement to roll button
// Test if you can roll multiple times along the full board
// Don't worry about format of board until next task

// Task 3 - Working
// Upgrade genBoard() to include flex formatting to reflect true board layout
// Hard code styles in CSS to pre-empt genBoard()



class Player {
    constructor(name, currentPos){
        this.name = name
        this.currentPos = currentPos
    }
    movePlayer(){
        console.log(`player starts at ${this.currentPos}`)
        console.log(`player rolled a ${randNum}`)
        // Reset current pos back to game board
        $(`#${this.currentPos}`).css('background-image', 'none');
        // Add die roll to current position
        this.currentPos += randNum
        console.log(`New position is ${this.currentPos}`)
        // Place player on new space
        $(`#${this.currentPos}`).css('background-image', 'url("Images/pawn_blue.jpg")'); 
        $(`#${this.currentPos}`).css('background-size', '100px'); 
    }
    //fall()
    //climb()
}

const player1 = new Player('Player 1', 0, 0);  
console.log(player1); 


// BREAK // BREAK // BREAK // BREAK //
const $startButton = $('#start-button');
const $dieRollButton = $('#dieRoll-button'); 
const $board = $('#board');

////////////////////
// genBoard() 
////////////////////
// Could use 'i' for setting box ID's, but decided to use boxIdCounter to be more descriptive for readability
// let boxCounter = 1;
let rowCounter = 0;  
let toggle = false; 
const genBoard = () => {
    $board.empty();
    for (let i = 0; i < 10; i++) {
        let $row = $('<div>'); 
        if (toggle === false){
            $row.addClass('row-standard'); 
        } else {
            $row.addClass('row-reverse');
        }
        $row.appendTo('#game-board'); 

        let boxCounter = 1 + (rowCounter * 10)
        for (let i = 0; i < 10; i++){
            const $box = $('<div>');
            $box.addClass('box');
            $box.attr('id', boxCounter);
            $box.text(boxCounter);    
            $box.appendTo($row); 
            console.log($box); 
            boxCounter += 1; 
        }        
    // toggle (re-factor later with element.toggleAttribute() )
    if (toggle === false){
        toggle = true; 
    } else {
        toggle = false; 
    }
    rowCounter += 1; 
    } // end outer for loop
} // END genBoard()


let randNum = 0; 
const genRandNum = () => {
    // for (let i = 0; i < 100; i++){
        randNum = Math.floor(Math.random() * 6) + 1
        console.log(randNum); 
    //}
    player1.movePlayer(); 
}

const startGame = () => {
    genBoard(); 

}
const dieRoll = () => {
    genRandNum(); 
}

$startButton.on("click", startGame); 
$dieRollButton.on("click", dieRoll); 

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