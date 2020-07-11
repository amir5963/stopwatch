var min = 0;
var sec = 0;
var msec = 0;
var minMain = document.getElementById("Min")
var secMain = document.getElementById("Sec")
var msecMain = document.getElementById("Msec")

function timer(){
    msec++
    msecMain.innerHTML = msec;
    if (msec >= 100){
        sec++
        secMain.innerHTML = sec;
        msec = 0;
    }
    else if (sec >= 10){
        min++
        minMain.innerHTML = min;
        sec = 0
    }
}

function start(){

    interval = setInterval(timer,10)
}


function pause(){
    clearInterval(interval)
}

function stop(){
    min = 0
    sec = 0
    msec = 0
    minMain.innerHTML = min
    secMain.innerHTML = sec
    msecMain.innerHTML = msec
    pause()
}

