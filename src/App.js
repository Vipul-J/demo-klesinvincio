import Navbar from "./components/navbar";
import Carousel from "./components/carousel";
import Kpis from "./components/kpis";
import About from "./components/about";
import Teaser from "./components/teaser";
import Events from "./components/events";
import Footer from "./components/footer";
import Form from "./components/form";

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <About />
      <Kpis />
      <Teaser />
      <Events />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
