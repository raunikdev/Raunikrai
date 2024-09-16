function updatetime(){
  var a = new Date();
  var hour = a.getHours();
  var minute = a.getMinutes();
  var second = a.getSeconds();
  var colon = ":";
  if(hour>=0 && hour<12){
    var zone = "AM";
    if(hour==0){
      hour+=12;
    }
  }
  else if (hour>=12 && hour < 24){
    var zone = "PM";
    hour -= 12;
  }
  else{
    var zone =""; 
  }
  if (second<10){
    second = "0"+second;
  }
  else{
    second=second;
  }
  if (minute<10){
    minute= "0" + minute;
  }
  else{
    minute = minute;
  }
  var time = hour + colon + minute + colon + second + " "+ zone;
  return document.getElementById('clock').innerHTML = time;
}
updatetime()
setInterval(updatetime, 1000);