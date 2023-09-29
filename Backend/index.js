//1. Node
//2. Installing node
//3. REPL
/*
R - Read - Read user input
E - Eval - evaluate user input
P - Print - print the result
L - Loop - wait for new input
*/
/*let user = {name:"Harsh", age :20}
console.log(user.name);
*/
//4. 
//Readline

const  Readline  = require('readline');
const rl = Readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please enter your name: ",(name) => {
    console.log("You entered: "+name);
})