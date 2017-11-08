'use strict';
console.log('guess number');


function guessNum() {

    var random = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    var num = +prompt('please enter your guess');

    console.log(random);
    console.log(num);

    if (num < random) {
        console.log('your guess ' + num + ' is too low!');
        document.querySelector('#msg').innerHTML = 'your guess ' + num + ' is too low!';
    }
    else if (num > random) {
        console.log('your guess ' + num + ' is too high!');
        document.querySelector('#msg').innerHTML = 'your guess ' + num + ' is too high!';
    }

    else if (num === random) {
        console.log('you guessed right!!');
        document.querySelector('#msg').innerHTML = 'you guessed right!!';
    }
}
