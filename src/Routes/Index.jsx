import { Route, BrowserRouter, Routes } from "react-router";
import Home from "../Pages/Landing/Home";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../Pages/About/About";
import Collection from "../Pages/Collection/Collection";
import Contact from "../Pages/Contact/Contact";
import Cart from "../Pages/Cart/Cart";
export const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Collection" element={<Collection />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
