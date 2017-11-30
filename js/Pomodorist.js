function start() {
//    var timeStart = new Date(); ??????
    var m = timeStart.getMinutes();
    var s = timeStart.getSeconds();

    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(function(){ startTime() }, 500);
    
    
    function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;