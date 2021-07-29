var context = new (window.AudioContext || window.webkitAudioContext)();
var oscillator = context.createOscillator();
h = window.innerHeight;
oscillator.connect(context.destination);
oscillator.start(0);
document.addEventListener("mousemove", function(e) {
    oscillator.frequency.setValueAtTime(e.clientY / h * 1000 + 300, context.currentTime);
});
