const cells = document.querySelectorAll('.cell');
let cellSize = 60;

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





addEventListener('load', () => {
  tagC++;
  outputInfo(tagC);
})

const pageWidth = document.documentElement.scrollWidth
const pageHeight = document.documentElement.scrollHeight

let gameMode = null; // play = 0 | watch = 1
let steps = 0;

const moves = [
  [-2, -2, 1, 1, 2, 2, -1, -1], //* x
  [1, -1, 2, -2, -1, 1, -2, 2], //* y
  [null, null, null, null, null, null, null, null] //* cell index on matrix
];

const graph = [
  [2, 3, 4, 4, 4, 4, 3, 2], // 1
  [3, 4, 6, 6, 6, 6, 4, 3], // 2
  [4, 6, 8, 8, 8, 8, 6, 4], // 3
  [4, 6, 8, 8, 8, 8, 6, 4], // 4
  [4, 6, 8, 8, 8, 8, 6, 4], // 5
  [4, 6, 8, 8, 8, 8, 6, 4], // 6
  [3, 4, 6, 6, 6, 6, 4, 3], // 7
  [2, 3, 4, 4, 4, 4, 3, 2], // 8
  //1 2  3  4  5  6  7  8
]

const history = [ //* [y][x] 
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

const backup = () => {
  gameMode = null;
}
// console.log(graph[0][0]) // 2
