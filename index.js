function add(Value1, Value2){
    let Result = Value1+Value2
    return Result
    
}

let substract = (Value1,Value2) => {

    console.log(Value1-Value2)
    
    return Value1-Value2
}

let multiply = (Value1,Value2) => {
    if (Value1 !== 0 && Value2 !== 0){
        let Step1 = Value1*Value2
        let Result = Math.round((Step1+Number.EPSILON)*100)/100;
        return Result; 
    }else {
        console.log(0);
        return 0;
    }


}

let divide = (Value1,Value2) => {
    if (Value1 !== 0 && Value2 !== 0){
        let Step1 = Value1/Value2
        let Result = Math.round((Step1+Number.EPSILON)*100)/100;
        return Result; 
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
let lZahlen = num1.length
let Laenge = op.length
    switch (op[Laenge-2]){
        case "+":
            return add(parseFloat(num1[lZahlen-2]),parseFloat(num2[lZahlen-1]))
            break;

        case "-":
            return substract(parseFloat(num1[lZahlen-2]),parseFloat(num2[lZahlen-1]))
            break;

        case "x": 
        return multiply(parseFloat(num1[lZahlen-2]),parseFloat(num2[lZahlen-1]))
        break;

        case("/"):
        return divide(parseFloat(num1[lZahlen-2]),parseFloat(num2[lZahlen-1]))
        break;
    }


}



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
            button.classList.add("Enter")
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
let Oper = []
let LaengeOper = Oper.length
let Wert
btn.forEach((button)=> {
    button.addEventListener("click", () => {
        if (button.textContent !== "clear" &&  !isNaN(parseFloat(button.textContent)&& Oper[LaengeOper -1] === "=") 
        && isFinite(button.textContent)){
            Value.textContent = "";
        Value.textContent = Value.textContent + button.textContent
        Wert = Value.textContent;
        } else if (button.textContent !== "clear" &&  !isNaN(parseFloat(button.textContent)&& Oper[LaengeOper -1] !== "=") 
            && isFinite(button.textContent)){
            Value.textContent = Value.textContent + button.textContent
            Wert = Value.textContent;



        }
        else if (typeof button.textContent == "string" && button.textContent!== "clear" && button.textContent) {
            
        Eingaben.push(Wert);
        console.log(Eingaben)
        Oper.push(button.textContent)
        console.log(Oper)
        Value.textContent = ""
       

   

        }else if(button.textContent === "clear"){
            Value.textContent = ""
            Eingaben = [];
            Oper = [];

        
        }

    })
})


const EnterButton = document.querySelector(".Enter")

EnterButton.addEventListener("click", () => {
Value.textContent = (operate(Eingaben, Eingaben, Oper))

})
    
    
    
    
    
    
