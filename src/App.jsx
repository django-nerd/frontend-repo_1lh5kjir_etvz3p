import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />
      <Hero />
      <Sections />
      <Footer />
    </div>
  );
}

export default App;
