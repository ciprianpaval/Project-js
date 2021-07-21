const array_image = document.querySelectorAll('.panel');

array_image.forEach(panel => {
    panel.addEventListener('click', () => {
        removeEvent();
        panel.classList.add('active');
    })
})

function removeEvent() {
    array_image.forEach(panel => {
        panel.classList.remove('active');
    })
}