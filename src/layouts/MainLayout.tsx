import { Outlet } from "react-router-dom";
import Header from "../components/navigation/Header";
import Footer from "../components/navigation/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col font-poppins">
      <Header />

      <main className="flex-1 flex flex-col min-h-0">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}