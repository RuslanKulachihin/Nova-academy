(function () {
    const contactForm = document.querySelector('.popup-success');
    const closeContactForm = contactForm.querySelector('.popup-success__close');
    document.querySelectorAll('.contacts-button').forEach((element) => {
        element.addEventListener('click', (event) => {
            event.preventDefault();
            contactForm.style.display = 'flex';
            setTimeout(() => {
                contactForm.style.display = 'none';
            }, 5000);
            closeContactForm.addEventListener('click', () => (contactForm.style.display = 'none'));
        });
    });
})();
