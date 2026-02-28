import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Resources from './components/Resources.jsx';
import WhyChooseUs from './components/WhySelection.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import BackToTop from './components/BackToTop.jsx';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const titles = document.querySelectorAll('.section-title');
      const windowHeight = window.innerHeight;

      titles.forEach(title => {
        const rect = title.getBoundingClientRect();
        // Calculate how much of the element has scrolled past the bottom of the viewport
        // Progress goes from 0 (just appeared at bottom) to 100 (reached the top/middle)
        let progress = 0;

        if (rect.top < windowHeight && rect.bottom > 0) {
          // Element is visible
          // Delay the start by offsetting windowHeight
          const offset = 350; // pixels to wait before starting
          const effectiveHeight = windowHeight - offset;
          const visibilityRatio = (effectiveHeight - rect.top) / effectiveHeight;

          if (visibilityRatio > 0) {
            progress = Math.min(visibilityRatio * 100.0, 100);
          } else {
            progress = 0;
          }
        } else if (rect.bottom <= 0) {
          // Scrolled past top
          progress = 100;
        }

        title.style.setProperty('--underline-progress', `${progress}%`);
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Resources />
      <WhyChooseUs />
      <Contact />
      <BackToTop />
      <Footer />
    </div>
  );
}

export default App;
