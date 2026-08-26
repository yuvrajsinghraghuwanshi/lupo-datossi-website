import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Transactions from './components/Transactions';
import Expertise from './components/Expertise';
import Philosophy from './components/Philosophy';
import Insights from './components/Insights';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';
import Achievements from './components/Achievements';

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-offwhite">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Transactions />
        <Expertise />
        <Philosophy />
        {/* <Insights /> */}
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
