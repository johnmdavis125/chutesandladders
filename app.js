console.log($); 

// Task 1
// Generate 10 boxes in a row
// Create player object
// Generate dieRoll
// Move player

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
}

$startButton.on("click", startGame); 



// COLOR PALETTE //

// $(() => {
//     const addColor = event => {
//       const color = $(event.target).css("background-color");
  
//       const $square = $("<div>");
//       $square.addClass("square");
//       // Or can do both in one line like this:
//       // const $square = $("<div class=square>");
  
//       // Give square the background color of the one user clicked on (event.target):
//       $square.css("background-color", color);
  
//       $myPalette.append($square);
//     };
  
//     const makePalette = () => {
//       $colorPalette.empty();
//       for (let i = 0; i < 150; i++) {
//         const $square = $("<div>");
//         $square.addClass("square");
//         // Generate a random hex number between 000000 and FFFFFF:
//         // const randHex = '#' + Math.floor(Math.random() * 16777215).toString(16);
//         // Or easier to understand when done as RGB values:
//         const red = Math.floor(Math.random() * 255);
//         const green = Math.floor(Math.random() * 255);
//         const blue = Math.floor(Math.random() * 255);
//         const randHex = "rgb(" + red + "," + green + "," + blue + ")";
//         // Or with template literal syntax:
//         // const randHex = `rgb(${red},${green},${blue})`;
//         $square.css("background-color", randHex);
//         $square.on("click", addColor);
  
//         $colorPalette.append($square);
//       }
//     };
  
//     const $colorPalette = $("#color-palette");
//     const $myPalette = $("#my-palette");
//     const $generate = $("#generate");
  
//     $generate.on("click", makePalette);
//   });



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