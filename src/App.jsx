import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Resources from './components/Resources.jsx';
import WhyChooseUs from './components/WhySelection.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Resources />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
