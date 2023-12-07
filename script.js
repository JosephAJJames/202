var input = document.getElementById("input")



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




input.addEventListener("keydown", (e) => {
    if (acceptable(e.key)) {
        switch (e.key) {
            case "d":
                input.value = ""
                playBeep('L')
                break
            case "0":
                input.value = input.value + "0"
                playBeep('S')
                break
            case "1":
                input.value = input.value + "1"
                playBeep('S')
                break
            case "2":
                input.value = input.value + "2"
                playBeep('S')
                break
            case "3":
                input.value = input.value + "3"
                playBeep('S')
                break
            case "4":
                input.value = input.value + "4"
                playBeep('S')
                break
            case "5":
                input.value = input.value + "5"
                playBeep('S')
                break
            case "6":
                input.value = input.value + "6"
                playBeep('S')
                break
            case "7":
                input.value = input.value + "7"
                playBeep('S')
                break
            case "8":
                input.value = input.value + "8"
                playBeep('S')
                break
            case "9":
                input.value = input.value + "9"
                playBeep('S')
                break
        }
    }
})
