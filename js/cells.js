//*COLOR CELLS
for (const cell of cells) {
  if ((Number(cell.dataset.x) + Number(cell.dataset.y)) % 2 == 0) {
    cell.style.backgroundColor = '#F0D9B5'; // cacao color
  } else {
    cell.style.backgroundColor = '#B48762'; // brown color
  }
}