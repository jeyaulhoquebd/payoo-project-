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
        alert("Invalid acc no");
        return;
    }
    //3- get ammount 
    const ammount = getValueFromeInput("add-money-amount");
    const currentBalance = getBalance()
    const newBlance = currentBalance + Number(ammount);
    
    const pin = getValueFromeInput("add-money-pin");
    if(pin == "1234"){
        alert(`Add Money Success from
             ${bankAccount} at ${new Date()}`);
        setBalance(newBlance)
        
        //1- history-container ka shore niye ashbo
        const history = document.getElementById("history-container")
        // 2- new div create korbo 
        const newHistory = document.createElement("div");
        // 3- new div inerHTML add korbo
        newHistory.innerHTML =  `
        <div class="transition-card p-5 bg-base-100">

            </div>
        `
        // 4- history container e newdiv append korbo
    }
    else{
        alert("Invalid Pin")
        return;
    }
})