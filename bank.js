function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;

  // amount add karne ke liye

  this.deposit = function (amount) {
    this.balance += amount;
  };

  // withdraw
  this.withdraw = (amount) => {
    this.balance -= amount;
  };
}

//  const rakeshaccount =  new BankAccount("rakesh k" ,1000);

//  const jhonaccount =  new BankAccount("jhon doe" );

// //  rakeshaccount.balance =2000  kuch data ko update karna ho

// // rakeshaccount.ammount = 100      kuchh data aadd karna ho isliye use karte hai

// rakeshaccount.deposit(500);

// rakeshaccount.withdraw(200)

// console.log(rakeshaccount)

//  jhonaccount.deposit(1000)
// console.log(jhonaccount )

const accounts = [];

const accountForm = document.querySelector("#accountForm");
const customerName = document.querySelector("#custmerName");
const balance = document.querySelector("#balance");




const depositeForm = document.querySelector("#depositeForm");
const accountNumber = document.querySelector("#accountNumber");
const amount = document.querySelector("#amount");




// const withdrawForm = document.querySelector("#withdrawForm");
// const accountNumber1 = document.querySelector("#accountNumber");
// const amount0 = document.querySelector("#amount");




accountForm.addEventListener("submit", (e) => {
  e.preventDefault();

  var account = new BankAccount(customerName.value, +balance.value);

  accounts.push(account);

  console.log(accounts);
  //  console.log(customerName.value,balance.value)
});

depositeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const account = accounts.find(
    (account) => account.accountNumber === +accountNumber.value
  );

  

  account.deposit(+amount.value);
  console.log(accounts);

});




// withdrawForm.addEventListener('sumbit',(e)=>{
//     e.preventDefault();

//     const account = accounts.find(
// (account) => account.accountNumber === +accountNumber.value
//     );
// account.withdraw(+amount.value)
// console.log(accounts)

// })
