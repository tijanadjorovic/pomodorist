var interval = undefined;
var inverval05 = undefined;
var sound = new Audio();
sound.src = "sounds/openhat.wav";

//-----start main timer-----
function start(){ 
    var timer = document.getElementById("mytimer").innerHTML;
    var arr = timer.split(":");
    var min = arr[0];
    var sec = arr[1];
    
    if (sec == 0){
        if(min == 0){
             sound.play();
        return;
    }
        min--;
        sec = 60;
        if(min < 10) min = "0" + min;
         sec = 59;
    }   else sec--;
    if(sec < 10) sec = "0" + sec;
        document.getElementById("mytimer").innerHTML = min + ":" + sec;
        interval = setTimeout(start, 1000);
}

//------stop main timer-----
function stop() {
    clearInterval(interval);
    interval = undefined;
}

//-----rest main timer-----
function reset(){
    clearInterval(interval);
    document.getElementById("mytimer").innerHTML = '25:00';
}
 

//-----start break timer-----
function start05(){ 
    var timer = document.getElementById("timer05").innerHTML;
    var arr = timer.split(":");
    var min = arr[0];
    var sec = arr[1];
        if (sec == 0){
            if(min == 0){
                 sound.play();
            return;
            }
             min--;
             sec = 60;
            if(min < 10) min = "0" + min;
             sec = 59;
    }   else sec--;
        if(sec < 10) sec = "0" + sec;
    
        document.getElementById("timer05").innerHTML = min + ":" + sec;
        interval05 = setTimeout(start05, 1000);
}

//-----stop break timer-----
function stop05() {
    clearInterval(interval05);
    interval05 = undefined;
}
//-----reset break timer-----
function reset05(){
    clearInterval(interval05);
    document.getElementById("timer05").innerHTML = "05:00";
}
          