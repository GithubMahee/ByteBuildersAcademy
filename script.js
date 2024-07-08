document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic form validation
    if(name && email && message) {
        alert('Thank you for your message! We will get back to you soon.');
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
});
