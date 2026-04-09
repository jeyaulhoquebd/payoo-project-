 

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
        alert("login success");
        return;
    }
    // 3-1 true:::>> alert > homepage
    // 3-2 true:::>> alert> returr
});