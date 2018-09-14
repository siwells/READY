with(new AudioContext)
for (i in D = [12, , , 13, , , 18, , , , , , 12, , , 13, , , 18, , , , , , 12, , , 13, , , 18, , , 15, , , 12, , , 8, , , 12, , , 13]) {
  with(createOscillator())
  if (D[i]) {
    onended = function() {
      console.log('Note has stopped playing');
    }
    connect(destination)
    frequency.value = 800 * 1.06 ** (13 - D[i]),
      type = 'square',
      start(i * .1),
      stop(i * .1 + .1)
  }
}

