const inputArea = document.querySelector(".input-area");
const outputArea = document.querySelector(".output-area");
const actualAction = document.querySelector(".actual-action");
const additionAction = document.querySelector(".addition");
const subtractAction = document.querySelector(".subtraction");
const divisionAction = document.querySelector(".division");
const multiplicationAction = document.querySelector(".multiplication");
const clearAll = document.querySelector(".AC");
const clear = document.querySelector(".C")
const number1 = document.querySelector(".N1");
const number2 = document.querySelector(".N2");
const number3 = document.querySelector(".N3");
const number4 = document.querySelector(".N4");
const number5 = document.querySelector(".N5");
const number6 = document.querySelector(".N6");
const number7 = document.querySelector(".N7");
const number8 = document.querySelector(".N8");
const number9 = document.querySelector(".N9");
const number0 = document.querySelector(".N0");
const point = document.querySelector(".point");
const operationAction = document.querySelector(".action");
let total;


 
function virtualKeyboardAction(event){
    if(inputArea.value.length < 8) inputArea.value +=event
}

additionAction.onclick = function (){
    if(inputArea.value !== ""){
        outputArea.value = inputArea.value;
        inputArea.value = "";
        actualAction.innerHTML = "+";
    } else{
       actualAction.innerHTML = "+";     
    }
}

subtractAction.onclick = function (){
    if(inputArea.value !== ""){
        outputArea.value = inputArea.value;
        inputArea.value = "";
        actualAction.innerHTML = "-";
    } else{
        actualAction.innerHTML = "-";     
     }
}

multiplicationAction.onclick = function (){
    if(inputArea.value !== ""){
        outputArea.value = inputArea.value;
        inputArea.value = "";
        actualAction.innerHTML = "*";
    } else{
        actualAction.innerHTML = "*";     
     }
}

divisionAction.onclick = function (){
    if(inputArea.value !== ""){
        outputArea.value = inputArea.value;
        inputArea.value = "";
        actualAction.innerHTML = "/";
    } else{
        actualAction.innerHTML = "/";     
     }
}

operationAction.onclick = function () {
    if(actualAction.innerHTML === "+" && inputArea.value != "" && outputArea.value != ""){
        total = Number(outputArea.value) + Number(inputArea.value);
        inputArea.value = ""
        outputArea.value = total;
    } else if(actualAction.innerHTML === "-" && inputArea.value != "" && outputArea.value != ""){
        total = Number(outputArea.value) - Number(inputArea.value);
        inputArea.value = ""
        outputArea.value = total;
    }else if(actualAction.innerHTML === "/" && inputArea.value != "" && outputArea.value != ""){
        total = Number(outputArea.value) / Number(inputArea.value);
        inputArea.value = ""
        outputArea.value = total;
    }else if(actualAction.innerHTML === "*" && inputArea.value != "" && outputArea.value != ""){
        total = Number(outputArea.value) * Number(inputArea.value);
        inputArea.value = ""
        outputArea.value = total;
    }
    
}


clearAll.onclick = function (){
    inputArea.value = "";
    outputArea.value = "";
    actualAction.innerHTML = "";
    total = 0;
}

clear.onclick = () =>  {
    let _inputArea = inputArea.value;
    inputArea.value = _inputArea.substring(0, inputArea.value.length - 1);
}

point.onclick = function () {
    let testString = inputArea.value;
    console.log(testString.indexOf("."));
    console.log(isNaN(testString))
    if(testString.includes(".") == false && testString != ""){
        inputArea.value += "."
    }
    /* inputArea.value += "." */
}

number1.onclick = () => virtualKeyboardAction(1);
number2.onclick = () => virtualKeyboardAction(2);
number3.onclick = () => virtualKeyboardAction(3);
number4.onclick = () => virtualKeyboardAction(4);
number5.onclick = () => virtualKeyboardAction(5);
number6.onclick = () => virtualKeyboardAction(6);
number7.onclick = () => virtualKeyboardAction(7);
number8.onclick = () => virtualKeyboardAction(8);
number9.onclick = () => virtualKeyboardAction(9);
number0.onclick = () => virtualKeyboardAction(0);