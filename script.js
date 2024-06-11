const form = document.getElementById('form');
const email = document.getElementById('email');
const button = document.querySelector('button');
const message = document.getElementById('message-alert');

const text = document.getElementById('text-message');

const mailFormat = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

button.addEventListener('click', checkEmail);

function checkEmail(){
    if(email.value.match(mailFormat)){
        form.classList.remove('error');
    }else if(!email.value){
        text.innerHTML = 'Please enter an email';
        form.classList.add('error');
    }
    else{
        form.classList.add('error');
        text.innerHTML = 'Please provide a valid email address';
    }
}