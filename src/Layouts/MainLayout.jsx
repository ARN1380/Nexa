import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/Header/Header";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />  
    </>
  )
}