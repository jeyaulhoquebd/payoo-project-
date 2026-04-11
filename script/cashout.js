document.getElementById("cashout-btn").addEventListener("click", function(){
    //1- get the agent number & validate
   const cashoutNumberInput = document.getElementById("cashout-number");
   const cashoutNumber = cashoutNumberInput.value;
   console.log(cashoutNumber);

    // 2- get the amount 
    const cashoutAmountInput = document.getElementById("cashout-amount")
    const cashoutAmount = cashoutAmountInput.value;
    console.log(cashoutAmount);
    // 3- get the Current Balance , valideat , convetyto Number
    // 4- Calculate new Balance 
    // 5- Get the Pin and verify 
    // 5-1 true :: show an alert > set Balance
    // 5-2 true :: show anerror alert > return
});