import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import Members from "../pages/Members/Members";
import Contact from "../pages/Contact/Contact";

export default function AppRouter() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/members" element={<Members />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
        </Routes>
    )
}