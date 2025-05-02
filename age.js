function ticketDiscount(){
  let ageInput = document.querySelector('.js-age');
  let userAge = Number(ageInput.value);

  message = '';
  let discountMessage = document.querySelector('.js-discount-message');
  if(userAge )
    if( userAge > 65 || userAge < 6){
      message = 'Congrats. You can use 20% discount. Pay $80';
    }else {
      message = 'Sorry. We will do our best to offer you discount soon.';
    };
  discountMessage.innerHTML = message;
  console.log(userAge)
};