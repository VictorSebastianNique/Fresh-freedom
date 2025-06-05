document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission handling
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const userType = document.getElementById('user-type').value;
            const email = document.getElementById('email').value;
            
            // Simple validation
            if (!name || !phone || !userType) {
                alert('Por favor complete los campos requeridos');
                return;
            }
            
            // In a real app, you would send this data to your server
            console.log('Form submitted:', {
                name,
                phone,
                userType,
                email
            });
            
            // Show success message
            alert(`¡Gracias ${name}! Nos pondremos en contacto contigo pronto.`);
            
            // Reset form
            signupForm.reset();
        });
    }

    // Mobile menu toggle (would need additional HTML)
    // This is a placeholder for future functionality
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'mobile-menu-button';
    mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('nav').prepend(mobileMenuButton);
    
    mobileMenuButton.addEventListener('click', function() {
        const navUl = document.querySelector('nav ul');
        navUl.classList.toggle('show');
    });
});