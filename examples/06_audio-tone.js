var context = new (window.AudioContext || window.webkitAudioContext)();
var oscillator = context.createOscillator();
oscillator.type = 'sine';
oscillator.frequency.value = 220;
oscillator.connect(context.destination);
oscillator.start();

