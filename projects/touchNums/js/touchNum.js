'use strict';
console.log('touch number');

var unrepeatedVals = [];

function fillNums() {
    unrepeatedVals = [];
    for (var i = 0; i < 16; i++) {
        unrepeatedVals[i] = i + 1;

    }
}


function getRandomNum() {
    var randomNum;
    var randomIdx = Math.floor(Math.random() * (unrepeatedVals.length));
    randomNum = unrepeatedVals[randomIdx];
    unrepeatedVals.splice(randomIdx, 1);
    return randomNum;
}

function getTable() {

    fillNums();
    var table = '';
    for (var i = 0; i < 4; i++) {
        table += '<tr>';
        for (var j = 0; j < 4; j++) {
            var randomNum = getRandomNum();
            table += '<td onClick="checkNumber(this)">' + randomNum + '</td>';

        }
        table += '</tr>';
    }
    document.querySelector(".gameBoard").innerHTML = table;
}


getTable();

//time is missing..