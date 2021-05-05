var p,r,y,i,ir;
function compute(){
    validator()
    //load variables from input
    p = document.getElementById("principal").value;
    //r = document.getElementById("rate").value;
    y = document.getElementById("years").value;
    i = document.getElementById("interest").value;
	ir = document.getElementById("slide").innerText;
    //convert to numbers
    var principal = Number(p);
    var rate = Number(r);    
    var years = Number(y);
	ir = Number(ir);
    var interests = p * y * ir/100;
    var future = 2021 + years;
    document.getElementById('result').innerHTML = 
    "<br>If you deposit <mark>"+principal+"</mark>,<br>\
    at an interest rate of <mark>"+ir+"%</mark>.<br>\
    You will receive an amount of $<mark>"+interests+"</mark>,<br>\
    in the year <mark>"+future+"</mark>.<br>";
    return i;
}
function slide(){
    i = document.getElementById("interest").value;
    document.getElementById('slide').innerText = i;
    return i; 
};

function validator(){
    if (document.getElementById('principal').value < 1){
        alert('Enter a positive number');
        document.getElementById('principal').style.background = "yellow";
        document.getElementById('principal').focus();
        
    }
    else {
        document.getElementById('principal').style.background = "white";
    }
};   