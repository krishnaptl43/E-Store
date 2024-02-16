import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import NavBar from "./NavBar";
import BottomBar from "./BottomBar";
import Footer from "./Footer"

export default function Layout() {
    return (
        <>
            <TopBar />
            <NavBar />
            <BottomBar />
            <Outlet/>
            <Footer/>
        </>
    )
}
