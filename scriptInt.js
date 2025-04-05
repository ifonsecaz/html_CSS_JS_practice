function compute()
{
    var p = document.getElementById("principal").value;
    var r=document.getElementById("rate").value;
    var y=document.getElementById("years").value;

    if(p<=0){
        window.alert("Enter a positive number");
        document.getElementById("principal").focus();
        
    }
    else{
        var i=p*y*r/100;
        var amount=parseInt(p)+parseFloat(i);
        var fecha=new Date().getFullYear()+parseInt(y);
        var result=document.getElementById("result");
        result.innerHTML="If you deposit $" + "<mark>" + p + "</mark>"+",\<br\> at an interest rate of " + "<mark>" +r+"</mark>" +"%.\<br\> You will receive an amount of $" + "<mark>" + i +"</mark>"+",\<br\> in the year "+ "<mark>" + fecha + "</mark>"+"\<br\>"; 
    }

    }
function updateRate()
{
    var rateval=document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        