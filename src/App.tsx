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
import Stats from "./components/contUp/Stats";

export function App () {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <WhatsAppButton />
      <main className="space-y-24">
        <Hero />
        <Stats />
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
