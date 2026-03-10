  // MENU TOGGLE
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-bars');
        menuToggle.querySelector('i').classList.toggle('fa-times');
    });

    // CLOSE MENU AFTER CLICKING LINK
    document.querySelectorAll('nav a').forEach(Link => {
     Link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        menuToggle.querySelector('i').classList.add('fa-bars');
        menuToggle.querySelector('i').classList.remove('fa-times');
     });
    });

    // Text typing effect
    const texts = ['Frontend Developer'];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;

    function type() {
        const currentText = texts[textIndex];
        const typingElement = document.querySelector('.typing-text');

        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingDelay = 50;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingDelay = 100;
        }

        setTimeout(type, typingDelay);
    }

    setTimeout(type, 1000);

    document.querySelector('a[href^=#]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, behavior: 'smooth'
                });
            }
        });
    });
});

const textarea = document.getElementById('message-box');
    const label = document.getElementById('message');
    
    textarea.addEventListener('blur', function () {
        if (textarea.value.trim() !=="") {
            label.style.bottom = '85px';
        } else {
            label.style.bottom = '40px';
        }
    });