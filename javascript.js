function validateFormgym()
{
    var date1=document.forms["myForm"]["date1"].value;
    
    var a;
    if(date1==""){
        a=0;
    }
    else{
        a=1;
    }
    if(a==1){
        alert("Booking Successfull");
        window.location.href="index.html";
    }
    else{
        alert("Please choose date");
    }
}
function validateFormseminar()
{
    var date1=document.forms["seminar"]["date1"].value;

    var a;
    if(date1==""){
        a=0;
    }
    else{
        a=1;
    }
    
    if(a==1){
        alert("Booking Successfull");
        window.location.href="index.html";
    }
    else{
        alert("Please choose date");
    }
}
function validateFormsports()
{
    var date1=document.forms["sports"]["date1"].value;
   
    var a;
    if(date1==""){
        a=0;
    }
    else{
        a=1;
    }
    
    if(a==1){
        alert("Booking Successfull");
        window.location.href="index.html";
    }
    else{
        alert("Please choose date");
    }
}
function validateFormcafeteria()
{
    var c1=document.forms["cafeteria"]["c1"].value;
    if(c1){
        alert("Booking Successfull");
        window.location.href="index.html";
    }
    else{
        alert("Please choose");
    }
}
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }