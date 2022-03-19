import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import ReactCarousel from "./Components/ReactCaousel/ReactCarousel";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="">
      <Navigation></Navigation>
      <Header></Header>
      <ReactCarousel></ReactCarousel>
    </div>
  );
}

export default App;
