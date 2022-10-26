const outputInfo = (tag) => {

  if (tag == tagC) {
    const interval = setTimeout(() => {
      output += infoTextLine[lIndex]
      infoText.innerHTML = lIndex % 2 ? output : output + '_';
      // infoText.innerHTML = output + '_';
      lIndex++;

      if (output.length === infoTextLine.length) {
        infoText.innerHTML = output;
        return;
      }
      else {
        outputInfo(tag)
      }
    }, 150)
  }
}

// const randomTime = () => {
//   return Math.ceil(Math.random() * 3) * 90;
// }