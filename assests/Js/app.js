const sign_in_button=document.querySelector('#signin-button');
const sign_up_button=document.querySelector('#signup-button');

const container=document.querySelector('.container');

sign_up_button.addEventListener('click',()=>{
    container.classList.add('signup-mode');
});

sign_in_button.addEventListener('click',()=>{
    container.classList.remove('signup-mode');
});