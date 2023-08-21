let displayNumber = "";
let stack = [];
let displayString = "";
let solvesymbol = "";
// Make a stack to keep track of the current number you are inputting. When hitting an operator, take that number and store it into another stack/array and then store the operator as well. At the end traverse through the stack/array and solve the 
// problem accordingly.
// Make it so that after you get a solution, unless you clear, the program automatically assumes that you want to make changes to the 
// Clear Display clears the stack, and display number. 
function clearDisplay(){
    stack = [];
    displayNumber ="";
    document.getElementById("display").innerHTML = "";
    document.getElementById("solution").innerHTML = "";
}
// Set num sets the display number and updates it as it appears in the display box
function setNum(number){
   displayNumber += number;
   if(stack.length === 0){
    document.getElementById("display").innerHTML = displayNumber;
   }else{
    document.getElementById("display").innerHTML = stack[0] + " " + solvesymbol + " " + displayNumber;
   }
}
// Sets the operation symbol
function setsymbol(symbol){
    stack.push(Number(displayNumber));
    stack.push(symbol);
    solvesymbol = symbol
    displayNumber = "";
    document.getElementById("display").innerHTML = stack[0] + " " + symbol + displayNumber;
}
// Solves the equation by utilizing a stack. Solves based on the symbol and sets the answer to be manipulated unless cleared by the user. 
function solve(){
    stack.push(Number(displayNumber));
    let result = 0;
    while(stack.length > 1){
        const num2 = stack.pop();
        const symOp = stack.pop();
        const num1 = stack.pop();
        console.log(num1);
        console.log(symOp);
        console.log(num2);
        switch(symOp){
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "x":
                result = num1 * num2;
                break;
            case "/":
                result = num1 / num2;
                break;
            default:
                break
        }
        stack.push(result);
    }
    displayNumber = String(result);
    document.getElementById("solution").innerHTML = stack[0];
    console.log(stack[0]);
    document.getElementById("display").innerHTML = "";
}
// Adds a dot to the equation if user wants to manipulate floats. 
function addDot(){
    displayNumber += ".";
    if(stack.length === 0){
    document.getElementById("display").innerHTML = displayNumber;
   }else{
    document.getElementById("display").innerHTML = stack[0] + " " + solvesymbol + " " + displayNumber;
   }
}