// step-1 : add event handler with the submit button
document.getElementById('btn-submit').addEventListener('click' , function(){

    // step-2: get the email address inside email input field
    // always remember to use .value to get text from an input field

    const emailField = document.getElementById('user-email');
    const email = emailField.value;


    const passField = document.getElementById('user-pass');
    const pass = passField.value;

    if(email === 'sontan@baap.com' && pass === 'secret'){
        window.location.href = 'bank.html' ;

    }
    else{
        alert('Toke ami tejjo shontan ghoshona korlam tui password bhule geli kmne')
    }
    




})