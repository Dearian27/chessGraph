const backUp = () => {

  //DATA
  gameMode = null;
  steps = 0;

  //CELLS
  cells.forEach(cell => {
    cell.classList.remove('green');
    cell.innerHTML = "";
  })

  //HORSE
  horseSpawned = false;
  horse.classList.remove('active');
  horse.dataset.x = null;
  horse.dataset.y = null;

  //MODAL
  result.classList.remove('active');
  result.innerHTML = "";

};

addEventListener('click', event => {
  if (event.target == play || event.target == watch) {
    play.style.display = "none";
    watch.style.display = "none";
    cancel.style.display = "block";

    //*  Typing info text
    infoTextLine = 'Choose your spawn';
    lIndex = 0;
    output = '';
    tagC++;
    outputInfo(tagC);
    //*                */
    if (event.target == play) gameMode = "play";
    else gameMode = "watch";
  }
  else if (event.target == cancel) {
    play.style.display = "block";
    watch.style.display = "block";
    cancel.style.display = "none";

    //*  Typing info text
    infoTextLine = 'Select mode';
    lIndex = 0;
    output = '';
    tagC++;
    outputInfo(tagC);
    //*                */
    backUp();
  }
})

addEventListener('keydown', event => {
  if (gameMode != 'play' && event.keyCode === 13) {
    play.style.display = "none";
    watch.style.display = "none";
    cancel.style.display = "block";

    //*  Typing info text
    infoTextLine = 'Choose your spawn';
    lIndex = 0;
    output = '';
    tagC++;
    outputInfo(tagC);
    //*                */
    gameMode = "play";
  }
})

