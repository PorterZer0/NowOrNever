let buttonHeight = 50;
let buttonWidth = 100;

let maxWidth = window.innerWidth - buttonWidth;
let maxHeight = window.innerHeight - buttonHeight;

window.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');

    // Set a timer to trigger an alert after 5 seconds
    setTimeout(() => {
        alert("just press yes it'll be fine");
    }, 5000); // 5000 milliseconds = 5 seconds

    noButton.addEventListener('mouseover', () => {
        noButton.style.position = 'absolute';
        noButton.style.left = Math.floor(Math.random() * maxWidth) + 'px';
        noButton.style.top = Math.floor(Math.random() * maxHeight) + 'px';
    });

    yesButton.addEventListener('click', () => {
        window.location.href = 'page2.html';
    });

    // Update the max width and height on window resize
    window.addEventListener('resize', () => {
        maxWidth = window.innerWidth - buttonWidth;
        maxHeight = window.innerHeight - buttonHeight;
    });
});
