function math(){
    var num1 = 100;
    var num2 = 567;
    var result = (num1 * num2)/4;
    alert('The math result is ' + result);
}


function changeImage(){
    document.getElementById('image').src = "img/random2.png";
}

function returnImage(){
    document.getElementById('image').src = "img/random.jpg";
}