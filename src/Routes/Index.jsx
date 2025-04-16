import { Route, BrowserRouter, Routes, Outlet } from "react-router";
import Home from "../Pages/Landing/Home";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

export const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />{" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
