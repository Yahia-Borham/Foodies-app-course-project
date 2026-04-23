





"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import classes from "./NavLink.module.css"

function NavLink({ herf, children }) {

    const path = usePathname()

    return (


        <li>
            <Link
                href={herf}
                className={path.startsWith(herf) ? classes.active : undefined}>
                {children}
            </Link>
        </li>


    )
}

export default NavLink