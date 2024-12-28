var buttonEle = document.getElementById("chan");
var divEle = document.getElementById("col");
var colors= ["red", "blue" ,"green","grey" ,"yellow" , "pink"];
var i=0
buttonEle.onclick = function(){
    divEle.style.backgroundColor = colors[i];
    i++;
    if(i==6){
        i=0
    }

}