import logo from './logo.svg';
import './App.css';
import TopNav from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import PropertySearch from './components/PropertySearch';
import ServiceSection from './components/ServiceSection';
import CarouselSection from './components/CarouselSection';
import Property from './components/Property';
import Blog from './components/Blog';
import Subscribe from './components/Subscribe';
import TestimonialCarousel from './components/TestimonialCarousel';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
       <TopNav />
       <HeroSection />
       <PropertySearch />
       <About />
       <ServiceSection />
       <Property />
      <CarouselSection />
      <TestimonialCarousel />
      <Blog />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
