// step-1; add eventlistener to the deposit button

document.getElementById('btn-deposit').addEventListener('click' , function(){

    // step-2 : get the deposit amount from the deposit field [input field so it will be .value]
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;

    // converting it in float
    const newDepositAmount = parseFloat(newDepositAmountString);


    // clear the deposit field
    depositField.value= '' ;

    
    if(isNaN(newDepositAmount)){
        alert ('please provide a valid number')
        return ;
    }



    // step3 get the current deposit total [not input field so it will be .innerText]
    const depositTotalElement = document.getElementById('deposit-total');

    const previousDepositTotalString = depositTotalElement.innerText;

    // converting it in float
    const previousDepositTotal = parseFloat(previousDepositTotalString);




    // step 4 : add numbers to set the deposit total
    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    // set the deposit total 
    depositTotalElement.innerText = currentDepositTotal;



    // step 5 ;  get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText ;

    // converting it in float
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    // step- 6 calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount ;

    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    



})