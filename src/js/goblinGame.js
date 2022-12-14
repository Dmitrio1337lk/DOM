const squares = document.querySelectorAll('.square');
const timeLeft = document.querySelector('#timeLeft');
const score = document.querySelector('#score');

const result = 0;
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
      const resultate = result +1;
      score.textContent = resultate;
      hitPosition = null;
    }
  });
});

setInterval(randomSquare, 500);

function countDown() {
  currentTime -= 1;
  timeLeft.textContent = currentTime;
  if (currentTime === 0) {
    alert('Время вышло! Вы молодец!');
  }
}

const countDownTimerId = setInterval(countDown, 1000);
