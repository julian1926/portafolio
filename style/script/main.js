document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer para animaciones de scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });



  // Animación de contadores
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.textContent);
        const increment = target / 50;
        let current = 0;
        
        const updateCounter = () => {
          if (current < target) {
            current += increment;
            counter.textContent = Math.ceil(current) + '+';
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target + '+';
          }
        };
        
        updateCounter();
        counterObserver.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-number').forEach(counter => {
    counterObserver.observe(counter);
  });

  // Smooth scrolling para los enlaces de navegación
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

  // Efecto de hover en las tarjetas de habilidades
  document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Efecto de hover en las tarjetas de proyectos
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-12px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Animación de escritura para el título principal
  const heroTitle = document.querySelector('.hero-text h1');
  if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.borderRight = '2px solid #ffd700';
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      } else {
        heroTitle.style.borderRight = 'none';
      }
    };
    
    setTimeout(typeWriter, 1000);
  }

  // Efecto parallax suave en el hero
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });

  // Animación de las badges en el hero
  document.querySelectorAll('.badge').forEach((badge, index) => {
    badge.style.opacity = '0';
    badge.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      badge.style.transition = 'all 0.6s ease';
      badge.style.opacity = '1';
      badge.style.transform = 'translateY(0)';
    }, 2000 + (index * 200));
  });

  // Efecto de partículas en el fondo del hero
  createParticles();

  // Función para crear partículas
  function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.style.position = 'absolute';
      particle.style.width = '2px';
      particle.style.height = '2px';
      particle.style.background = 'rgba(255, 255, 255, 0.3)';
      particle.style.borderRadius = '50%';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animation = `float ${3 + Math.random() * 4}s ease-in-out infinite`;
      particle.style.animationDelay = Math.random() * 2 + 's';
      
      hero.appendChild(particle);
    }
  }

  // Efecto de carga de página
  window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
      document.body.style.opacity = '1';
    }, 100);
  });

  // Tooltip para las habilidades
  document.querySelectorAll('.skill-card').forEach(card => {
    const skillName = card.querySelector('h3').textContent;
    const skillLevel = card.querySelector('.skill-level').textContent;
    
    card.setAttribute('title', `${skillName} - Nivel: ${skillLevel}`);
  });

  // Efecto de resaltado en el navbar al hacer scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});
  