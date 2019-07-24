
$(" <div class='meng'><div class='kuang'><div class='first'>denglu<div class='end'>X</div></div><div class='second'>成功！</div></div></div>").appendTo("body")
var btn = document.getElementsByClassName("btn")[0];
var meng = document.getElementsByClassName("meng")[0];
var end = document.getElementsByClassName("end")[0];
btn.onclick = function(){
    meng.style.display = "block";
}
end.onclick = function(){
    meng.style.display = "none";
}