document.getElementById('login-botton').addEventListener('click',function(event){
    // preventDefault reload brousers    
    event.preventDefault()  
    // phone number input and pin
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
   if(pinNumber === '1234' && phoneNumber === '1234'){
    window.location.href='/home.html'

   }
   else{
    alert('wrong phone number or pin')
   }
    
})