function add(Value1, Value2){
    let Result = parseFloat(Value1)+parseFloat(Value2)

    if (Result.toString().length > 15){
    let Wert =  Result.toExponential()
    return Wert;
} else{
    return Result
}
    
}

let substract = (Value1,Value2) => {

    let Step1 = (Value1-Value2)
        let Result = Math.round((Step1+Number.EPSILON)*100)/100;
    
    if (Result.toString().length > 15){
        let Wert =  Result.toExponential()
        return Wert;
    } else{
        return Result
    }
}

let multiply = (Value1,Value2) => {
    if (Value1 !== "0" && Value2 !== "0"){
        let Step1 = Value1*Value2
        let Result = Math.round((Step1+Number.EPSILON)*100)/100;
            if (Result.toString().length > 15){
                        let Wert =  Result.toExponential()
                        return Wert;
                    } else{
                        return Result
                    }
    }else {
        return "0";
    }


}

let divide = (Value1,Value2) => {
    if (Value1 !== "0" && Value2 !== "0"){
        let Step1 = Value1/Value2
        let Result = Math.round((Step1+Number.EPSILON)*100)/100;
                        if (Result.toString().length > 15){
                            let Wert =  Result.toExponential()
                            return Wert;
                        } else{
                            return Result
                        }
    }else {
alert("dummbeutel")

return "0"
    }


}

const operate = (num1, num2, op) => {
    switch (op){
        case "+":
            return add (num1,num2)
            break;

        case "-":
            return substract(num1,num2)
            break;

        case "x": 
        return multiply(num1,num2)
        break;

        case("/"):
        return divide(num1,num2)
        break;
    }


}



function Buttons() {
    for (let i = 0; i<18; i++){
    const button = document.createElement("button")
    const parent = document.querySelector(".container")
    if (i<9){
        button.classList.add("Numbers")
    }
    button.classList.add("Buttons")
    parent.appendChild(button);
    
    button.textContent = i +1;
    switch(button.textContent){
        case "11":
            button.textContent = 0;
            button.classList.add("Numbers")
        break;
        case "10":
            button.textContent = "+";
            button.classList.add("Operator")
        break;
        case "12":
            button.textContent = "-";
            button.classList.add("Operator")
            
        break;
        case "13":
            button.textContent = "x";
            button.classList.add("Operator")
        break;
        case "14":
            button.textContent = "/";
            button.classList.add("Operator")
        break;
        case "15":
            button.textContent = "=";
            button.classList.add("Enter")
        break;
        case "16":
            button.textContent = "clear";
            button.classList.add("clear")
        break;
        case "17":
            button.textContent = ".";
            button.classList.add("Decimal")
        break;
        case "18":
            button.textContent = "Back";
            button.classList.add("Backspace")
        break;


    }

    }
}

Buttons()


const btn = document.querySelectorAll(".Buttons")
const OperatorField = document.querySelectorAll(".Operator")
let currentOp = ""
let previousOp = ""
const displayValue = document.querySelector(".Alt")
const oldValue = document.querySelector(".Neu")
let currentValue = ""
let previousValue = ""




OperatorField.forEach((e)=> {
    e.addEventListener("click", () => {
        opFunc(e.innerText)
    })
})

function opFunc(Value){
if (currentOp !== ""){
    previousOp = currentOp;
    currentOp = Value;
        if (currentValue !== "" && previousValue !== "" ){
            currentValue = operate(previousValue, currentValue, previousOp)
            displayValue.innerText = currentValue
            previousValue = currentValue;
            oldValue.innerText = `${previousValue} ${currentOp}`
            currentValue = "";

        }
         else {
            oldValue.innerText = `${previousValue} ${currentOp}`
        }
        return


} else if(currentValue =="" && previousValue =="" && currentOp =="" && Value =="-" ){ 
    currentValue += Value
displayValue.innerText = currentValue
currentOp = ""
return
}

else if (currentOp == "" &&previousValue !== ""  || currentValue !== "" ){
        currentOp = Value;

        if (currentValue !== ""){
             previousValue = currentValue;
             oldValue.innerText = `${previousValue} ${currentOp}`
             currentValue = "";
             displayValue.innerText = currentValue; }
         else {
             oldValue.innerText = `${previousValue} ${currentOp}`
    }
}}
    
const numberField = document.querySelectorAll(".Numbers")

numberField.forEach((target) => {
    target.addEventListener("click",() => {
        display(target.innerText)
    })
})

function display(Value){
if (currentValue.length < 15){
        if (currentValue.length == 1 && currentValue == 0 && Value == 0){}

        else{
        currentValue+= Value;
        displayValue.innerText = currentValue;}}
    
    }

const enterButton = document.querySelector(".Enter")

enterButton.addEventListener("click",(e) => {
if (currentValue == "" && previousValue ==""){
    displayValue.innerText = ""
        currentOp = ""
        previousOp = ""
    oldValue.innerText = "";

}else if (currentValue!=="" && previousValue == ""){
    displayValue.innerText = currentValue
    currentValue = ""
    oldValue.innerText = "";

}else if (currentValue=="" && previousValue !== ""){
    displayValue.innerText = previousValue
    oldValue.innerText = "";

} else{
    currentValue = operate(previousValue, currentValue, currentOp).toString()
    currentOp = ""
    previousOp = ""
    displayValue.innerText = currentValue
    previousValue = currentValue
    oldValue.innerText = ""
    currentValue = ""
}
e.target.blur()
})


const clearing = document.querySelector(".clear");
clearing.addEventListener("click",(e) => {
    e.target.blur()  
    clearer()

})

function clearer() {
    currentValue = ""
    previousValue = ""
    currentOp = ""
    previousOp = ""
    oldValue.innerText = ""
    displayValue.innerText = ""
}

const backspace = document.querySelector(".Backspace")

backspace.addEventListener("click", (e) => {
    e.target.blur()
    back();

})


function back(){
    if (currentValue !== ""){
        let arr = currentValue.split("")
        arr = arr.slice(0,-1);
        currentValue = arr.join("")
        displayValue.innerText = currentValue;

    }
    else{}
    e.target.blur()
}

const decimal = document.querySelector(".Decimal")

decimal.addEventListener("click", (e) => {

let checkDec = currentValue.split("")

if (!checkDec.includes(".")) {
currentValue += "."
displayValue.innerText = currentValue;
}
else {}
e.target.blur()

})