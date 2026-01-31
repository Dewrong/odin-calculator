let first = "";
let second = "";
let operator = "";
let total = "";

const add = function(){
    
    let total = first + second;
    return total;
}

const subtract = function(){

    let total = first- second;
    return total;
}

const multiply = function(){
    
    let total = first * second;
    return total;
}

const divide = function(){
    if(second == "0"){
        let total = "Undefined."
        return total;
    }
    let total = first/second;
    return total;
}

const operate = function(inputOperator){

    //operator = inputOperator;
    //This usecase is for when a first number is not input, to use the history's latest total as the first number    
    if(document.getElementById("current-numbers").innerHTML == ""){        
        //take previous total value as first
        first = total;
        total = 0;
        operator = inputOperator;
        document.getElementById("current-numbers").innerHTML = `${first} ${operator} `;
        return;
    }
    if(inputOperator == "=" && operator != ""){
        //For cases when equal is selected and operator is selected
        //need to parse second int
        let secondIndex = document.getElementById("current-numbers").innerHTML.indexOf(operator);
        second = document.getElementById("current-numbers").innerHTML.slice(secondIndex+1);
        second = parseInt(second);

        switch(operator){
            case '+':
                total = add(first, second);
                break;
            case '-':
                total = subtract(first, second);
                break;
            case '/':
                total = divide(first, second);
                break;
            case '*':
                total = multiply(first, second);
                break;
            default:
                console.log("that didn't work");
        }
        document.getElementById("history").innerHTML += `\n${first}${operator}${second} = ${total}\n`;
        
        document.getElementById("current-numbers").innerHTML = "";
    operator = "";
    first = "";
    second = "";
    return;
    }
    if(operator != "" && inputOperator != "="){        
        document.getElementById("history").innerHTML += "Error: Can only evaluate one operation at a time."
        clearInput();
    }
    else{
        //For when operator is selected, only want to parse first number and operator right now.  
        first = parseInt(document.getElementById("current-numbers").innerHTML);
        operator = inputOperator;
        document.getElementById("current-numbers").innerHTML += operator;
    }
}

function typeToCurrent(number){
    document.getElementById("current-numbers").innerHTML = document.getElementById("current-numbers").innerHTML + number;
}

function clearInput(){    
    document.getElementById("current-numbers").innerHTML = "";
    operator = "";
    first = "";
    second = "";
}