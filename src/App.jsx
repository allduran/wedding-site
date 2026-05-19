import './index.css';
import { useScrollReveal } from './hooks/useScrollReveal';
import Nav from './components/Nav';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import Events from './components/Events';
import Countdown from './components/Countdown';
import RSVP from './components/RSVP';
import Footer from './components/Footer';

export default function App() {
  useScrollReveal();

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <OurStory />
        <Events />
        <Countdown />
        <RSVP />
      </main>
      <Footer />
    </>
  );
}
