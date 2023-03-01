function sum(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        throw 'nao e um numero'
    }
    return num1 + num2
}

function sub(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        throw 'nao e um numero'
    }
    return num1 - num2
}


function div(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        throw 'nao e um numero'
    }
    return num1 / num2
}

function mult(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        throw 'nao e um numero'
    }
    return num1 * num2
} 

function pot(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        throw 'nao e um numero'
    }
    return Math.pow(num1,num2)
} 

function raiz(num1,num2){
    if(isNaN(num1) || isNaN(num2)) {
        throw 'nao e um numero'
    }
    return Math.sqrt(num1,num2)
} 
module.exports ={
    sum,
    sub,
    div,
    mult,
    pot,
    raiz
}

