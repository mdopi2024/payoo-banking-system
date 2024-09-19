document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault()
    const amount = document.getElementById('amount').value;
    const pin = document.getElementById('pin').value;
    if(pin === '1234'){
        const currentBalance =document.getElementById('current-balace').innerText
       const currentBalanceNumber = parseFloat(currentBalance);
       const amountNumber = parseFloat(amount)
       const totalBalance = currentBalanceNumber + amountNumber;
      document.getElementById('current-balace').innerText=totalBalance
      
    }
    else{
        alert('please try again')
    }
   
})