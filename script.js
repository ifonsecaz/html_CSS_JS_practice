function convertTempCelToFa(){
    var degrees=document.getElementById("celsius");   
    if(degrees.value==""){
        alert("Please enter the temperature -_-");
        degrees.focus();
        return false;
    } 
    
    var f = (degrees.value * 9/5) + 32;
    document.getElementById("fahrenheit").value = f	
    
}

function weight(){
    //To convert KGs to Pounds
    // KG * 2.2
    var kg = document.getElementById("kilo").value;
    var p = kg * 2.2
    document.getElementById("pounds").value = p
}

function distance(){
    //To convert KMs to Miles
    // KM * 0.62137
    var km = document.getElementById("km").value;
    var m = km * 0.62137
    document.getElementById("miles").value = m
}