var mapData =  new XMLHttpRequest();
var mObj;



btn.onclick=function () {
    var origin = document.getElementById('orgin').value;
    var destination = document.getElementById('destination').value;
    var mode = document.getElementById('mode').value;
    //console.log(origin);
    //console.log(destination);
    //console.log(mode);
    mapData.open('GET', 'https://maps.googleapis.com/maps/api/directions/json?origin='+origin+
        '&destination='+destination+'&mode='+mode+'&key=AIzaSyC2joCbzQB63W56GrDC07sw6p470h6Dydk', true);
    mapData.send();
}


mapData.onload = function() {
    if (mapData.status === 200){
        mObj = JSON.parse(mapData.responseText);
        console.log(mObj);
        document.getElementById('distance').innerHTML= mObj.routes[0].legs[0].distance.text;
        document.getElementById('duration').innerHTML= mObj.routes[0].legs[0].duration.text;
    }
}