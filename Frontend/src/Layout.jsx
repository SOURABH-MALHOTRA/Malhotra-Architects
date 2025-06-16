import React from "react";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import WhatsAppButton from "./Components/WhatsApp.jsx";

function Layout() {
  return (
    <>
      <ToastContainer position="top-center" />
      <WhatsAppButton />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
