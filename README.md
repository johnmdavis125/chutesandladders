
# PROJECT #1: CHUTES & LADDERS

## SITE LINK
Live Site
https://johnmdavis125-chutesandladders.vercel.app/
<br>
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
- In the spirit of OOP, I used classes/objects with built-in methods to coordinate movement of plyrs.
- Event listeners & functions drive flow of game logic.  
    - Entire scope of plyr's acty activated by clicking "roll" at beginning of turn. 
- Used user inputs to sequentially build custom conditions for each round of game

#### Making the Grid
- Nested Loop: column of 10 flex cont w/10 boxes per row
- Z-index: layered grid, board img, plyr img's - "sneaky" anchor pts

#### Creating the Players
- Plyr Class: "
    - Properties: name, color, imgSrc, currentPos
    - Methods: move(), climb(), fall() 
- Plyr Factory: custom number of players! Used loop iterator "i" to gen players (Number loop iterations based on user inputs)

#### Taking Turns
- Plyr arr: counter walked thru index pos' - ref'd as "current plyr"
    - current player move(), climb(), display turn, etc. 
    - currentPos of given plyr governed primary DOM manipulation
<br>
<hr>

## MVP - Features
1. "How to Play" Modal appears with game description
2. User prompted for number of players (2-4)
3. User prompted for names of players
4. Locations of chutes & ladders reflect classic board layout
5. Current Player's name displayed at the top
6. Player clicks Roll button to take their turn (gen's rand num 1-6)
7. Die Roll result displayed
8. If player lands on ladder or chute, moved automatically
9. Upon reaching space 100, player congratulated for their win!
10. Number of wins for each player displayed in 'scoreboard' at top right
11. Players can open game instructions without interfering with game flow
12. Players can reset game at any time
13. The option to play again presented at end of each round

## Lessons Learned
1. Your wireframing should include Modals/Feedback to user
2. OOP makes code easier to digest
3. Template Literals are legit
4. Being intentional with scope of variables
5. Dev Tools suite is your best friend

## Unsolved problems / Future Updates
1. Animations
2. Re-factoring
    - Modals not DRY
    - Ladder/Chute Factories
    - Responsive sizing
    - Put functions in separate js file
    - Land by exact count
    - Reorganize functions as object methods
