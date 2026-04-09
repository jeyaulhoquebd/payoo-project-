 

document.getElementById("login-btn").addEventListener("click", function(){
    // 1- get the monile number
    const numberInput = document.getElementById("input-number")
    const contactNumber = numberInput.value;
    console.log(contactNumber)
    // 2 - get the pin input
    const pinInput = document.getElementById("input-pin")
    const pinNumber = pinInput.value;
    console.log(pinNumber);
    // 3- matvh pin & monile number
    if(contactNumber=="01234567890" && pinNumber=="1234"){
        // 3-1 true:::>> alert > homepage
        alert("login success");
        
        window.location.replace("/home.html")
    }
    else{
        // 3-2 true:::>> alert> returr
        alert(" login Failed")
        return;
    }
    
});