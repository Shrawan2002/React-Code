import Footer from "./components/footer/Footer";
import Header from "./components/Header/Header"
import { Outlet } from "react-router-dom";
export default function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}