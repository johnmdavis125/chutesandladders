
# PROJECT #1: CHUTES & LADDERS

## SITE LINK
Live Site
https://johnmdavis125-chutesandladders.vercel.app/
My GitHub repo
https://github.com/johnmdavis125/chutesandladders

## GAME DESCRIPTION
Chutes & Ladders is a classic boardgame I grew up with as a kid. Simply put, it's a race to the top!

There are 100 squares on the board and 2-4 players. The number of spaces the player advances each turn is determined by rolling a die once per turn. If the player lands at the bottom of a ladder, they immediately climb to the top. If the player lands at the top of a chute, they immediately slide to the bottom. The win state is reached when a player lands exactly on square 100, at which point the other player loses. The game will continue until this 
happens.  

## TECHNOLOGIES USED
- Built using HTML, CSS, JavaScript with jQuery 
- Deployed with Vercel

## APPROACH
#### Overview
- In the spirit of OOP, I used objects to organize the flow of the game logic. Player class used methods to coordinate their movement. 
- Event listeners & functions written such that entire scope of plyr's acty activated by clicking "roll" at beginning of turn. 

#### Making the Grid
- Nested Loop: column of 10 flex cont w/10 boxes per row
- Z-index: layered grid, board img, plyr img's - "sneaky" anchor pts

#### Creating the Players
- Plyr Class: "name, color, imgSrc, currentPos, move(), climb(), fall() 
- Plyr Factory: custom number of players! Used "i" to gen players

#### Taking Turns
- Plyr arr: counter walked thru index pos' - ref'd as "current plyr"
    - current player move(), climb(), display turn, etc. 
    - currentPos of given plyr governed primary DOM manipulation
<br>
<hr>
## MVP - Features
- "How to Play" Modal appears with game description
- User prompted for number of players (2-4)
- User prompted for names of players
- Locations of chutes & ladders reflect classic board layout
- Current Player's name displayed at the top
- Player clicks Roll button to take their turn (gen's random number 1-6)
- Die Roll result displayed
- If player lands on ladder or chute, moved automatically
- Upon reaching space 100, player congratulated for their win!
- Number of wins for each player displayed in 'scoreboard' at top right
- Players can open game instructions without interfering with game flow
- Players can reset game at any time
- The option to play again presented at end of each round

## Lessons Learned
- Your wireframing should include Modals/Feedback to user
- OOP makes code easier to digest
- Template Literals are legit
- Being intentional with scope of variables
- Dev Tools suite is your best friend

## Unsolved problems / Future Updates
- Animations
- Re-factoring
    - Modals not DRY
    - Ladder/Chute Factories
    - Responsive sizing
    - Put functions in separate js file
    - Land by exact count
    - Reorganize functions as object methods
