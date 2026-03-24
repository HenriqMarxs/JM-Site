import Header from "./components/header/Header";
import WhatsAppButton from "./components/whatsAppButton/WhatsAppButton";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Values from "./components/values/Values";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import './index.css';
import './App.css';

export function App () {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <WhatsAppButton />
      <main className="space-y-24">
        <Hero />
        <About />
        <Services />
        <Values />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
