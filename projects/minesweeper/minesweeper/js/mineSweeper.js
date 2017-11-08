//Guess my number
console.log('mineSweeper');

var gBoard = [];
var gIndexes = [];
var gSize = 16;
var mines = 2;
var minesIndx = [];

function initGame() {
  
    seconds = 0, minutes = 0, hours = 0;
    time = setInterval(timing,1000);
    buildBoard();
}

function buildBoard() {
    var SIZE = 4;
    //var board = [];
    for (var i = 0; i < SIZE; i++) {
        gBoard.push([]);
        for (var j = 0; j < SIZE; j++) {
            gBoard[i][j] = 0;
        }
    }
    
    getMines();
    gBoard = setMinesNegsCount(gBoard);
    renderBoard(gBoard);
 
}


function renderBoard(board) {
    var strHtml = ''

    for (var i = 0; i < board.length; i++) {
        var row = board[i];
        strHtml += '<tr>';
        for (var j = 0; j < row.length; j++) {
            // CHESS - '<td id="' + tdId + '" onclick="cellClicked(this)" ' +
            //     'class="    ' + className + '">' + cell + '</td>';
            strHtml += '<td id = "cell-' + i + '-' + j + '" class="cellUnClicked" onmousedown="cellMarked(event);" onClick="cellClicked(this);">';
            strHtml += board[i][j];
            strHtml += '</td>';
        }
        strHtml += '</tr>';
    }


    var elBoard = document.querySelector('#board')
    elBoard.innerHTML = strHtml;
}

function cellMarked(event) {
    
    if(event.button == 2){
        // CR : var td = event.path[0] 
        // exactly the same
        var td = document.querySelector('#'+ event.path[0].id);
        // CR: if (){
        //       ..... 
        //     }
        if(td.classList.contains('cellUnClicked'))
        {
           td.classList.toggle('cellmarked');
        }
  }

}

function fillIdxs() {
    gIndexes = [];
    for (var i = 0; i < gSize; i++) {
        gIndexes[i] = i + 1

    }
    // console.log (gIndexes);
}
fillIdxs();


function getMines() {

    var rows = getCoordsi(4);//3,1
    var cols = getCoordsj(4);//1,2

    minesIndx.push({ 'i': rows[0], 'j': cols[0] });
    minesIndx.push({ 'i': rows[1], 'j': cols[1] });
    //console.log(minesIndx);
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (rows[0] === i && cols[0] === j)
                gBoard[i][j] = '*';
            if (rows[1] === i && cols[1] === j)
                gBoard[i][j] = '*';
        }
    }

}


console.table(gBoard);


function getCoordsi(length) {
    var indxs = [];
    var rowIndx = [];
    for (var i = 0; i < length; i++) {
        indxs[i] = i;
    }
    for (var k = 0; k < 2; k++) {
        var rand = Math.floor(Math.random() * (indxs.length));
        random = indxs[rand];
        indxs.splice(rand, 1);
        rowIndx.push(random);
    }
    return rowIndx;
}
// CR: same as above ^
function getCoordsj(length) {
    var indxs = [];
    var colIndx = [];

    for (var i = 0; i < length; i++) {
        indxs[i] = i;
    }
    for (var k = 0; k < 2; k++) {
        var rand = Math.floor(Math.random() * (indxs.length));
        random = indxs[rand];
        indxs.splice(rand, 1);
        colIndx.push(random);
    }
    return colIndx;
}
 
// CR:  this function changes her input, the return is make its look weird
function setMinesNegsCount(board) {
    var count = 0;

    for (var m = 0; m < minesIndx.length; m++) {
        var cellI = minesIndx[m].i, cellJ = minesIndx[m].j;
        for (var i = cellI - 1; i <= cellI + 1; i++) {
            if (i < 0 || i >= board.length) continue;
            for (var j = cellJ - 1; j <= cellJ + 1; j++) {
                if (j < 0 || j >= board[i].length) continue;
                if (i === cellI && j === cellJ) continue;
                if (!isNaN(board[i][j])) board[i][j]++;

            }
        }

    }
    return board;

}

// function cellClicked(elCell, i, j){

// note for myself: bring obj - should be var obj coord {}
//elCell.id

// }

function cellClicked(elCell) {
    var coord = {};
    var strCellId = elCell.id;//'#cell-0-0'

    coord.i = +strCellId.substring(5, strCellId.lastIndexOf('-'));
    coord.j = +strCellId.substring(strCellId.lastIndexOf('-') + 1);
    // console.log('#' + strCellId);
    var td = document.querySelector('#' + strCellId);
    if(td.classList.contains('cellUnClicked') && !td.classList.contains('cellmarked')){
        td.classList.remove('cellUnClicked');
        td.classList.add('cellClicked');
  
    if (td.innerHTML === '*') {
        showCells();
        var divGameOver = document.querySelector('#gameOverDiv');
        divGameOver.style.display = 'block';
        clearInterval(time);
    }
    if (td.innerHTML === '0') {
        // console.log('I am in');
        expandShown(gBoard, elCell, coord.i, coord.j);
    }
    }
    
    return coord;
}

function showCells() {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            var strCellId = getSelector({ 'i': i, 'j': j });
            var td = document.querySelector(strCellId);
            td.classList.remove('cellUnClicked');
            td.classList.add('cellClicked');
        }
    }
}

//note for myself - look at chess
// to use for showing cells
function getSelector(coord) {
    // console.log(coord);
    // console.log('#cell-' + coord.i + '-' + coord.j);
    return '#cell-' + coord.i + '-' + coord.j

}
// var coordTmp = {'i':3,'j':2};
// getSelector(coordTmp)

function expandShown(board, elCell, i, j) { //8 cases at max
    // console.log(elCell);
    for (var currI = i - 1; currI <= i + 1; currI++) {

        if (currI < 0 || currI >= board.length) continue;
        for (var currJ = j - 1; currJ <= j + 1; currJ++) {
            if (currJ < 0 || currJ >= board.length) continue;
            if (currI === i && currJ === j) continue;

            if (board[currI][currJ] !== '*') {
                var tmpCellIdx = { 'i': currI, 'j': currJ };
                var strCellId = getSelector(tmpCellIdx);
                var td = document.querySelector(strCellId);
                td.classList.remove('cellUnClicked');
                td.classList.add('cellClicked');

            }
        }
    }
}




// function for time
function timing() {
    
seconds++;

if (seconds >= 60) {
    seconds = 0;
    minutes++;

    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }

}
var sTime = (hours ? (hours > 9 ? hours : "0" + hours) : "00"); 
    sTime += ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00");
    sTime += ":" + (seconds > 9 ? seconds : "0" + seconds);


var elTiming = document.querySelector("#timing");
    elTiming.innerHTML = sTime;
}
