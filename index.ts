#! /usr/bin/env node


import inquirer from "inquirer";

// printing a welcome message
console.log("\n\tWelcome To \ `aliakbarbrohi\ ` - CLI Simple Calculator\n");


let answer =await inquirer.prompt([

    { message:"Enter your firstnumber", type:"number",name:"firstnumber"},
    {message:"Enter your secondnumber",type:"number",name:"secondnumber"},

    
    {  message:"Select one  operator to perform operations ",
        type:"list",
        name:"operator",
        choices:["Addition","substraction","Multiplication","division"]},
]);
    if(answer.operator==="Addition"){
         console.log(answer.firstnumber + answer.secondnumber);
    }else if (answer.operator==="substraction"){
        console.log(answer.firstnumber - answer.secondnumber);
    }else if (answer.operator==="Multiplication"){
        console.log(answer.firstnumber * answer.secondnumber);
    }else if(answer.operator==="division"){
        console.log(answer.firstnumber / answer .secondnumber);
    }else {
        console.log("please select  a vailed operator");
    }










