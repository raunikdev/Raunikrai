function updatetime(){
  var a = new Date();
  var time = a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();
  document.getElementById('clock').innerHTML= time;
  if(a.getSeconds()<10){
    var time = a.getHours()+":"+a.getMinutes()+":"+"0"+a.getSeconds();
    document.getElementById('clock').innerHTML= time;
  }
  else if(a.getMinutes()<10){
    var time = a.getHours()+":"+"0"+a.getMinutes()+":"+a.getSeconds();
    document.getElementById('clock').innerHTML= time;
  }
  else if(a.getHours()>12 && a.getHours()<24){
    var time = (a.getHours()-12)+":"+a.getMinutes()+":"+a.getSeconds()+ " PM";
    document.getElementById('clock').innerHTML= time;
  }
  else if(a.getHours()<12 && a.getHours()>0){
  var time = a.getHours()+":"+a.getMinutes()+":"+a.getSeconds()+ " AM";
  document.getElementById('clock').innerHtml = time;
  }
  else if(a.getHours()==12){
    var time = a.getHours()+":"+a.getMinutes()+":"+a.getSeconds()+ " PM";
    document.getElementById('clock').innerHTML = time;
  }
  else if(a.getHours()== 0){
    var time = (a.getHours()+12)+":"+a.getMinutes()+":"+a.getSeconds()+ " AM";
    document.getElementById('clock').innerHTML = time;
  }
}

setInterval(updatetime ,1000);
