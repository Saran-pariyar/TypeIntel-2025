import Image from "next/image";
import { NavLinkInterface } from "@/types/navbarTypes";

const navLinks: NavLinkInterface[] = [
    {
        name: 'Home',
        path: '/',
        isActive: (pathname: string) => pathname === '/',
    },
    {
        name: 'Test',
        path: '/',
        isActive: (pathname: string) => pathname === '/test',
    },
    {
        name: 'Categories',
        path: '/',
        isActive: (pathname: string) => pathname === '/categories',
    },
    {
        name: 'About',
        path: '/',
        isActive: (pathname: string) => pathname === '/about',
    },
    {
        name: 'Sign In',
        path: '/',
        isActive: (pathname: string) => pathname === '/sign-in',
    },
]

export default function  Navbar() {

    return (
        <>

        this is nav
        </>
    )
}