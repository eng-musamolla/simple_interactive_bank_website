
// Looging page part
document.getElementById('btn-button').addEventListener('click', function(){
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if(email === 'contact@musamolla.com' && password === '123456'){
        window.location.href = './bank.html';
    }else{
        alert('Invalid credentials');
    }
})
