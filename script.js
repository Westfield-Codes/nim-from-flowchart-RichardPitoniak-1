/* Nim Trainer by [your name]
 * based on this flowchart:
 * https://lucid.app/lucidchart/2018baaf-4c26-4a76-a0d5-93c97f444425/view
 */

/* Global Variables */
var trainer = false
var count = 0
/** 
 * main  
 * Handles new Nim games with gametype choice simple or trainer and a play again option. 
 * @param none 
 * @return none
 */
/* Main */
function main(){
    var again= false
    var trainer = confirm ("Trainer mode?") 
    playNim()
    again = confirm ("Would you like to play again?")
if (again == true) main()
else alert ("thanks for playing")
}

/** 
 * playNim 
 * plays a game with user first and computer second. Winner declared in an alert box. 
 * @param none 
 * @return none
 */
function playNim(){
count = 0
if (count < 21) {
    userTurn()
    if (count > 20) alert ("you lose")
    else cpuTurn
    if (count > 20) alert ("you win")
    else playNim()
}
}

/** 
 * userTurn  
 * User enters a turn. Validation against cheating handled by recursion.
 * @param none 
 * @return none
 */
function userTurn(){
var turn = prompt ("enter a number within 3 digits of your previous number")
if (turn < 1 || turn > 3) {
    alert ("your input is invalid")
}
else count = count + turn 
}
/** 
 * cpuTurn 
 * Generate computer's turn without losing on purpose.  Different turns if trainer or simple.  
 * @param none 
 * @return none
 */
function cpuTurn(){
turn = 0 
if (count = 18) {turn = 3 }
else if (count = 18) turn = 2
else if (count > 18) turn = 1
else if (trainer = true) turn = 4 - count % 4
else turn = Math.floor(Math.random()*3+1)
count += turn 
alert ("I counted " + turn + " the count is now " + count)
}
