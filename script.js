
document.getElementById("submitbutton").onclick=function(){
    let temp;
    if(document.getElementById("cbutton").checked){
        temp=document.getElementById("textbox").value;
        temp=Number(temp);
        temp=toCelcius(temp);
        document.getElementById("templabel").innerHTML=temp+"°C"
    }
    else if((document.getElementById("fbutton").checked)){
        temp=document.getElementById("textbox").value;
        temp=Number(temp);
        temp=toFaharenheit(temp);
        document.getElementById("templabel").innerHTML=temp+"°F"
    }
    else{
        document.getElementById("templabel").innerHTML="select a unit"
    }
}



function toCelcius(temp){
    return ((temp-32)*(5/9));
}
function toFaharenheit(temp){
    return (temp*9/5)+32;
}