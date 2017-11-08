console.log('mrCalculator');
'use strict'

// I hate math, and numbers! why can't we build an iron Man instead? iron man is cool and handsome!!

//Start with the digits buttons, when a digit is called, call a function addDigit(digit) ,
//this function adds a digit to the current num which are kept in the globals: gNum1 and gNum2 ;
//(Tip: the function knows which gNum is the active one by checking if gNum2 is null.

var gNum1 = '';
var gNum2 = null;
var operator = '';
var gMemoryNum = null



function addDigit(digit) {
    // console.log(digit);

    if (gNum2 === null) {
        gNum1 += digit;
        displayData(gNum1);
    }
    else {
        if (gNum2 === 'active') gNum2 = digit;

        else {
            gNum2 += digit;
        }

        displayData(gNum2);
    }


}

// Now add the + button, when clicked, put 0 into gNum2 (instead of the initial null)
//  so the addDigit will now work on it.

function displayData(str) {
    var td = document.querySelector('#calcuScreen');
    td.innerHTML = str;
}

function addOperator(clickedOpe) {
    gNum2 = 'active';
    operator = clickedOpe;


    displayData(operator);
}

function calculate() {
    gNum1 = +gNum1;
    gNum2 = +gNum2;
    var res = 0;

    switch (operator) {
        case '+':
            res = gNum1 + gNum2;
            break;

        case '-':
            res = gNum1 - gNum2;
            break;

        case '*':
            res = gNum1 * gNum2;
            break;

        case '/':
            res = gNum1 / gNum2;
            break;

        case '%':
            res = gNum1 / 100;
            break;
    }
    displayData(res);

}


// Now expand the functionality
// a.Memory Functionality (use a global gMemoryNum):
// i.M+ = Add to memory
// ii.M- = Subtract from memory 
// iii.MC = Memory Clear (clear stored value) iv.MRC = Memory Re-Call (recall stored value)


function memory(clickedM) {

    // console.log('i am in');

    var elCalcuScreen = document.querySelector('#calcuScreen');
    var CalcuScreen = +elCalcuScreen.innerHTML;

    switch (clickedM) {
        case 'MC':
            gMemoryNum = 0;
            break;

        case 'MR':
            if (gMemoryNum !== null) elCalcuScreen.innerHTML = gMemoryNum;
            break;

        case 'M+':
            if (gMemoryNum !== null)
                gMemoryNum += CalcuScreen;
            else gMemoryNum = CalcuScreen;

            gNum1 = '';
            break;

        case 'M-':
            if (gMemoryNum)
                gMemoryNum -= CalcuScreen;

            console.log('gMemoryNum', gMemoryNum);
            console.log('CalcuScreen', CalcuScreen);
            gNum1 = '';
            break;

    }

}


