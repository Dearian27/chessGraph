const cells = document.querySelectorAll('.cell');
console.log(cells)

//COLOR CELLS
for (const cell of cells) {
  if ((Number(cell.dataset.x) + Number(cell.dataset.y)) % 2 == 0) {
    cell.style.backgroundColor = '#F0D9B5';
  } else {
    cell.style.backgroundColor = '#B48762';
  }
}