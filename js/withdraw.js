// step-1; add eventlistener to the withdraw button
document.getElementById('btn-withdraw').addEventListener('click' , function(){

    // step-2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value ;

    // converting to float
    const  newWithdrawAmount = parseFloat(newWithdrawAmountString);


    // step7 
    withdrawField.value = '' ;

    if (isNaN(newWithdrawAmount)){
        alert ('please provide a valid number')
        return ;
    }



    // step3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;

    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);




    // step5 ;
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText ;

    // converting it in float
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);







    if(newWithdrawAmount> previousBalanceTotal ){
        alert('baper bank e eto taka nai re pagla')
        return;
    }


    // step4 calculate withdraw total
    const currentWithdrawTotal = newWithdrawAmount+ previousWithdrawTotal;

    //  set the withdraw value
    withdrawTotalElement.innerText = currentWithdrawTotal ;




    //step 6: calculate new balance total
    const NewBalanceTotal = previousBalanceTotal - newWithdrawAmount ;

    balanceTotalElement.innerText= NewBalanceTotal ;






})