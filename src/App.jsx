import Header from "./components/Header";
import About from "./components/about/About";
import Contacto from "./components/contacto/Contacto";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Portafolio from "./components/porfolio/Portafolio";
import Proyectos from "./components/proyectos/Proyectos";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Portafolio />
      <Proyectos />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;
