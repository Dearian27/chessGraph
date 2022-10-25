const cells = document.querySelectorAll('.cell');
let cellSize = 60;

const horse = document.querySelector('.horse');
let horseSpawned = false;

const result = document.querySelector('.result');

const pageWidth = document.documentElement.scrollWidth
const pageHeight = document.documentElement.scrollHeight

let gameMode = 'play'; // play = 0 | watch = 1
let steps = 0;

const moves = [
  [-2, -1, 1, 2, 2, 1, -1, -2], //* x
  [1, 2, 2, 1, -1, -2, -2, -1], //* y
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
// console.log(graph[0][0]) // 2
