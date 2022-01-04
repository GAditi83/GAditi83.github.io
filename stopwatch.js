const showTimer=document.getElementById("stopwatch");

var hour=0;
var min=0;
var sec=0;
var timerCheck=true;

function startTimer(){
    if(timerCheck==true){
        timerCheck=false;
        stopwatchCycle();
    }
};

function stopTimer(){
    if(timerCheck==false){
        timerCheck=true;
    }
};

function resetTimer(){
    showTimer.innerHTML ="00:00:00";
};

function stopwatchCycle(){
    if(timerCheck==false){
        hour= parseInt(hour);
        min= parseInt(min);
        sec=parseInt(sec);
        console.log("hour",{hour});
        console.log("Minute",{min});
        console.log("Second",{sec});
    if(sec==60){
        min++;
        sec=0;
        console.log("Minute",{min});
    }
    if(min==60){
        hour++;
        min=0;
        sec=0;
        console.log("hour",{hour});
    }
    if(sec < 60 || sec == 0){
        sec++;
    }
    if(sec < 10 || sec==0){
        sec= '0'+sec;
    }
    if(min < 10 || min==0){
        min= '0'+min;
    }
    if(hour < 10 || hour==0){
        hour= '0'+hour;
    }
    // if(min < 60 || min == 0){
    //     min++;
    // }
    showTimer.innerHTML= hour + ":" + min + ":" + sec;
}
    setTimeout("stopwatchCycle()",1000);
}