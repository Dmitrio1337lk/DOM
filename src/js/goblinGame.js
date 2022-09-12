
const squares = document.querySelectorAll('.square');
const goblin = document.querySelector('.goblin');
const timeLeft = document.querySelector('#timeLeft');
const score = document.querySelector('#score');

let result = 0;
let hitPosition;
let currentTime = 90;

function randomSquare(){

    squares.forEach(square => {
        square.classList.remove('goblin');
    })

    let randomBox = squares[Math.floor(Math.random() * 16)];
    randomBox.classList.add('goblin');

    hitPosition = randomBox.id;
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result;
            console.log(result++);
            score.textContent = result;
            hitPosition = null;
        }
    })
})

function moveGoblin(){
    let timerId = null;
    timerId = setInterval(randomSquare, 500);
}

moveGoblin()

function countDown(){
 currentTime--;
 timeLeft.textContent = currentTime;
 if ( currentTime == 0 ){
    clearInterval(countDownTimerId);
    alert('Время вышло! Вы молодец!');
    location = '';
 }
}

let countDownTimerId = setInterval(countDown, 1000)