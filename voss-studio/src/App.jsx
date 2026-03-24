import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

function App() {
  return (
    <div className="bg-black mix-blend-normal">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Portfolio />
        <Services />
        <About />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;
