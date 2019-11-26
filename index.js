#!/usr/bin/env node
"use strict";
var inquirer = require('inquirer');
var chalk = require("chalk");

var response = chalk.bold.green;
var resume = require("./resume.json");

var resumePrompts = {
    type: "list",
    name: "resumeOptions",
    message: "What do you want to know about me ?",
    choices: [...Object.keys(resume) , "Exit"]
};

function  main(){
    console.log("hello , my name is SarthParthi and welcome to my resume");
    resumeHandler();
}
function resumeHandler(){
    inquirer.prompt(resumePrompts) // returns a promise
    .then(answer => {
        if(answer.resumeOptions == "Exit") {
        return;
        }
        var option = answer.resumeOptions;
        console.log(response("-------------------------"));
        resume[`${option}`].forEach(element => {
            console.log(response("|  =>"+ element))
            
        });
        console.log(response("-------------------------"));

        inquirer
        .prompt({
            // questions herer
            type: "list",
            name: "exitBack",
            message: "Go back or Exit?" ,
            choices: ["Back" , "Exit"]
        })
        .then(answers =>{
            //use user feedback for ...
            if(answers.exitBack == "Back"){
                resumeHandler();
            } else{
                return;
            }
        })

    })

}
main();
