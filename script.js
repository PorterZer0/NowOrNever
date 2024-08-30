document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.selectable-img');

    images.forEach(image => {
        image.addEventListener('click', () => {
            const selectedImageSrc = image.getAttribute('src');
            localStorage.setItem('selectedImage', selectedImageSrc);
            window.location.href = 'home.html';
        });
    });
});
