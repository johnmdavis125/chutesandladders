console.log($); 
let onlyChoosePlayersOnce = 0; 
let $userChoiceNumPlayers = 0; 

const closeModal1 = () => {
    $('#modal1').css('display', 'none'); 
    console.log('close modal1')

    console.log(`onlyChoosePlayersOnce is ${onlyChoosePlayersOnce}`); 
    if (onlyChoosePlayersOnce === 0){
        onlyChoosePlayersOnce += 1; 
        console.log(`onlyChoosePlayerOnce is ${onlyChoosePlayersOnce}`)
        console.log('running openModal2')
        openModal2(); 
    }
}

const closeModal2 = () => {
    $('#modal2').css('display', 'none'); 
    console.log('close modal2')
    event.preventDefault(); 
    takeUserInput(); 
}


const openModal1 = () => {
    $('#modal1').css('display', 'flex');
    $('#modal1Main').css('justify-content', 'center');
    console.log('open modal1'); 
}

const openModal2 = () => {
    $('#modal2').css('display', 'flex');
    $('#modal2Main').css('justify-content', 'center');
    console.log('open modal2'); 
}

const takeUserInput = () => {
    const $radioArr = $('.players'); 
    console.log($radioArr); 

    if ($radioArr[0].checked){
        $userChoiceNumPlayers = 2; 
    } else if ($radioArr[1].checked){
        $userChoiceNumPlayers = 3; 
    } else if ($radioArr[2].checked){
        $userChoiceNumPlayers = 4; 
    }

    startGame(); 
    // console.log($userChoiceNumPlayers); 
}

///////////////////
// PLAYER CLASS
//////////////////

class Player {
    constructor(name, color, playerImgSrc){
        this.name = name
        this.color = color
        this.playerImgSrc = playerImgSrc
        this.currentPos = 0;
    }
    move(){
        console.log(`player starts at ${this.currentPos}`)
        console.log(`player rolled a ${randNum}`)
        // let $playerImg = $(`<img class="player" src=${this.playerImgSrc} alt="pawn image">`)    
        // remove player from current position
        // $($playerImg).remove(); 
       
        // Update position based on die roll
        this.currentPos += randNum
        console.log(`New position is ${this.currentPos}`)
        
        // Add player to new position 
        // $('.player').eq(indexNum).appendTo(`#${this.currentPos}`);
        $(`#${currentPlayer.name}`).appendTo(`#${this.currentPos}`)
        console.log(`I just moved ${currentPlayer.name} to ${this.currentPos}`);

        checkWin(); 
    }
    //climb(ladder) - make dynamic 
    climb(currentLadder){
        
        const ladderStart = [1, 4, 9, 21, 28, 36, 51, 71, 80];
        const ladderEnd = [38, 14, 31, 42, 84, 44, 67, 91, 100];
        
        console.log('player climbs ladder');
        // Hard coded value for now  
        // this.currentPos += 10; 

        console.log(`${currentPlayer.name} about to climb from ${ladderStart[currentLadder]} to ${ladderEnd[currentLadder]}`); 
        this.currentPos = ladderEnd[currentLadder]; 
       
        console.log(`New position is ${this.currentPos}`)
        // append playerImg to current pos
        console.log(`this is currentPlayer about to climb ${currentPlayer.name}`)
        // $('.player').eq(indexNum).appendTo(`#${this.currentPos}`);
        $(`#${currentPlayer.name}`).appendTo(`#${this.currentPos}`)
        console.log(`I just moved ${currentPlayer.name} to ${this.currentPos}`);

            checkWin(); 
        }        
    fall(currentChute){

        const chuteStart = [16, 47, 49, 56, 62, 64, 93, 95, 98];
        const chuteEnd = [6, 26, 11, 53, 19, 60, 73, 75, 78]; 

        console.log('player falls down chute');
        // Hard coded value for now  
        // this.currentPos -= 10; 

        console.log(`${currentPlayer.name} about to fall from ${chuteStart[currentChute]} to ${chuteEnd[currentChute]}`); 
        this.currentPos = chuteEnd[currentChute]; 
       
        console.log(`New position is ${this.currentPos}`)
        // append playerImg to current pos
        console.log(`this is currentPlayer about to fall ${currentPlayer.name}`)
        // $('.player').eq(indexNum).appendTo(`#${this.currentPos}`);
        $(`#${currentPlayer.name}`).appendTo(`#${this.currentPos}`)
        console.log(`I just moved ${currentPlayer.name} to ${this.currentPos}`);
 
    }
}


// const player1 = new Player('Player 1', 0);  
// console.log(player1); 
///////////////

class PlayerFactory {
    constructor (name) {
        this.name = name;
        this.players = [];
        // include color of image? 
    }
    genPlayer (name, color, playerImgSrc) {
        const player = new Player(name, color, playerImgSrc); 
        this.players.push(player);
        // images

    }
}

       // let $playerImg = $(`<img class="player" src=${this.playerImgSrc} alt="pawn image">`) 







// const playMaker = new PlayerFactory('customNumPlayers')
// console.log(playMaker); 

// const playerImgSourceArr = ['Images/pawn_blue.jpg', 'Images/pawn_red.jpg', 'Images/pawn_green.jpg', 'Images/pawn_black.jpg']; 
// playerColors = ['blue', 'red', 'green', 'black']; 
// for (let i = 0; i < $userChoiceNumPlayers; i++){
//     console.log(playMaker); 
//     playMaker.genPlayer(`player${i + 1}`, `${playerColors[i]}`, `${playerImgSourceArr[i]}`); 
// }
// console.log(playMaker);

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
// console.log(ladder1); 
// BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK //
// BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK //
// BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK //
// BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK //
// BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK //
// BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK //
// BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK //
// BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK //
// BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK //
// BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK //
// BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK //
// BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK //
///////////////////////////////////////
// GAME SEQUENCE
///////////////////////////////////////
////////////////////
// GENBOARD() 
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

    // prompt with modal1 HERE // 
} 
////////////////////
// END GENBOARD()
////////////////////
//////////////////////////
// START SETPLAYERS()
//////////////////////////
const playMaker = new PlayerFactory('customNumPlayers')
console.log(playMaker);
console.log(playMaker.players);  
let $playerArray = []; 

// let userChoiceGlobal = 0; 

const setPlayers = () => {
    // const $userChoiceNumPlayers = prompt('How many players?'); 
    // let $playerImg = $(`<img class="player" src=${this.playerImgSrc} alt="pawn image">`) 
    // userChoiceGlobal = $userChoiceNumPlayers; 

    // const playMaker = new PlayerFactory('customNumPlayers')
    console.log('this is playMaker');
    console.log(playMaker); 

    const playerImgSourceArr = ['Images/pawn_blue.jpg', 'Images/pawn_red.jpg', 'Images/pawn_green.jpg', 'Images/pawn_black.jpg']; 
    const playerColors = ['blue', 'red', 'green', 'black']; 
    

    // generate players
    for (let i = 0; i < $userChoiceNumPlayers; i++){
        // console.log('this is playmaker'); 
        // console.log(playMaker); 
        playMaker.genPlayer(`player${i + 1}`, `${playerColors[i]}`, `${playerImgSourceArr[i]}`); 

        // Place image in starting area
        let $playerImg = $(`<img id="player${i+1}" class="player" src=${playerImgSourceArr[i]} alt="pawn image">`)
        $playerImg.appendTo(`#spot${i}`);  
    }
    // console.log('this is playmaker third time'); 
    // console.log(playMaker);
    
    $playerArray = $('.player')    //.children();  
    console.log('this is playerArray'); 
    console.log($playerArray); 

    //set index for when switchturn runs
    highestIndex = $playerArray.length; 
    console.log(`this is highest ${highestIndex}`); 
}
    // Place in starting area
    // let $playerImg = $(`<img class="player" src=${this.playerImgSrc} alt="pawn image">`)   

//////////////////////////
// END SETPLAYERS()
//////////////////////////

//////////////////////////
// START CHECKWIN()
//////////////////////////

const checkWin = () => {
    console.log('did I win?'); 
    console.log(currentPlayer); 

    if (currentPlayer.currentPos < 100){
        console.log(`Keep movin ${currentPlayer.name}, not there yet`)
    } else {
        console.log(`${currentPlayer.name} wins!`)
        alert(`${currentPlayer.name} wins!`)
    }
}

//////////////////////////
// END CHECKWIN()
//////////////////////////


////////////////////
// START SWITCHTURN()
////////////////////
// const $playerArray = $('.player').children();  
// console.log('this is playerArray'); 
// console.log($playerArray); 
let indexNum = 0; 
let highestIndex = 0; 
// console.log(`global choice ${userChoiceGlobal}`); 
const switchTurn = () => {
    console.log(`switchTurn just called - indexNum is ${indexNum}`); 
    // highestIndex = $playerArray.length; 
    console.log(`highest index again ${highestIndex}`)
    
    // if (indexNum === highestIndex){
    //     indexNum = 0; 
    // } else if (indexNum < highestIndex){
    //     indexNum += 1; 
    // } else {
    //     console.log(`indexNum is ${indexNum}`)
    // }
    
    if (indexNum < highestIndex -1){
        indexNum += 1; 
    } else {
        indexNum = 0; 
    }
        console.log(`switchTurn just ran - indexNum is ${indexNum}`); 
}
////////////////////
// END SWITCHTURN()
////////////////////


///////////////////////
// checkFallOrClimb()
///////////////////////
//let startPoints = array of lad/chute starting positions? 

const checkFallOrClimb = () => {

    const ladderStartPoints = [1, 4, 9, 21, 28, 36, 51, 71, 80]; 
    const chuteStartPoints = [16, 47, 49, 56, 62, 64, 93, 95, 98]; 

    // const checkClimb = (startPoint => startPoint === playMaker.players[indexNum].currentPos);
    const checkClimb = (startPoint => startPoint === currentPlayer.currentPos);
    let climbTime = ladderStartPoints.findIndex(checkClimb);
    if (climbTime >= 0){
        console.log(`time to climb ladder${climbTime + 1}`);
        // playMaker.players[indexNum].climb();
        currentPlayer.climb(climbTime);   
    } else {
        console.log('no ladders, check for chutes'); 
    }

    // const checkFall = (startPoint => startPoint === playMaker.players[indexNum].currentPos); 
    const checkFall = (startPoint => startPoint === currentPlayer.currentPos); 
    let fallTime = chuteStartPoints.findIndex(checkFall); 
    if (fallTime >= 0){
        console.log(`time to fall down chute${fallTime + 1}`); 
        // playMaker.players[indexNum].fall();
        currentPlayer.fall(fallTime);  
    } else {
        console.log(`no chutes, next player's turn!`); 
    }
}


///////////////////////
// END checkFallOrClimb()
///////////////////////

/////////////////////
// rollDie()
/////////////////////
let randNum = 0; 
const rollDie = () => {
        randNum = Math.floor(Math.random() * 6) + 1
        console.log(`die rolled is ${randNum}`); 


}

////////////////////
// playTurn()
////////////////////
let currentPlayer = 0; 
const playTurn = () => {
    console.log('this is playMaker');
    console.log(playMaker);
    console.log(indexNum); 
    console.log(`this is highest ${highestIndex}`)

    currentPlayer = playMaker.players[indexNum];
    console.log(currentPlayer);  

    rollDie(); 

    console.log(`about to run currentPlayer.move(), currentPlayer is ${currentPlayer.name}`)
    currentPlayer.move();  
    
    console.log(`about to run checkFallOrClimb, currentPlayer is ${currentPlayer.name}`)
    checkFallOrClimb(); 
    
    console.log(`about to run switchTurn, currentPlayer is ${currentPlayer.name}`)
    switchTurn();  
}

////////////////////
// startGame()
////////////////////
const setup = () => {
    openModal1();   
}

const startGame = () => {
    genBoard();
    setPlayers();  
}

const $startButton = $('#start-button');
const $dieRollButton = $('#playTurn-button'); 
const $openModalButton = $('#openModal1-button'); 
const $closeModalButton = $('#closeModal1-button'); 
const $submitButton = $('#submitNumPlayers'); 
const $board = $('#game-board');

// Event Listeners
// $startButton.on("click", startGame); 
$dieRollButton.on("click", playTurn); 
$openModalButton.on("click", openModal1); 
$closeModalButton.on("click", closeModal1); 
$submitButton.on("click", closeModal2); 

setup(); 

// BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK //
// BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK //
// BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK //
// BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK //
// BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK //
// BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK //
// BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK //
// BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK //
// BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK //
// BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK //
// BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK //

// TRASH 


// for loop - makes custom # players - calls genPlayer ftn


// // Create new instance of Factory class called ladderFactory
// const ladderFactory = new Factory('Ladders Inc');

// 
//////////////////////
// /// CORGIS////
//     // VARIABLES

//     // EVENT HANDLERS
//     const nextImg = () => {
//         $imgArray.eq(currentImgIndex).css('display', 'none');
//         if(currentImgIndex < highestIndex) {
//           currentImgIndex ++;
//         } else {
//           currentImgIndex = 0;
//         }
//         console.log(currentImgIndex);
//         $imgArray.eq(currentImgIndex).css('display', 'block');
//       } 
//////////////////////


//////////////////////////////////////////////
// Attempt at creating player turn cycle
// let currentTurn = playersArr[indexNum]; 
// // let currentPlayer = playMaker.players[currentTurn]; 
// const switchTurn = () => {
// console.log('starting switchTurn ftn');
// console.log($userChoiceNumPlayers); 
// console.log(`this player has current Turn ${currentTurn}`); 
// // console.log(currentPlayer); 
    
//     if (indexNum === $userChoiceNumPlayers){
//         indexNum -= $userChoiceNumPlayers 
//     }

//     indexNum += 1; 
//     console.log(currentTurn)
//     currentPlayer = playMaker.players[currentTurn];

//     // feedback only
//     if (currentTurn === $userChoiceNumPlayers){
//     console.log(`it is now ${playMaker.players[0].name}'s turn`)
//     } else {
//         console.log(`it is now ${playMaker.players[currentTurn].name}'s turn`)
//     }
//     // come back to this - it doesn't like .name after 4 rolls
//     // probably a problem with logic in switchTurn()

// }
//////////////////////////////////////////////

// look through array methods homework - need one to execute a function based on the first instance of criteria

// let playersArr = []; 
// for (let i = 0; i < $userChoiceNumPlayers; i++){
//     playersArr.push(i); 
// }
// console.log(playersArr); 
// // need to think through SCOPE ********************



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

    // Add "DEMO" button
        // runs through 50 cycles of the rollDie() action
        // place a very brief pause in between each cycle so its legible


        // Task 1 - COMPLETE!!!
// Generate 10 boxes in a row
// Create player object
// Generate playTurn
// Move player 

// Task 2 - COMPLETE!!!
// Generate Full Board
// Give genBoard function to Start Game button
// Create new button called roll
// Give rollDie & move call statement to roll button
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

// Task 6 - COMPLETE!!!
// Create player factory
    // write func genPlayers(user selects 'numPlayers')
    // Create instance
        // store players in an array which can be accessed via object.dotNotation[index]
 
// Task 8 - COMPLETE!!!
// Make ladders dynamic
// Make ladder factory
// create instance of factory
    // genLadders() method
        // for loop - takes index values of startPoint arrays already built to customize each build
// ladders will be an array of objects
// add chutes

// Task 7 - COMPLETE!!!
// Make numPlayers dynamic
    // Prompt user - store & manipulate value

// Task 9 - COMPLETE!!!
// Build Win State

// Task 10 - COMPLETE!!!
// Modal

// Task 11 - Working 
// Ask for user name
    // Display user name

// Animations
// Functionally limit user inputs, include prompts/alerts
// Styling
// Build demo button - runs through 50 rolls
// Add win state to logic
// Display current players turn
// Ask for user name
// Allow user to select player image
// single or double quotes - pick one
// consistent ID/var names (dashes, underscores, etc.)