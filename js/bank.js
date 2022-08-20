
// Diposit part
document.getElementById('diposit-button').addEventListener('click', function(){
       
    const dipositAmmount = document.getElementById('diposit-fild');
    const priviousBalance = document.getElementById('total-balance');
    const priviousDiposit = document.getElementById('diposit-ammount');
    if (isNaN(dipositAmmount.value) ) {
        alert('Please enter an amount');
        dipositAmmount.value = '';
        return;
    } else if (dipositAmmount.value >= 100000) {
        alert('Please enter an amount less than 100000');
        dipositAmmount.value = '';
        return;
    }

    priviousDiposit.innerText = (parseFloat(priviousDiposit.innerText) + parseFloat(dipositAmmount.value)).toFixed(2);
    priviousBalance.innerText = (parseFloat(priviousBalance.innerText) + parseFloat(dipositAmmount.value)).toFixed(2);
    dipositAmmount.value = '';
     
})

// Withdraw part
document.getElementById('withdraw-button').addEventListener('click', function(){
       
    const withdrawAmmount = document.getElementById('withdraw-fild');
    const priviousBalance = document.getElementById('total-balance');
    const priviouswithdraw = document.getElementById('withdraw-ammount');

    if (isNaN(withdrawAmmount.value) ) {
        alert('Please enter an amount');
        withdrawAmmount.value = '';
        return;
    } else if (parseFloat(withdrawAmmount.value) >= parseFloat(priviousBalance.innerText)) {
        alert('You have insufficient balance');
        withdrawAmmount.value = '';
        return;
    }

    priviouswithdraw.innerText = (parseFloat(priviouswithdraw.innerText) + parseFloat(withdrawAmmount.value)).toFixed(2);
    priviousBalance.innerText = (parseFloat(priviousBalance.innerText) - parseFloat(withdrawAmmount.value)).toFixed(2);
    withdrawAmmount.value = '';
    
})