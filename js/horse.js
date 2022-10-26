
horseMove = (x, y) => {
  horse.dataset.x = x;
  horse.dataset.y = y;

  //spawn =>
  if (!horseSpawned) {
    horseSpawned = true;
    horse.classList.add('active');
    robot.src = robotUrl.idle;
    //*  Typing info text
    infoTextLine = 'Good luck!';
    lIndex = 0;
    output = '';
    tagC++;
    outputInfo(tagC)
    //*                */
  }

  //correcting position =>
  horse.style.top = (y - 1) * cellSize + 'px';
  horse.style.left = (x - 1) * cellSize + 'px';
}