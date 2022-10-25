const cells = document.querySelectorAll('.cell');
let cellSize = 60;

const horse = document.querySelector('.horse');
let horseSpawned = false;

const pageWidth = document.documentElement.scrollWidth
const pageHeight = document.documentElement.scrollHeight

//COLOR CELLS
for (const cell of cells) {
  if ((Number(cell.dataset.x) + Number(cell.dataset.y)) % 2 == 0) {
    cell.style.backgroundColor = '#F0D9B5'; // cacao color
  } else {
    cell.style.backgroundColor = '#B48762'; // brown color
  }
}

// addEventListener('load', () => {
// cellSize = document.querySelector('.cell').style.width;
console.log(document.querySelector('.horse').style, 'c')
// })

addEventListener('click', (event) => {
  if (event.target.classList.contains('cell')) {

    horseMove(event.target.dataset.x, event.target.dataset.y);

  }
})