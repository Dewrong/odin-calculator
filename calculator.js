const add = function(first, second){
    
    let total = first + second;
    return total;
}

const subtract = function(first, second){

    let total = first- second;
    return total;
}

const multiply = function(first, second){
    
    let total = first * second;
    return total;
}

const divide = function(first, second){
    
    let total = first/second;
    return total;
}

const operate = function(first, operator, second){
    
    first = parseInt(first);
    second = parseInt(second);


    let total = 0;
    console.log(operator);
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
    console.log(`${first} ${operator} ${second} = ${total}`);
    return total;

}