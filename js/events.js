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

  //ROBOT
  robot.src = robotUrl.idle;
};

addEventListener('click', event => {
  if (event.target == play || event.target == watch) {
    cancel.innerHTML = "cancel";
    play.style.display = "none";
    watch.style.display = "none";
    cancel.style.display = "block";

    if (event.target == play) {
      gameMode = "play";
      //*  Typing info text
      robot.src = robotUrl.voice;
      infoTextLine = 'Choose your spawn';
      lIndex = 0;
      output = '';
      tagC++;
      outputInfo(tagC);
      //*                */
    }
    else {
      gameMode = "watch"
      //*  Typing info text
      robot.src = robotUrl.voice;
      infoTextLine = 'Choose my spawn';
      lIndex = 0;
      output = '';
      tagC++;
      outputInfo(tagC);
      //*                */

    }
  }
  else if (event.target == cancel) {
    cancel.innerHTML = "cancel";
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

