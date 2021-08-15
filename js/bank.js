/*----------------------------
Input Tag && Id Tag
----------------------------*/

function getInputId(Input){
    const inputFild = document.getElementById(Input);
    const inputText = inputFild.value;
    const inputFildTotal = parseFloat(inputText);
    inputFild.value = '';
    return inputFildTotal;
};


/*----------------------------
innerhtml Tag && Id Tag
----------------------------*/

function updetTotalFild(totalAmount, amount) {
    const totalTaka = document.getElementById(totalAmount);
    const totalAmountFild = totalTaka.innerText;
    const amountFild = parseFloat(totalAmountFild);
    totalTaka.innerText  =  amount + amountFild;    
}

/*----------------------------
innerhtml Tag && Blance Set
----------------------------*/

function totalBalance(blance,tBalance) {
    const balances = document.getElementById('balance_total');
    const balanceFild = balances.innerText;    
    const balanceAmount = parseFloat(balanceFild); 
    if(tBalance == true){
        const balanceTotalAmount = balanceAmount + blance;
        balances.innerText = balanceTotalAmount;
    }

    else{
        const balanceTotalAmount = balanceAmount - blance;
        balances.innerText = balanceTotalAmount;
    } 
}

document.getElementById('deposit_button').addEventListener('click',function(){
    //Deposit from
    const deposit = getInputId('deposit_input');
    if(deposit > 0){
        updetTotalFild('deposit_taka', deposit);
        totalBalance(deposit , true)
    }   
 
});

document.getElementById('withdraw_button').addEventListener('click', function(){
    //Withdraw from
    const withdraw = getInputId('withdraw_input');
    if(withdraw > 0){
        updetTotalFild('withdraw_blance', withdraw);
        totalBalance(withdraw, false);
    }

});