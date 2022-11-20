const pageWidth = document.documentElement.scrollWidth;
const pageHeight = document.documentElement.scrollHeight;

const cells = document.querySelectorAll('.cell');
let cellSize = 60;

//ADAPTATION
if (pageWidth < 420) {
  cellSize = 40;
}
else if (pageWidth < 520) {
  cellSize = 50;
}

const horse = document.querySelector('.horse');
let horseSpawned = false;

const result = document.querySelector('.result');
const infoText = document.querySelector('.infoText');
let infoTextLine = 'Select mode', output = '',
  lIndex = 0, //* index of letter in <infoTextLine>
  tagC = 0; //* tag to stop recursive func

const play = document.querySelector('.play');
const watch = document.querySelector('.watch');
const cancel = document.querySelector('.cancel');

const robot = document.querySelector('.robot');
let botStarted = false;
const robotUrl = {
  idle: "../img/robot/idle.png",
  smile: "../img/robot/smile.png",
  voice: "../img/robot/voice.png",
  warning: "../img/robot/warning.png",
  dead: "../img/robot/dead.png"
}



addEventListener('load', () => {
  tagC++;
  outputInfo(tagC);
})




let gameMode = null; // play = 0 | watch = 1
let steps = 0;

let moves = [
  [-2, -2, 1, 1, 2, 2, -1, -1], //* x
  [1, -1, 2, -2, -1, 1, -2, 2], //* y
  [64, 64, 64, 64, 64, 64, 64, 64] //* cell index on matrix
];

let graph = [
  [2, 3, 4, 4, 4, 4, 3, 2], // 0
  [3, 4, 6, 6, 6, 6, 4, 3], // 1
  [4, 6, 8, 8, 8, 8, 6, 4], // 2
  [4, 6, 8, 8, 8, 8, 6, 4], // 3
  [4, 6, 8, 8, 8, 8, 6, 4], // 4
  [4, 6, 8, 8, 8, 8, 6, 4], // 5
  [3, 4, 6, 6, 6, 6, 4, 3], // 6
  [2, 3, 4, 4, 4, 4, 3, 2], // 7
  //0 1  2  3  4  5  6  7
]

let history = [ //* [y][x] 
  [0, 0, 0, 0, 0, 0, 0, 0], // 0
  [0, 0, 0, 0, 0, 0, 0, 0], // 1
  [0, 0, 0, 0, 0, 0, 0, 0], // 2
  [0, 0, 0, 0, 0, 0, 0, 0], // 3
  [0, 0, 0, 0, 0, 0, 0, 0], // 4
  [0, 0, 0, 0, 0, 0, 0, 0], // 5
  [0, 0, 0, 0, 0, 0, 0, 0], // 6
  [0, 0, 0, 0, 0, 0, 0, 0], // 7
  //0 1  2  3  4  5  6  7
]

const soundPlay = async (url, volume = 0.2) => {
  const sound = await new Audio(url);
  sound.volume = volume;
  sound.play();
}

const bot = () => {
  if (steps == 64) {
    console.log('RETURN')
    return;
  }
  steps++;
  let currCell;

  let min = moves[2][0],
    xmin = moves[0][0],
    ymin = moves[1][0];

  //* CHANGE CELL
  currCell = document.querySelector(`.cell[data-x='${horse.dataset.x}'][data-y='${horse.dataset.y}']`); // (x,y);
  currCell.innerHTML = steps;
  currCell.classList.add('green');
  //*          */


  //* CHANGE MATRIX
  graph[Number(horse.dataset.y) - 1][Number(horse.dataset.x) - 1] = 64;   // [y][x]
  history[Number(horse.dataset.y) - 1][Number(horse.dataset.x) - 1] = steps;   // [y][x]
  //*          */

  for (let i = 0; i < 8; i++) {
    if (Number(horse.dataset.x) - 1 + moves[0][i] < 8 &&
      Number(horse.dataset.x) - 1 + moves[0][i] >= 0 &&
      Number(horse.dataset.y) - 1 + moves[1][i] >= 0 &&
      Number(horse.dataset.y) - 1 + moves[1][i] < 8
    ) {
      graph[Number(horse.dataset.y) - 1 + moves[1][i]][Number(horse.dataset.x) - 1 + moves[0][i]] -= 1; // Decrease posibble ways
      moves[2][i] = graph[Number(horse.dataset.y) - 1 + moves[1][i]][Number(horse.dataset.x) - 1 + moves[0][i]];
    } else moves[2][i] = 64;

    //SEARCH MINIMAL
    if (min > moves[2][i] && !document.querySelector(`.cell[data-x='${Number(horse.dataset.x) + moves[0][i]}'][data-y='${Number(horse.dataset.y) + moves[1][i]}']`).classList.contains('green')) {
      min = moves[2][i]; //REWRITE MINIMAL
      xmin = moves[0][i];
      ymin = moves[1][i];
    }
  }
  if (min == 64) {
    soundPlay("../audio/botWin.mp3");

    result.innerHTML = "";
    result.classList.add('active');
    cancel.innerHTML = "menu";

    //ROBOT
    robot.src = robotUrl.smile;
    //*  Typing info text
    infoTextLine = 'It was easy';
    infoText.innerHTML = '';
    lIndex = 0;
    output = '';
    tagC++;
    outputInfo(tagC, 'blue')
    //****         ****/
    setTimeout(() => {
      robot.src = robotUrl.idle;
    }, 2000)
    return
  }

  const botMove = setTimeout(() => {
    if (botStarted) {
      horseMove(Number(horse.dataset.x) + xmin, Number(horse.dataset.y) + ymin);
      for (let i = 0; i < 8; i++) {
        moves[2][i] = 64;
      }
      bot();
    }
  }, 1200);
}