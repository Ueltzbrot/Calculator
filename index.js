function add(Value1, Value2){
    console.log((Value1 + Value2))
    
    return (Value1 + Value2)
    
}

let substract = (Value1,Value2) => {
    console.log(Value1 - Value2);
    return (Value1 - Value2)
}

let multiply = (Value1,Value2) => {
    if (Value1 !== 0 && Value2 !== 0){
        let Step1 = Value1*Value2
        let Result = Math.round((Step1+Number.EPSILON)*100)/100;
        console.log(Result);
        return (Result); 
    }else {
        console.log(0);
        return 0;
    }


}

let divide = (Value1,Value2) => {
    if (Value1 !== 0 && Value2 !== 0){
        let Step1 = Value1/Value2
        let Result = Math.round((Step1+Number.EPSILON)*100)/100;
        console.log(Result);
        return (Result); 
    }else {
        console.log(0);
        return 0;
    }


}


let Operation = {
  
    firstNum : null,
    secondNum : null,
    oper : null,
    };


let firstNumber =""
let secondNumber =""
let operator =""


const operate = (num1, num2, op) => {

    switch (op){
        case "+":
            add(num1,num2)
            break;

        case "-":
            substract(num1,num2)
            break;

        case "*": 
        multiply(num1,num2)
        break;

        case("/"):
        divide(num1,num2)
        break;
    }


}

operate(4,5,"-")


function Buttons() {
    for (let i = 0; i<14; i++){
    const button = document.createElement("button")
    const parent = document.querySelector(".container")
    parent.appendChild(button);
    }
}

Buttons()

function ZusatzButton (){
const button = document.createElement("button")
const parent = document.querySelector(".container")
button.classList.add("EnterButton")
parent.appendChild(button);
}

ZusatzButton()