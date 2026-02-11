// Typing Animation
document.addEventListener('DOMContentLoaded', () => {
    if(document.querySelector('.typing-text')) {
        new Typed('.typing-text', {
            String: ['Cybersecurity Specialist', 'Web Developer', 'CS Student'],
            typeSpeed: 70,
            backSpeed: 70,
            backDelay: 1000,
            loop: true
        })
    }
})

// Contact Form Validation
const contactForm = document.querySelector('#contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.querySelector('#email').value;
        if(!email.includes('@')) {
            alert('Please enter a valid email address.');
            return;
        }
        alert('Message Sent Succssfully!');
    });
}