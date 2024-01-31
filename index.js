var input_box=document.getElementById("input-class");

function calC(){
input_box.innerHTML =" ";
}
function caldbl1(){
    input_box.innerHTML +="[";
}function caldbl2(){
    input_box.innerHTML +="]";
}
function calper(){
    input_box.innerHTML +=" % ";
}
function caldiv(){
    input_box.innerHTML +=" / ";

}function cal7(){
    input_box.innerHTML +="7";

}
function cal8()
{
    input_box.innerText +="8";


}
function cal9(){
    input_box.innerHTML +="9";
}function cal6(){
    input_box.innerHTML +="6";
}function cal5(){
    input_box.innerHTML +="5";
}function cal4(){
    input_box.innerHTML +="4";
}function cal3(){
    input_box.innerHTML +="3";
}function cal2(){
    input_box.innerHTML +="2";
}function cal1(){
    input_box.innerHTML +="1";
}function cal0(){
    input_box.innerHTML +="0";
}function calx(){
    input_box.innerHTML +=" * ";
}function calmin(){
    input_box.innerHTML +=" - ";
}function calplus(){
    input_box.innerHTML +=" + ";
}function calneg(){
    input_box.innerHTML +=" -";
}
function caldot(){
    input_box.innerHTML +=".";
}function caleql(){
    input_box.innerHTML=eval(input_box.innerHTML);
}

