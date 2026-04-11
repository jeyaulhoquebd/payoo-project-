document.getElementById("add-money-btn").addEventListener("click",function(){
    //1- bank account ger
    const bankAccount = getValueFromeInput("add-money-bank");
    
    if(bankAccount == "Select A Bank"){
        alert("Please select a bank")
        return;
    }

    // 2- get bank account number 
    const accno = getValueFromeInput("add-money-number")
    if(accno.length != 11){
        alert("Please select a bank");
        return;
    }
})