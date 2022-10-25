//* MOVE => CELL CLICK 
addEventListener('click', (event) => {
  if (event.target.classList.contains('cell') && !event.target.classList.contains('green')) {
    event.target.classList.add('green')

    //* MOVE SUCCESS
    event.target.innerHTML = steps;
    steps++;
    horseMove(event.target.dataset.x, event.target.dataset.y);

    //* END OF THE GAME
    if (gameMode == 'play' && steps === 64) {
      result.classList.add('active');
    }
  }
})