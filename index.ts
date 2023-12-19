import inquirer from "inquirer";

const answers: {
    numberOne: number;
    numberTwo: number;
    Operator: string;
} = await inquirer.prompt([

    

    {
        type: "number",
        name: "numberOne",
        message: "Please tell me your first number:"
    },


    {
        type: "number",
        name: "numberTwo",
        message: "Now, your second num:"
    },



    {
        type: "list",
        name: "Operator",
        choices: ["+", "-", "*", "/", "%"],
        message: "Select an operation or Percentage:"
    }
]);



const { numberOne, numberTwo, Operator } = answers;



if (numberOne !== undefined && numberTwo !== undefined && Operator) {
    let result: number = 0;



    if (Operator === "+") {
        result = numberOne + numberTwo;
    } else if (Operator === "-") {
        result = numberOne - numberTwo;
    } else if (Operator === "*") {
        result = numberOne * numberTwo;
    } else if (Operator === "/") {
        result = numberOne / numberTwo;
    } else if (Operator === "%") {

        

        result = (numberOne / numberTwo) * 100;
     }



    console.log("Your result is:", result);
} else {



    console.log("Please enter valid numbers and choose an operation.")};