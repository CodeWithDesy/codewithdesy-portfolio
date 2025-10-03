 // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all fade-in elements
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('.header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(250, 250, 250, 0.98)';
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.background = 'rgba(250, 250, 250, 0.95)';
                header.style.boxShadow = 'none';
            }
        });

        // Project card click handlers (you can modify these to link to your actual projects)
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', function() {
                // For now, just show an alert. Replace with actual project links
                const title = this.querySelector('.project-title').textContent;
                alert(`Opening ${title} - Open Github!`);
                 Example: window.open('https://github.com/CodeWithDesy/Resume-Analyzer', '_blank');
            });
        });

        // Contact Form Handler
        const contactForm = document.getElementById('contactForm');
        const successMessage = document.getElementById('successMessage');

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Show success message
            successMessage.classList.add('show');

            // Log form data (you'll replace this with your backend API call)
            console.log('Form submitted:', formData);

            // TODO: Replace this with your actual backend API call
            // Example:
            // fetch('YOUR_BACKEND_API_URL/contact', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(formData)
            // })
            // .then(response => response.json())
            // .then(data => {
            //     successMessage.classList.add('show');
            //     contactForm.reset();
            // })
            // .catch(error => {
            //     console.error('Error:', error);
            //     alert('There was an error sending your message. Please try again.');
            // });

            // Reset form after submission
            setTimeout(() => {
                contactForm.reset();
                successMessage.classList.remove('show');
            }, 5000);
        });

        // Add floating animation to form on scroll
        const contactFormElement = document.querySelector('.contact-form');
        window.addEventListener('scroll', function() {
            if (contactFormElement) {
                const formPosition = contactFormElement.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (formPosition < screenPosition) {
                    contactFormElement.style.animation = 'slideUp 0.8s ease forwards';
                }
            }
        });

        // Typing effect for hero subtitle (optional enhancement)
        function typeWriter(element, text, speed = 100) {
            let i = 0;
            element.textContent = '';
            function type() {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            type();
        }

        // Initialize typing effect after page load
        window.addEventListener('load', function() {
            setTimeout(() => {
                const subtitle = document.querySelector('.hero-subtitle');
                typeWriter(subtitle, 'HI, I AM', 150);
            }, 1000);
        });