



import Link from "next/link"
import Image from "next/image"

import logoImage from "@/public/images/logo.png"
import classHeader from "./MainHeader.module.css"
import HeaderBackground from "./HeaderBackground"
import NavLink from "../Reusable/NavLink"

function MainHeader() {

    return (

        <>
            <HeaderBackground />
            <header className={classHeader.header}>
                <Link className={classHeader.logo} href="/"  >
                    <Image src={logoImage} alt="Logo image" priority />
                    next level food
                </Link>
                <nav className={classHeader.nav}>
                    <ul>
                        <NavLink herf={"/meals"}>Meals</NavLink>
                        <NavLink herf={"/community"}>Community</NavLink>
                    </ul>
                </nav>
            </header>
        </>

    )
}

export default MainHeader