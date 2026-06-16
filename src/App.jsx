import Header from './components/Header';
import Hero from './components/Hero';
import SectionDivider from './components/SectionDivider';
import Services from './components/Services';
import About from './components/About';
import AppointmentForm from './components/AppointmentForm';
import Footer from './components/Footer';
import StickyMobileCTA from './components/StickyMobileCTA';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <About />
        <SectionDivider />
        <AppointmentForm />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
