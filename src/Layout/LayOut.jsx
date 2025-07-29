import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { ScrollToTopButton } from "../ui/ToTop"

export const LayOut = () => {
    return (

        <>
        <Header/>
        <div className="main">
        <Outlet/>
        </div>
       
        <Footer/>
        <ScrollToTopButton/>
        </>
    )
}