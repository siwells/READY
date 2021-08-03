var context = new (window.AudioContext || window.webkitAudioContext)();
var oscillator = context.createOscillator();
var volume = context.createGain();
h = window.innerHeight;
oscillator.connect(volume).connect(context.destination);
oscillator.start(0);
document.addEventListener("mousemove", function(e) {
    oscillator.frequency.setValueAtTime(~~(1000*(1-((e.clientY)/window.innerHeight))), context.currentTime);
    volume.gain.setValueAtTime(~~(e.clientX/window.innerWidth*100)/100, context.currentTime);
});
