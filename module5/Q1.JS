function bankAccount()
{
    let balance=0;
    let result='';
 
function deposit(amount)
    {
         balance=balance+amount;
        console.log(`Amount  of ₹${amount} deposited to bank account`)
        result=result+ `deposited amt ${amount}`+" "
    }
    function withdraw(amount)
    {
        if(balance<amount)
        {
            console.log('Insufficient Balance');
        }
        else{
            balance=balance-amount;
            console.log(`₹ ${amount} withdraw successfully`)
            result=result+ `withdrawn amt ${amount}`+" "

        }

    }
    function getBalance()
    {
        console.log('Balance = ₹',balance);

    }
    function getTransactionHistory()
    {
        console.log(`Transaction History : ${result}`)

    }

return{deposit,withdraw,getBalance,getTransactionHistory}    
}

let PassBook = bankAccount();
PassBook.deposit(2000)
PassBook.withdraw(500);




