import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Resources from './components/Resources.jsx';
import WhyChooseUs from './components/WhySelection.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import BackToTop from './components/BackToTop.jsx';
import WhatsAppContact from './components/WhatsAppContact.jsx';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Underline progress scroll observer (existing)
    const handleScroll = () => {
      const titles = document.querySelectorAll('.section-title');
      const windowHeight = window.innerHeight;

      titles.forEach(title => {
        const rect = title.getBoundingClientRect();
        let progress = 0;

        if (rect.top < windowHeight && rect.bottom > 0) {
          const offset = 350;
          const effectiveHeight = windowHeight - offset;
          const visibilityRatio = (effectiveHeight - rect.top) / effectiveHeight;

          if (visibilityRatio > 0) {
            progress = Math.min(visibilityRatio * 100.0, 100);
          } else {
            progress = 0;
          }
        } else if (rect.bottom <= 0) {
          progress = 100;
        }

        title.style.setProperty('--underline-progress', `${progress}%`);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Lazy load reveal observer (new)
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      threshold: 0.1, // Trigger when 10% of element is visible
      rootMargin: "0px 0px -50px 0px"
    });

    const hiddenElements = document.querySelectorAll('.scroll-animate');
    hiddenElements.forEach((el) => fadeObserver.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      hiddenElements.forEach((el) => fadeObserver.unobserve(el));
    };
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <div className="scroll-animate"><About /></div>
      <div className="scroll-animate"><Services /></div>
      <div className="scroll-animate"><Resources /></div>
      <div className="scroll-animate"><WhyChooseUs /></div>
      <div className="scroll-animate"><Contact /></div>
      <WhatsAppContact />
      <BackToTop />
      <Footer />
    </div>
  );
}

export default App;
