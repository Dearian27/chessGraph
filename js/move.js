//* MOVE => CELL CLICK
addEventListener('click', (event) => {
  if (event.target.classList.contains('cell') &&
    !event.target.classList.contains('green')
  ) {
    let canMove = false;
    for (let i = 0; i < 8; i++) {
      if (event.target.dataset.x - 1 == horse.dataset.x - 1 + moves[0][i] &&
        event.target.dataset.y - 1 == horse.dataset.y - 1 + moves[1][i]
      ) {
        canMove = true;
      }
    }

    let isLose = null;
    if (canMove || !horseSpawned) {
      event.target.classList.add('green')

      //* MOVE SUCCESS
      steps++;
      event.target.innerHTML = steps;
      history[event.target.dataset.y - 1][event.target.dataset.x - 1] = steps;

      horseMove(event.target.dataset.x, event.target.dataset.y);

      //* LOSE CHECK
      for (let i = 0; i < 8; i++) {
        if (Number(event.target.dataset.y) - 1 + moves[1][i] < 8 && //* змінити на horse.*
          Number(event.target.dataset.y) - 1 + moves[1][i] >= 1 &&
          Number(event.target.dataset.x) - 1 + moves[0][i] < 8 &&
          Number(event.target.dataset.x) - 1 + moves[0][i] >= 1
        ) {
          if (history[Number(event.target.dataset.y) - 1 + moves[1][i]][Number(event.target.dataset.x) - 1 + moves[0][i]] === 0) {
            isLose = false;
          }
        }


      }
      if (isLose != false) isLose = true;
    }
    if (isLose) {
      result.innerHTML = "You lose";
      result.classList.add('active');
    }
    //* END OF THE GAME
    if (gameMode == 'play' && steps === 65) {
      result.classList.add('active');
    }
  }

})