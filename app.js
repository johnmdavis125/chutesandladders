console.log($); 
let onlyChoosePlayersOnceInit = 0; 
let onlyChoosePlayersOnce = 0; 
let $userChoiceNumPlayers = 0; 
// MODAL 1 INIT - Welcome (how to play)
const openModal1Init = () => {
    $('#modal1Init').css('display', 'flex');
    $('#modal1InitMain').css('justify-content', 'center');
    console.log('open modal1Init'); 
}
const closeModal1Init = () => {
    $('#modal1Init').css('display', 'none'); 
    console.log('close modal1Init')
    openModal2(); 
}
// MODAL 1 MID - Welcome (how to play)
const openModal1Mid = () => {
    $('#modal1Mid').css('display', 'flex'); 
    $('#modal1Main').css('justify-content', 'center');
    console.log('openModal1Mid') 
}
const closeModal1Mid = () => {
    $('#modal1Mid').css('display', 'none'); 
    console.log('close modal1Mid') 
}
// MODAL 1 - for future rounds - Welcome (how to play)
const openModal1 = () => {
    $('#modal1').css('display', 'flex');
    $('#modal1Main').css('justify-content', 'center');
    console.log('open modal1'); 
}
const closeModal1 = () => {
    $('#modal1').css('display', 'none'); 
    console.log('close modal1')
    openModal2(); 
}
// MODAL 2 - choose number of players
const openModal2 = () => {
    $('#modal2').css('display', 'flex');
    $('#modal2Main').css('justify-content', 'center');
    console.log('open modal2'); 
    event.preventDefault(); 
}
const closeModal2 = () => {
    $('#modal2').css('display', 'none'); 
    console.log('close modal2')
    event.preventDefault(); 
    getNumPlayers(); 
}
const getNumPlayers = () => {
    const $radioArr = $('.players'); 
    console.log($radioArr); 
    if ($radioArr[0].checked){
        $userChoiceNumPlayers = 2; 
    } else if ($radioArr[1].checked){
        $userChoiceNumPlayers = 3; 
    } else if ($radioArr[2].checked){
        $userChoiceNumPlayers = 4; 
    }
    event.preventDefault(); 
    genModal3(); 
    // console.log($userChoiceNumPlayers); 
}
const genModal3 = () => {
    
    $('#player1Name').val(''); 
    $('#player2Name').val(''); 
    
    let $numNames = $('.playerNames'); 
    if ($numNames.length === 4){
        $('#player3Name').remove(); 
        $('#player3Label').remove(); 
        $('#player4Name').remove(); 
        $('#player4Label').remove(); 
    } else if ($numNames.length === 3){
        $('#player3Name').remove(); 
        $('#player3Label').remove(); 
    } else {
        console.log('2 players'); 
    }
    
    for (let i = 2; i < $userChoiceNumPlayers; i++){
        // generate form input element
        let $newPlayerNameInput = $(`<input type="text" id="player${i+1}Name" class="playerNames">`)
        let $newPlayerNameLabel = $(`<label for="player${i+1}Name" id="player${i+1}Label" class="labels">Player ${i+1} Name</label>`)
        // append to form > div container on modal 3
        $($newPlayerNameLabel).appendTo('#nameContainer'); 
        $($newPlayerNameInput).appendTo('#nameContainer');  
    }
    event.preventDefault(); 
    openModal3(); 
}
// MODAL 3 - enter player names
const openModal3 = () => {
    $('#modal3').css('display', 'flex');
    $('#modal3Main').css('justify-content', 'center');
    console.log('open modal3'); 
    event.preventDefault(); 
}
const closeModal3 = () => {
    $('#modal3').css('display', 'none'); 
    console.log('close modal3')
    event.preventDefault(); 
    displayPlayerNames(); 
}
let $namesArray = []; 
const displayPlayerNames = () => {
    let $player1Name = $('#player1Name').val();
    $namesArray.push($player1Name); 
    let $player2Name = $('#player2Name').val(); 
    $namesArray.push($player2Name); 
    if ($userChoiceNumPlayers === 3){
        let $player3Name = $('#player3Name').val(); 
        $namesArray.push($player3Name);  
    } else if ($userChoiceNumPlayers === 4){
        let $player3Name = $('#player3Name').val(); 
        $namesArray.push($player3Name);  
        let $player4Name = $('#player4Name').val(); 
        $namesArray.push($player4Name);
    }
    $('#currentPlayerDisplay').text(`${$player1Name}'s turn!`);
   startGame(); 
}
// MODAL 4 - Win state!
const openModal4 = () => {
    $('#modal4').css('display', 'flex');
    $('#modal4Main').css('justify-content', 'center');
    console.log('open modal4'); 
    event.preventDefault(); 
}
const closeModal4 = () => {
    $('#modal4').css('display', 'none'); 
    console.log('close modal4')
   
    // RESET PLAYERS, GLOBAL VARIABLES, DOM INPUTS
    for (let i = 0; i < $namesArray.length; i++){
        $(`#player${i+1}`).remove(); 
        // alert(`player${i+1} image removed - currentPos is ${playMaker.players[i].currentPos} - about to change to 0`);
        playMaker.players[i].currentPos = 0; 
        console.log(`${playMaker.players[i].name}'s position is reset to ${playMaker.players[i].currentPos}`);
    }
    $('#currentPlayerDisplay').text(''); 
    $('#rollNumber').text(''); 
    indexNum = 0;  
    $namesArray = []; 
    $playerArray = []; 
    rowCounter = 0;  
    toggle = false; 
    genBoardOnce = false; 
    highestIndex = 0; 
    randNum = 0; 
    currentPlayer = 0; 
    $userChoiceNumPlayers = 0;
    playMaker.players = []; 
    //start next round
    event.preventDefault(); 
    openModal1();  
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
       
        // Update position based on die roll
        this.currentPos += randNum
        console.log(`New position is ${this.currentPos}`)
        
        // Add player to new position 
        $(`#${currentPlayer.name}`).appendTo(`#${this.currentPos}`)
        console.log(`I just moved ${currentPlayer.name} to ${this.currentPos}`);

        checkWin(); 
    }
    //climb(ladder) - make dynamic 
    climb(currentLadder){
        
        const ladderStart = [1, 4, 9, 21, 28, 36, 51, 71, 80];
        const ladderEnd = [38, 14, 31, 42, 84, 44, 67, 91, 100];
        
        console.log('player climbs ladder');

        console.log(`${currentPlayer.name} about to climb from ${ladderStart[currentLadder]} to ${ladderEnd[currentLadder]}`); 
        this.currentPos = ladderEnd[currentLadder]; 
       
        console.log(`New position is ${this.currentPos}`)
        // append playerImg to current pos
        console.log(`this is currentPlayer about to climb ${currentPlayer.name}`)
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

///////////////////////////////////////
// GAME SEQUENCE
///////////////////////////////////////
////////////////////
// GENBOARD() 
////////////////////
let rowCounter = 0;  
let toggle = false; 
let genBoardOnce = false; 
const genBoard = () => {

    if (genBoardOnce === false){
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
                // const $boxInner = $('<div>'); 
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
        if (toggle === false){
            toggle = true; 
        } else {
            toggle = false; 
        }
        rowCounter += 1; 
        $row.appendTo('#game-board'); 
        } // end outer for loop

        genBoardOnce = true; 
    }
        // place actual board image
        const $img = $('<img id="backgroundImage" src="Images/chutes and ladders board.jpg" alt="game board image">')
        $img.css('height', '1000px'); 
        $img.css('width', '1000px'); 
        // toggle z-index to 0 to see blue square grid
        $img.css('z-index', '1'); 
        $img.css('position', 'absolute');  
        $img.appendTo('#game-board');
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

const setPlayers = () => {
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
    
    $playerArray = $('.player')    
    console.log('this is playerArray'); 
    console.log($playerArray); 

    //set index for when switchturn runs
    highestIndex = $playerArray.length; 
    console.log(`this is highest ${highestIndex}`); 
}
//////////////////////////
// END SETPLAYERS()
//////////////////////////

//////////////////////////
// START CHECKWIN()
//////////////////////////
//Update Scoreboard
let player1wins = 0; 
let player2wins = 0; 
let player3wins = 0; 
let player4wins = 0; 
const checkWin = () => {
    console.log('did I win?'); 
    console.log(currentPlayer); 

    if (currentPlayer.currentPos < 100){
        console.log(`Keep movin ${currentPlayer.name}, not there yet`)
    } else {
        console.log(`${currentPlayer.name} wins!`)
        
        // update modal 4
        $('#winnerH1').text(`Congratulations! This game's winner is ${$namesArray[indexNum]}`)

        if (indexNum === 0){
            player1wins += 1; 
            $('#player1wins').text(`Player 1 Wins: ${player1wins}`)
        } else if (indexNum === 1){
            player2wins += 1; 
            $('#player2wins').text(`Player 2 Wins: ${player2wins}`)
        } else if (indexNum === 2){
            player3wins += 1; 
            $('#player3wins').text(`Player 3 Wins: ${player3wins}`)
        } else {
            player4wins += 1; 
            $('#player4wins').text(`Player 4 Wins: ${player4wins}`)
        }    
        //Congratulate!
        openModal4(); 
    }
}
//////////////////////////
// END CHECKWIN()
//////////////////////////

////////////////////
// START SWITCHTURN()
////////////////////
let indexNum = 0; 
let highestIndex = 0; 
// console.log(`global choice ${userChoiceGlobal}`); 
const switchTurn = () => {
    console.log(`switchTurn just called - indexNum is ${indexNum}`); 
    // highestIndex = $playerArray.length; 
    console.log(`highest index again ${highestIndex}`)
    
    if (indexNum < highestIndex -1){
        indexNum += 1; 
    } else {
        indexNum = 0; 
    }
        console.log(`switchTurn just ran - indexNum is ${indexNum}`); 
    // display next players turn 
    $('#currentPlayerDisplay').text(`${$namesArray[indexNum]}'s turn!`);
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

    const checkClimb = (startPoint => startPoint === currentPlayer.currentPos);
    let climbTime = ladderStartPoints.findIndex(checkClimb);
    if (climbTime >= 0){
        console.log(`time to climb ladder${climbTime + 1}`);
        // playMaker.players[indexNum].climb();
        currentPlayer.climb(climbTime);   
    } else {
        console.log('no ladders, check for chutes'); 
    }

    const checkFall = (startPoint => startPoint === currentPlayer.currentPos); 
    let fallTime = chuteStartPoints.findIndex(checkFall); 
    if (fallTime >= 0){
        console.log(`time to fall down chute${fallTime + 1}`); 

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
    $('#rollNumber').text(randNum); 

}
////////////////////
// playTurn()
////////////////////
const demoPlayTurn = () => {
    while (currentPlayer.currentPos < 100){
        playTurn(); 
    }
}

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
    openModal1Init();   
}

const startGame = () => {
    genBoard(); 
    setPlayers();  
}

// const $startButton = $('#start-button');
const $dieRollButton = $('#playTurn-button'); 
const $demoButton = $('#demo-button'); 
const $openModal1MidButton = $('#openModal1Mid-button'); 
const $closeModal1MidButton = $('#closeModal1Mid-button'); 
const $closeModal1InitButton = $('#closeModal1Init-button'); 
const $submitButton1 = $('#submitNumPlayers'); 
const $submitButton2 = $('#submitPlayerNames'); 
const $closeModal4Button = $('#closeModal4-button'); 
const $closeModal1Button = $('#closeModal1-button'); 
const $board = $('#game-board');

// Event Listeners
// $startButton.on("click", startGame); 
$dieRollButton.on("click", playTurn); 
$demoButton.on("click", demoPlayTurn); 
$openModal1MidButton.on("click", openModal1Mid); 
$closeModal1InitButton.on("click", closeModal1Init); 
$closeModal1MidButton.on("click", closeModal1Mid); 
$submitButton1.on("click", closeModal2); 
$submitButton2.on("click", closeModal3); 
$closeModal4Button.on("click", closeModal4); 
$closeModal1Button.on("click", closeModal1); 
setup(); 

// BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK // BREAK 

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



// WORKFLOW
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
// Modal - intro

// Task 11 - COMPLETE!!!
// Modal - user enters # players
// Functionally limit user inputs, include prompts/alerts

// Task 12 - COMPLETE!!!
// De-bug - modal1 not re-opening after game start

// Task 13 - COMPLETE!!!
// Get player Names
    //Add modal 3 and all associated ftns
    //Added current player display to DOM

// Task 14 - COMPLETE!!!
// spruce up the UI

// Task 15 - COMPLETE!!!
// Change win state alert to a modal

// Task 16 - COMPLETE!!!
// complete the logic loop to allow for multiple games 

// Task 17 - COMPLETE!!!
// Build demo button
    // while loop - run until done

// Task 18 - COMPLETE!!!
// De-bug - change in # players 

// Task 19 - Working
// Select better player images

// CLEANUP
    // Finish styling    
    // should I have been putting 'event' as parameter in the event listeners/handlers?
    // check on legal restrictions for using board image????
        // Add disclaimer statement? 
    // single or double quotes - pick one
    // consistent ID/var names (dashes, underscores, etc.)
    // Indentation & spacing
    // Descriptive Comments
    // No extraneous comments
    // clean up console.log statements - make inuitive
// RE-FACTOR
    // toggle
    // DRY??
    // Make board grid 10% width of board container instead of 100px - responsive?
    // House functions in objects??
    // Put functions into separate js file? 
    // land by exact count???
    // set restart game button to execute closeModal4 ftn
    // de-bug why auto roll won't execute until roll is executed
    // select better player images
    // Animations
    // Allow user to select player image