// Enhanced Visual Effects and Interactions
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all effects
    initializeDateDisplay();
    initializeParticleSystem();
    initializeInteractiveEffects();
    initializeScrollAnimations();
    initializeTypingEffects();
    initializeMouseTracking();
});

// Set current date in footer with animation
function initializeDateDisplay() {
    const currentDateElement = document.getElementById('current-date');
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    currentDateElement.textContent = currentDate.toLocaleDateString('en-US', options);

    // Add fade-in animation
    currentDateElement.style.opacity = '0';
    currentDateElement.style.transform = 'translateY(20px)';
    setTimeout(() => {
        currentDateElement.style.transition = 'all 0.8s ease-out';
        currentDateElement.style.opacity = '1';
        currentDateElement.style.transform = 'translateY(0)';
    }, 1000);
}

// Advanced particle system for background effects
function initializeParticleSystem() {
    const canvas = document.createElement('canvas');
    canvas.id = 'particle-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-2';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.2,
            color: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`
        };
    }

    function initParticles() {
        particles = [];
        for (let i = 0; i < 50; i++) {
            particles.push(createParticle());
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle, index) => {
            particle.x += particle.vx;
            particle.y += particle.vy;

            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.globalAlpha = particle.opacity;
            ctx.fill();
        });

        animationId = requestAnimationFrame(animateParticles);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    initParticles();
    animateParticles();
}

// Enhanced celebration function with advanced effects
function createCelebration() {
    const celebrationContainer = document.createElement('div');
    celebrationContainer.style.position = 'fixed';
    celebrationContainer.style.top = '0';
    celebrationContainer.style.left = '0';
    celebrationContainer.style.width = '100%';
    celebrationContainer.style.height = '100%';
    celebrationContainer.style.pointerEvents = 'none';
    celebrationContainer.style.zIndex = '1000';
    celebrationContainer.style.overflow = 'hidden';
    document.body.appendChild(celebrationContainer);

    const emojis = ['🎉', '✨', '🎊', '🌟', '🎈', '🎆', '💫', '🌈', '🎇', '🎀'];
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7', '#a29bfe'];

    for (let i = 0; i < 50; i++) {
        const emoji = document.createElement('div');
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.position = 'absolute';
        emoji.style.fontSize = Math.random() * 2 + 1.5 + 'rem';
        emoji.style.left = Math.random() * 100 + '%';
        emoji.style.top = '-50px';
        emoji.style.color = colors[Math.floor(Math.random() * colors.length)];
        emoji.style.filter = 'drop-shadow(0 0 10px rgba(255,255,255,0.5))';
        emoji.style.animation = `celebrationFall ${Math.random() * 3 + 3}s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`;
        emoji.style.animationDelay = Math.random() * 2 + 's';

        // Add rotation and scale animation
        emoji.animate([
            { transform: 'rotate(0deg) scale(1)', opacity: 1 },
            { transform: 'rotate(180deg) scale(1.2)', opacity: 0.8, offset: 0.5 },
            { transform: 'rotate(360deg) scale(0.8)', opacity: 0 }
        ], {
            duration: (Math.random() * 2000 + 2000),
            delay: Math.random() * 1000,
            fill: 'forwards'
        });

        celebrationContainer.appendChild(emoji);
    }

    // Add confetti effect
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = Math.random() * 8 + 2 + 'px';
        confetti.style.height = Math.random() * 8 + 2 + 'px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.animation = `confettiFall ${Math.random() * 4 + 2}s linear forwards`;
        confetti.style.animationDelay = Math.random() * 3 + 's';

        celebrationContainer.appendChild(confetti);
    }

    setTimeout(() => {
        if (document.body.contains(celebrationContainer)) {
            document.body.removeChild(celebrationContainer);
        }
    }, 8000);
}

// Interactive effects for various elements
function initializeInteractiveEffects() {
    // Enhanced summary items
    document.querySelectorAll('.summary-item').forEach((item, index) => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.05) rotate(2deg)';
            this.style.boxShadow = '0 20px 40px rgba(52, 152, 219, 0.3)';

            // Add ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255,255,255,0.3)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.marginLeft = '-10px';
            ripple.style.marginTop = '-10px';
            this.appendChild(ripple);

            setTimeout(() => this.removeChild(ripple), 600);
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotate(0deg)';
            this.style.boxShadow = '';
        });
    });

    // Enhanced timeline items
    document.querySelectorAll('.timeline-item').forEach((item, index) => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(15px) scale(1.02)';
            const marker = this.querySelector('.timeline-marker');
            if (marker) {
                marker.style.transform = 'scale(1.2) rotate(5deg)';
                marker.style.boxShadow = '0 10px 30px rgba(52, 152, 219, 0.5)';
            }
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
            const marker = this.querySelector('.timeline-marker');
            if (marker) {
                marker.style.transform = 'scale(1) rotate(0deg)';
                marker.style.boxShadow = '';
            }
        });
    });

    // Enhanced decision buttons
    document.querySelectorAll('.decision-btn').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.05)';
            this.style.boxShadow = this.classList.contains('agree')
                ? '0 15px 35px rgba(39, 174, 96, 0.5)'
                : '0 15px 35px rgba(231, 76, 60, 0.5)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });

        button.addEventListener('click', function() {
            // Add click ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255,255,255,0.6)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.4s linear';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.marginLeft = '-10px';
            ripple.style.marginTop = '-10px';
            this.style.position = 'relative';
            this.appendChild(ripple);

            setTimeout(() => {
                if (this.contains(ripple)) {
                    this.removeChild(ripple);
                }
            }, 400);

            // Button press effect
            this.style.transform = 'translateY(-2px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(0) scale(1)';
            }, 150);
        });
    });
}

// Scroll-triggered animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.slide, .summary-item, .detail-card, .timeline-item').forEach(el => {
        observer.observe(el);
    });
}

// Typing effect for proposal text
function initializeTypingEffects() {
    const proposalText = document.querySelector('.proposal-text');
    if (proposalText) {
        const text = proposalText.textContent;
        proposalText.textContent = '';
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                proposalText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }

        setTimeout(typeWriter, 2000);
    }
}

// Mouse tracking effects
function initializeMouseTracking() {
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX / window.innerWidth;
        mouseY = e.clientY / window.innerHeight;

        // Update CSS custom properties for mouse tracking
        document.documentElement.style.setProperty('--mouse-x', mouseX);
        document.documentElement.style.setProperty('--mouse-y', mouseY);
    });

    // Add parallax effect to background
    document.addEventListener('mousemove', (e) => {
        const background = document.querySelector('body::before');
        if (background) {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            background.style.transform = `translate(${x}px, ${y}px)`;
        }
    });
}

// Decision button event handlers
document.getElementById('agree-btn').addEventListener('click', function() {
    const response = document.getElementById('response');
    response.textContent = '🎉 Thank you for accepting the Manila Barkada Gala proposal! We\'re excited to create unforgettable memories together. Your adventure begins soon!';
    response.style.background = 'linear-gradient(135deg, rgba(39, 174, 96, 0.2), rgba(46, 204, 113, 0.1))';
    response.style.border = '2px solid #27ae60';
    response.style.color = '#27ae60';
    response.style.backdropFilter = 'blur(10px)';
    response.classList.add('show');

    // Enhanced celebration
    createCelebration();

    // Add success animation to the button
    this.style.animation = 'successPulse 0.6s ease-out';
});

document.getElementById('disagree-btn').addEventListener('click', function() {
    const response = document.getElementById('response');
    response.textContent = '💭 We appreciate your feedback and understand you may want to discuss modifications. Please let us know how we can better tailor this experience for your barkada.';
    response.style.background = 'linear-gradient(135deg, rgba(231, 76, 60, 0.2), rgba(192, 57, 43, 0.1))';
    response.style.border = '2px solid #e74c3c';
    response.style.color = '#e74c3c';
    response.style.backdropFilter = 'blur(10px)';
    response.classList.add('show');
});

// Add enhanced CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes celebrationFall {
        0% {
            transform: translateY(-50px) rotate(0deg) scale(1);
            opacity: 1;
        }
        50% {
            transform: translateY(50vh) rotate(180deg) scale(1.2);
            opacity: 0.8;
        }
        100% {
            transform: translateY(100vh) rotate(360deg) scale(0.5);
            opacity: 0;
        }
    }

    @keyframes confettiFall {
        0% {
            transform: translateY(-10px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }

    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    @keyframes successPulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }

    .fade-in {
        animation: fadeInUp 0.8s ease-out forwards;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Mouse tracking effects */
    body::before {
        transition: transform 0.1s ease-out;
    }

    /* Enhanced glassmorphism effects */
    .presentation-container {
        transition: all 0.3s ease;
    }

    .presentation-container:hover {
        transform: scale(1.01);
    }

    /* Dynamic shadow effects */
    .summary-item, .timeline-content, .detail-card {
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    /* Loading animation for initial load */
    .presentation-container {
        animation: pageLoad 1s ease-out;
    }

    @keyframes pageLoad {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Smooth scrolling enhancement
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

// Add loading state for buttons
document.querySelectorAll('.decision-btn').forEach(button => {
    button.addEventListener('click', function() {
        const originalText = this.innerHTML;
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        this.disabled = true;

        setTimeout(() => {
            this.innerHTML = originalText;
            this.disabled = false;
        }, 2000);
    });
});