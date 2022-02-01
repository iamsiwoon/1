var Body = {
  SetColor:function(color){
    document.querySelector('body').style.color=color;
  },
  SetBackgroundColor:function(color){
    document.querySelector('body').style.backgroundColor=color;
  }
}
var Links = {
  SetColor:function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
      alist[i].style.color=color;
      i = i + 1;
    }
  }
}
var HaveBorder = {
  SetBoderColor:function(color){
    var haveborderlist = document.querySelectorAll('h1,#grid1 ul,#DarkMode');
    var i = 0;
    while(i < haveborderlist.length){
      haveborderlist[i].style.borderColor=color;
      i = i + 1;
    }
  }
}
function DarkModeChanger(self){
  if(self.value === 'ON'){
    Body.SetBackgroundColor('black');
    Body.SetColor('white');
    Links.SetColor('white');
    HaveBorder.SetBoderColor('white');
    self.value = 'OFF';
  } else {
    Body.SetBackgroundColor('white');
    Body.SetColor('black');
    Links.SetColor('black');
    HaveBorder.SetBoderColor('black');
    self.value = 'ON';
  }
}
