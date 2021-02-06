var content = document.getElementById("content");
var button = document.getElementById("show-more");

button.onclick = function(){

    if(content.className=="open"){
        content.className = "";
    }
    else{
        content.className = "open";
    }

};