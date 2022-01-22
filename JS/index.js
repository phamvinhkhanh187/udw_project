var arr_hinh=[
    "./Images/pic1.jpg",
    "./Images/pic2.png",
    "./Images/pic3.jpg",
    "./Images/pic4.png",
]

var index = 0;
function next(){
    index++;
    if(index >= arr_hinh.length)index = 0;
    var hinh = document.getElementById("hinh");
    hinh.src =arr_hinh[index];
}
    
function pve(){
    index--;
    if(index<0)
        index= arr_hinh.length -1;
        document.getElementById("hinh").src= arr_hinh[index];
}
setInterval("next()", 2000);