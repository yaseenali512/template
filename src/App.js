// import logo from "./logo.svg";
import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroComponent";
import Project from "./components/Project";
import { BuyerReviews, SellerReviews } from "./components/Reviews";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Project />
      <BuyerReviews />
      <SellerReviews />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
