/* Nim Trainer by [your name]
 * based on this flowchart:
 * https://lucid.app/lucidchart/2018baaf-4c26-4a76-a0d5-93c97f444425/view
 */

/* Global Variables */
var trainer = false 
var count = 0
var userFirst = 0 
/** 
 * main  
 * Handles new Nim games with gametype choice simple or trainer and a play again option. 
 * @param none 
 * @return none
 */
/* Main */
function main() {
    let again = true 
    trainer = confirm ("trainer mode?")
    userFirst =  Math.random() 
    playNim()
    again = confirm ("do you want to play again?")
if (again == true) {
    main()
}
else alert ("thanks for playing")
}

/** 
 * playNim 
 * plays a game with user first and computer second. Winner declared in an alert box. 
 * @param none 
 * @return none
 */
function playNim() {
count = 0

if (userFirst <= 0.5) {
while (count < 21) {
    userTurn()
    if (count > 20)
    alert ("you lose")
    else {
    cpuTurn()
    if (count > 20)
    alert ("you win")
    }
}
}
else {
    while (count < 21) {
        cpuTurn()
        if (count > 20)
        alert ("you win")
        else {
        userTurn()
        if (count > 20)
        alert ("you lose")
        }
}
}
}


/** 
 * userTurn  
 * User enters a turn. Validation against cheating handled by recursion.
 * @param none 
 * @return none
 */
function userTurn(){
let turn = parseInt ( prompt("enter a 1 a 2 or a 3"))
if (turn < 1 || turn > 3) {
    alert ("invalid input")
    userTurn()
}
else count = count + turn
}
/** 
 * cpuTurn 
 * Generate computer's turn without losing on purpose.  Different turns if trainer or simple.  
 * @param none 
 * @return none
 */
function cpuTurn() {
    if (userFirst <=  0.5){
    if (count == 17 ) turn = 3
    else if (count == 18 ) turn = 2
    else if (count > 18 ) turn = 1
    else if (trainer == true ) turn = 4 - count % 4
    else turn = Math.floor(Math.random()*3+1)
    count += turn 
    alert ("I counted " + turn + " count is now " + count)
    }
    else {
    if (count == 17 ) turn = 3
    else if (count == 18 ) turn = 2
    else if (count > 18 ) turn = 1
    else if (trainer == true ) turn = Math.floor(Math.random()*3+1)
    else turn = Math.floor(Math.random()*3+1)
    count += turn 
    alert ("I counted " + turn + " count is now " + count)
    }
}
