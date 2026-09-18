var time = 0;
var start = false;
const watchDiv = document.getElementById("watchDiv");
const startButton = document.getElementById("startButton")
async function startTimer() {

    if (start == false) {


         start = true;   

        startButton.style.cursor = "not-allowed"   

    while (start == true) {
        time++;
        watchDiv.innerText = formatHours(time);
        await new Promise(r => setTimeout(r, 1000));
    }
    }
    
   
}
function pauseTimer() {
    start = false;
}

function stopTimer() {
    pauseTimer();
    time = 0;
}

function restartTimer() {
    stopTimer();
    startTimer();
}

function formatTime(time) {
    if(time < 60) {
        return`00:${time}`
    }else {
        const seconds = time%60;
        const minutes = Math.floor(time / 60);
        return `${minutes}:${seconds}`;
    }
}

function formatHours(seconds) {
    const hours = Math.floor(seconds / 3600);
    const remainingSeconds = seconds % 3600;
    const timeSeconds = seconds % 60;
    const minutes = Math.floor(remainingSeconds / 60)
    return`${hours}:${minutes}:${timeSeconds}`;
}