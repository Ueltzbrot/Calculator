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
    for (let i = 0; i<16; i++){
    const button = document.createElement("button")
    const parent = document.querySelector(".container")
    button.classList.add("Buttons")
    parent.appendChild(button);
    
    button.textContent = i +1;
    switch(button.textContent){
        case "11":
            button.textContent = 0;
        break;
        case "10":
            button.textContent = "+";
        break;
        case "12":
            button.textContent = "-";
            
        break;
        case "13":
            button.textContent = "x";
        break;
        case "14":
            button.textContent = "/";
        break;
        case "15":
            button.textContent = "=";
        break;
        case "16":
            button.textContent = "clear";
        break;


    }

    }
}

Buttons()


const btn = document.querySelectorAll(".Buttons")
let Value = document.querySelector(".display")

let Eingaben = []

btn.forEach((button)=> {
    button.addEventListener("click", () => {
        if (button.textContent !== "clear" &&  !isNaN(parseFloat(button.textContent)) 
        && isFinite(button.textContent)){
        Value.textContent = Value.textContent + button.textContent
        }
        else if (typeof button.textContent == "string" && button.textContent!== "clear") {
        Eingaben.push(Value.textContent);
        Eingaben.push(button.textContent)
        console.log(Eingaben);
        Value.textContent = ""

        }else if(button.textContent === "clear"){
            Value.textContent = ""
            Eingaben = [];
            console.log(Eingaben)
        }

    })
})


