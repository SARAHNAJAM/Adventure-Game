#!/usr/bin/env
// Number Guessing Game

import inquirer from "inquirer";


// computer will generate a random

// user input for guessing number

// compaere user input with computer generated number and show result

const randomNumber = 13;

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        message: "Guess a number ",
        type: "number",
        
    }
])
if(answers.userGuessedNumber === randomNumber){

    console.log("congratulation you guess it right");
    
}
else{
    console.log("you guess it wrong");
    
}

