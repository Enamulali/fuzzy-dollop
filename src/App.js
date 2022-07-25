import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import NavBar from "./Components/NavBar";
import PictureGrid from "./Components/PictureGrid";
import Footer from "./Components/Footer";
import BurgerNav from "./Components/BurgerNav";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <NavBar />
        {width <= 600 ? <BurgerNav /> : null}
        <Main />
        <PictureGrid />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
