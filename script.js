function insert(){
    document.querySelector("#textbox").value=Math.pow(document.querySelector("#textbox").value,2);
}
function insert2(){
    document.querySelector("#textbox").value=Math.sqrt(document.querySelector("#textbox").value);
}
function insert3(){
    document.querySelector("#textbox").value=Math.pow(document.querySelector("#textbox").value,3);
}
function insert4(){
    document.querySelector("#textbox").value=parseInt(Math.pow(document.querySelector("#textbox").value,1/3));
}
function insert5(){
    document.querySelector("#textbox").value+=7;
}
function insert6(){
    document.querySelector("#textbox").value+=8;
}
function insert7(){
    document.querySelector("#textbox").value+=9;
}
function del(){
    var exp=document.querySelector("#textbox").value;
    document.querySelector("#textbox").value=exp.substring(0,exp.length-1);
}
function cl(){
    document.querySelector("#textbox").value=" ";
}
function insert8(){
    document.querySelector("#textbox").value+=4;
}
function insert9(){
    document.querySelector("#textbox").value+=5;
}
function insert10(){
    document.querySelector("#textbox").value+=6;
}
function insert11(){
    document.querySelector("#textbox").value+="*";
}
function insert12(){
    document.querySelector("#textbox").value+="/";
}
function insert13(){
    document.querySelector("#textbox").value+=1;
}
function insert14(){
    document.querySelector("#textbox").value+=2;
}
function insert15(){
    document.querySelector("#textbox").value+=3;
}
function insert16(){
    document.querySelector("#textbox").value+="+";
}
function insert17(){
    document.querySelector("#textbox").value+="-";
}
function insert18(){
    document.querySelector("#textbox").value+=0;
}
function insert19(){
    document.querySelector("#textbox").value+=".";
}
function equal(){
    document.querySelector("#textbox").value=eval(document.querySelector("#textbox").value);        
}