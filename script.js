var input = document.getElementById("input")
var form = document.getElementById("display")
var div = document.getElementById("submitMessage")

const playBeep = (char) => {
    var audioContext = new (window.AudioContext || window.webkitAudioContext)();
    var oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(1000, audioContext.currentTime);
    oscillator.connect(audioContext.destination);
    oscillator.start();
    if (char == 'L') { //long beep
        oscillator.stop(audioContext.currentTime + 1);
    } else { //Little beep
        oscillator.stop(audioContext.currentTime + 0.5);
    }
}

const acceptable = (int) => {
    if (int > 10000 || int < 0) {
        return false
    } else {
        return true
    }
}


var set = ["0" ,"1", "2", "3", "4", "5", "6", "7", "8", "9"]

input.addEventListener("keydown", (e) => {
    div.setAttribute("display", "none")
    if (set.includes(e.key)) {
        playBeep('S')
    } else if (e.key == "d") {
        playBeep('L')
        input.value = "";
        e.preventDefault();
    } else if (e.key == "e") {
        e.preventDefault();
        playBeep('L')
        if (!acceptable(input.value)) {
            div.setAttribute("display", "block")
        }
    }
})
