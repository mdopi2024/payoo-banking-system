document.getElementById('login-botton').addEventListener('click',function(event){
    // preventDefault reload brousers    
    event.preventDefault()  
    console.log('log in the account')
    // phone number input
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber)
    
})