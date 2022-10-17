const squares = document.querySelectorAll('.square');
const timeLeft = document.querySelector('#timeLeft');
const score = document.querySelector('#score');

let result = 0;
let hitPosition;
let currentTime = 90;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove('goblin');
  });
  const boxRandom = squares[Math.floor(Math.random() * 16)];
  boxRandom.classList.add('goblin');
  hitPosition = boxRandom.id;
}

squares.forEach((square) => {
  square.addEventListener('mousedown', () => {
    if (square.id === hitPosition) {
      score.textContent = result+=1;
      hitPosition = null;
    };
  });
});

function moveGoblin() {
  let timerId = null;
  timerId = setInterval(randomSquare, 500);
}

moveGoblin();

function countDown() {
  currentTime-=1;
  timeLeft.textContent=currentTime;
  
  if( currentTime === 0 ) {
    clearInterval(countDownTimerId);
    alert('Время вышло! Вы молодец!');
    location = '';
  }
};

const countDownTimerId = setInterval(countDown, 1000);
