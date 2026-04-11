document.getElementById("cashout-btn").addEventListener("click", function(){
    //1- get the agent number & validate
   const cashoutNumberInput = document.getElementById("cashout-number");
   const cashoutNumber = cashoutNumberInput.value;
   console.log(cashoutNumber);

    // 2- get the amount 
    const cashoutAmountInput = document.getElementById("cashout-amount")
    const cashoutAmount = cashoutAmountInput.value;
    console.log(cashoutAmount);
    // 3- get the Current Balance 
    const balanceElement = document.getElementById("balance")
    const balance = balanceElement.innerText;
    console.log(balance)

    // 4- Calculate new Balance 
    const newBalance = Number(balance) - Number(cashoutAmount);
    console.log("New Balance 👉" , newBalance);
    // 5- Get the Pin and verify 
    // 5-1 true :: show an alert > set Balance
    // 5-2 true :: show anerror alert > return
});