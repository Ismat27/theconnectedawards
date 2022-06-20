import { Outlet } from "react-router-dom"

import Navs from "./Navs"
import Footer from "./Footer"

const Base = () => {
    return (
        <>
            <Navs/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Base