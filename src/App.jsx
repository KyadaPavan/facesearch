import "./App.css";
import About from "./section/About";
import Features from "./section/Features";
import Footer from "./section/Footer";
import Header from "./section/Header";
import Hero from "./section/Hero";
import Pricing from "./section/Pricing";
import Testimonials from "./section/Testimonials";

function App() {
  return (
    <>
      <main className="overflow-hidden">
        <Header />
        <Hero />
        <About />
        <Features />

        <Pricing />

        <Testimonials />
        <Footer />
      </main>
    </>
  );
}

export default App;
