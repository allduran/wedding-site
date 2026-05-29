import './index.css';
import { LangProvider } from './LangProvider';
import { useScrollReveal } from './hooks/useScrollReveal';
import Nav from './components/Nav';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import Events from './components/Events';
import RSVP from './components/RSVP';
import Footer from './components/Footer';

function Inner() {
  useScrollReveal();
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <OurStory />
        <Events />
        <RSVP />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <LangProvider>
      <Inner />
    </LangProvider>
  );
}