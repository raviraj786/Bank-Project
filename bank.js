



const accountForm = document.querySelector('#accountForm');
const customerName = document.querySelector('#custmerName');
const balance = document.querySelector('#balance');

accountForm.addEventListener('submit',(e)  => {
 e.preventDefault();

 console.log(customerName.value,balance.value)

})

