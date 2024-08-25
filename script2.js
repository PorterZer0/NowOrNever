window.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    const modal = document.getElementById('customAlert');
    const modalVideo = document.getElementById('modalVideo');
    const closeButton = document.querySelector('.close-button');

    let buttonHeight = 50;
    let buttonWidth = 100;

    let maxWidth = window.innerWidth - buttonWidth;
    let maxHeight = window.innerHeight - buttonHeight;

    noButton.addEventListener('mouseover', () => {
        noButton.style.position = 'absolute';
        noButton.style.left = Math.floor(Math.random() * maxWidth) + 'px';
        noButton.style.top = Math.floor(Math.random() * maxHeight) + 'px';
    });

    yesButton.addEventListener('click', () => {
        modal.style.display = 'block';
        modalVideo.play(); // Automatically play the video when the "Yes" button is clicked
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
        modalVideo.pause(); // Pause the video when the modal is closed
        modalVideo.currentTime = 0; // Reset the video to the beginning
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            modalVideo.pause(); // Pause the video when the modal is closed
            modalVideo.currentTime = 0; // Reset the video to the beginning
        }
    });

    window.addEventListener('resize', () => {
        maxWidth = window.innerWidth - buttonWidth;
        maxHeight = window.innerHeight - buttonHeight;
    });
});
