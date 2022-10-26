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
    backup();
  }
})