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
// Give genRandNum & move call statement to roll button
// Test if you can roll multiple times along the full board
// Don't worry about format of board until next task

// Task 3 - COMPLETE!!!
// Upgrade genBoard() to include flex formatting to reflect true board layout
// Hard code styles in CSS to pre-empt genBoard()

// Task 4 - COMPLETE!!!
// Set board image to the game-board div
// update move() method - only display box for players current position
    // Changed the approach here to incorporate z-index. 
    // Bug-hunted for a while - z-index is complicated, does not allow for manipulation of background-images...which is exactly what I was trying to use it for. So, had to make some workarounds. 

// Task 5 - COMPLETE!!!
// Re-arrange order of operations to avoid duplicate game boards
// Create a test ladder
// Add checkFallorClimb() to rollDie function

// Task 6 - Working
// Create player factory
    // write func genPlayers(user selects 'numPlayers')
    // Create instance
        // store players in an array which can be accessed via object.dotNotation[index]
 
// Task 7 - Not started
// Make ladders dynamic
// Make ladder factory
// create instance of factory
    // genLadders() method
        // for loop - takes index values of startPoint arrays already built to customize each build
// ladders will be an array of objects
// add chutes

// Task 8 - Not started
// Make numPlayers dynamic
    // Prompt user - store & manipulate value



///////////////////
// PLAYER CLASS
//////////////////

class Player {
    constructor(name, currentPos){
        this.name = name
        this.currentPos = currentPos
    }
    move(){
        // To be commented out - feedback
        console.log(`player starts at ${this.currentPos}`)
        console.log(`player rolled a ${randNum}`)
        // remove player from current position
        const $playerImg = $('<img id="playerImage" src="Images/pawn_blue.jpg" alt="pawn image">')
        $('#playerImage').remove(); 
        // Update position based on die roll
        this.currentPos += randNum
        console.log(`New position is ${this.currentPos}`)
        // Add player to new position
        $playerImg.appendTo(`#${this.currentPos}`);
    }
    //climb(ladder) - make dynamic
    climb(){
        const $playerImg = $('<img id="playerImage" src="Images/pawn_blue.jpg" alt="pawn image">')
        console.log('player climbs ladder'); 
        if (player1.currentPos === ladder1.startPos){
            $('#playerImage').remove();
            player1.currentPos = ladder1.endPos
            $playerImg.appendTo(`#${ladder1.endPos}`)
        } else {
            console.log('invalid result'); 
        }        
    }
    fall(chute){
        console.log('player falls down chute'); 
    }
}

const player1 = new Player('Player 1', 0);  
console.log(player1); 

///////////////

class PlayerFactory {
    constructor (company) {
        this.company = company;
        this.players = [];
    }
    genPlayer () {
        const player = new PlayerFactory(this.company, this.laddersArray.length);
        this.players.push(player);
    }
}

// // Create new instance of Factory class called ladderFactory
// const ladderFactory = new Factory('Ladders Inc');


////////////////////
// LADDER CLASS
////////////////////

class Ladder {
    constructor(name, startPos, endPos){
        this.name = name
        this.startPos = startPos
        this.endPos = endPos
    }
}

const ladder1 = new Ladder('ladder1', 1, 38); 
console.log(ladder1); 

///////////////////
// CHUTE CLASS
///////////////////

// class Chute {
//     constructor(name, startPos, endPos){
//         this.name = name
//         this.startPos = startPos
//         this.endPos = endPos
//     }
// }



// BREAK // BREAK // BREAK // BREAK //
const $startButton = $('#start-button');
const $dieRollButton = $('#dieRoll-button'); 
const $board = $('#game-board');



////////////////////
// genBoard() 
////////////////////
// Could use 'i' for setting box ID's, but decided to use boxIdCounter to be more descriptive for readability
// let boxCounter = 1;
let rowCounter = 0;  
let toggle = false; 
const genBoard = () => {
    $board.empty();

    // const $img = $('<img id="backgroundImage" src="Images/chutes and ladders board.jpg" alt="game board image">')
    // $img.appendTo('#game-board')
    // $img.css('position', 'absolute');  

    for (let i = 0; i < 10; i++) {
        let $row = $('<div>'); 
        if (toggle === false){
            $row.addClass('row-standard'); 
        } else {
            $row.addClass('row-reverse');
        }

        let boxCounter = 1 + (rowCounter * 10)
        for (let i = 0; i < 10; i++){
            const $boxOuter = $('<div>');
            const $boxInner = $('<div>'); 
            $boxOuter.addClass('boxOuter');
            // $boxInner.addClass('boxInner');
            $boxOuter.attr('id', boxCounter);
            // $boxInner.attr('id', boxCounter + 0.5);
            $boxOuter.text(boxCounter);    
            // $boxInner.text('hi');    
            // $boxInner.appendTo($boxOuter)
            $boxOuter.css('position', 'relative');
            $boxOuter.appendTo($row); 
            console.log($boxOuter); 
            // console.log($boxInner); 
            boxCounter += 1; 

        }        
    // toggle (re-factor later with element.toggleAttribute() )
    if (toggle === false){
        toggle = true; 
    } else {
        toggle = false; 
    }
    rowCounter += 1; 
    $row.appendTo('#game-board'); 
    // $row.appendTo('#backgroundImage'); 
    } // end outer for loop

    // place actual board image
    const $img = $('<img id="backgroundImage" src="Images/chutes and ladders board.jpg" alt="game board image">')
    $img.css('height', '1000px'); 
    $img.css('width', '1000px'); 
    // toggle z-index to 0 to see blue square grid
    $img.css('z-index', '1'); 
    $img.css('position', 'absolute');  
    $img.appendTo('#game-board');
    // $img.css('left', '100px');  

} // END genBoard()

/////////////////////
// genRandNum()
/////////////////////
let randNum = 0; 
const genRandNum = () => {
    // for (let i = 0; i < 100; i++){
        randNum = Math.floor(Math.random() * 6) + 1
        console.log(randNum); 
    //}
    player1.move(); 
}

////////////////////
// startGame()
////////////////////

const startGame = () => {
    //modal
    //prompt names
    genBoard(); 

}

////////////////////
// dieRoll()
////////////////////
const dieRoll = () => {
    genRandNum(); 
    // genRandNum() includes moving the player with move() method
    // checkFallOrClimb(); 
// }

///////////////////////
// checkFallOrClimb()
///////////////////////

//let startPoints = array of lad/chute starting positions? 
const ladderStartPoints = [1, 4, 9, 21, 28, 36, 51, 71, 80]; 
const chuteStartPoints = [16, 47, 49, 56, 62, 64, 93, 95, 98]; 
const checkClimb = (startPoint => startPoint === player1.currentPos);
let climbTime = ladderStartPoints.findIndex(checkClimb);
if (climbTime >= 0){
    console.log(`time to climb ladder${climbTime + 1}`);
    player1.climb(); 
} else {
    console.log('no ladders, check for chutes'); 
}

const checkFall = (startPoint => startPoint === player1.currentPos); 
let fallTime = chuteStartPoints.findIndex(checkFall); 
if (fallTime >= 0){
    console.log(`time to fall down chute${fallTime + 1}`); 
    player1.fall();
} else {
    console.log(`no chutes, next player's turn!`); 
}



// look through array methods homework - need one to execute a function based on the first instance of criteria

}





//
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

// FUTURE TASKS
// Task - later
    // write a function that runs through 100 rounds of the game? 

// Task - later 
    // build array of objects - to make game rounds dynamic
    // build a custom array based on # of players user selects
        // array position will be additional input to all the functions
    // with each die roll, index position updates
    // conditional - if reach end of index, start over
    // app.js - css - only change id or class, styling should be in style.css file

    // PROGRAM START






// RE-FACTOR TO-DOs
    // Switch styling of player & board image to inherinted properties from classes on style.css
    // Change append player image to append player itself in move() method on player class
    // Change style - position relative to .boxOuter