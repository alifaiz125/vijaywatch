document.addEventListener('DOMContentLoaded', () => {
    const newsletterForm = document.querySelector('.newsletter form');

    newsletterForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const emailInput = document.getElementById('newsletterEmail');
        if (validateEmail(emailInput.value)) {
            alert('Thank you for subscribing!');
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
