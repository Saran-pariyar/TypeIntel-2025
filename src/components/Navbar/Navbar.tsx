// import Image from "next/image";
import { NavLinkInterface } from "@/types/navbarTypes";
import Link from "next/link";

const navLinksItems: NavLinkInterface[] = [
    {
        name: 'Home',
        path: '/',
        isActive: (pathname: string) => pathname === '/',
    },
    {
        name: 'Tests',
        path: '/Tests',
        isActive: (pathname: string) => pathname === '/tests',
    },
    {
        name: 'Categories',
        path: '/Categories',
        // subMenu: [{
        //     name: 'Category 1',
        //     path: '/categories/category1',
        //     isActive: (pathname: string) => pathname === '/categories/category1',
        // }],
        isActive: (pathname: string) => pathname === '/categories',
    },
    {
        name: 'About',
        path: '/About',
        isActive: (pathname: string) => pathname === '/about',
    },
    {
        name: 'Sign In',
        path: '/Sign-in',
        isActive: (pathname: string) => pathname === '/sign-in',
    },
]

export default function Navbar() {

    return (
        <nav>
            <div className="nav-logo-container">
                {/* <Image
                    src="/logo.png"
                    alt="Logo"
                    width={100}
                    height={50}
                /> */}
                <h3>TypeIntel</h3>
            </div>

            <div className="nav-list-container">

                this is a nav.

                <ul className="nav-list">

                    {
                        navLinksItems.map((item, index) => {
                            return (
                                <li key={item.path}>
                                    <Link href={item.path} key={index} > {item.name} </Link>
                                    {
                                        item.subMenu && item.subMenu.length > 0 && (
                                            <ul className="sub-menu">
                                                {
                                                    item.subMenu.map((item) => {
                                                        return <Link href={item.path} key={item.path}>{item.name}</Link>
                                                    })
                                                }

                                            </ul>
                                        )
                                    }
                                </li>
                            )
                        })



                    }

                </ul>
            </div>
        </nav>
    )
}