function swapStyleSheet(){
  var Checkbox = document.getElementById("csstoggle");
  if(Checkbox.checked==true){
    document.getElementById('css').setAttribute('href',"./css/style.css");  
  }
  else{
    document.getElementById('css').setAttribute('href','./css/stylelight.css');  
  }
}