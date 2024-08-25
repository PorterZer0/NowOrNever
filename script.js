const buttonHeight = 50;
const buttonWidth = 150;

const maxWidth = window. innerWidth - buttonWidth;
const maxHeight = window.innerHeight - buttonHeight;

window.addEventListener('DOMContentLoaded' , () => {
    const button = document.getElementById('button');

    button.addEventListener('click', () => alert('you clicked me'))

    button.addEventListener('mouseover',() =>{
        button.style.left = Math.floor(Math.ramdon() * (maxWidth +1)) + 'px';
    })
});