const outputInfo = (tag, color = 'black') => {

  if (color == 'black') {
    infoText.style.color = 'black';
  }
  else if (color == 'green') {
    infoText.style.color = '#95ff3f';
  }
  else if (color == 'red') {
    infoText.style.color = '#ff4b33';
  }
  else if (color == 'blue') {
    infoText.style.color = '#00CDFC';
  }

  if (tag == tagC) {
    const interval = setTimeout(() => {
      output += infoTextLine[lIndex]
      infoText.innerHTML = lIndex % 2 ? output : output + '_';
      lIndex++;

      if (output.length === infoTextLine.length) {
        infoText.innerHTML = output;
        return;
      }
      else {
        outputInfo(tag, color)
      }
    }, 150)
  }
}