//* MOVE => CELL CLICK
addEventListener('click', (event) => {
  if (gameMode === "play") {
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

        // if  
        //* LOSE CHECK
        for (let i = 0; i < 8; i++) {
          if (Number(event.target.dataset.y) - 1 + moves[1][i] < 8 && //* змінити на horse.*
            Number(event.target.dataset.y) - 1 + moves[1][i] >= 0 &&
            Number(event.target.dataset.x) - 1 + moves[0][i] < 8 &&
            Number(event.target.dataset.x) - 1 + moves[0][i] >= 0
          ) {
            if (history[Number(event.target.dataset.y) - 1 + moves[1][i]][Number(event.target.dataset.x) - 1 + moves[0][i]] === 0) {
              isLose = false;
            }
          }


        }
        if (isLose != false) isLose = true;
      }
      //* LOSE THE GAME
      if (isLose) {
        result.innerHTML = "You lose";
        result.classList.add('active');
        cancel.innerHTML = "menu";
        //*  Typing info text
        infoTextLine = 'Try again';
        lIndex = 0;
        output = '';
        outputInfo(infoTextLine)
        //*                */
      }
      //* WIN THE GAME
      if (steps === 65) {
        result.innerHTML = "You win!";
        result.classList.add('active');
        cancel.innerHTML = "menu";
        //*  Typing info text
        infoTextLine = 'Congratulations!';
        lIndex = 0;
        output = '';
        tag++;
        outputInfo(tag)
        //*                */
      }
    }
  }
  else if (gameMode === 'watch') {

  }
})