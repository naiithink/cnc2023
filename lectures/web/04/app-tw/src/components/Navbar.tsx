'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
    const pathName = usePathname();

    const [navbarScroll, setNavbarScroll] = useState<boolean>(false);

    const changeNavColor = () => {
        if (window.scrollY >= 65) {
            setNavbarScroll(true);
        } else {
            setNavbarScroll(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNavColor);
    })

    const NavItem = ({ page, href }: { page: string, href: string }) => {
        return (
            <Link
                href={href}
                className={`${pathName === href ? 'text-yellow-500' : 'text-white'} text-lg font-semibold mr-3 px-3 hover:text-yellow-500 transition-colors duration-300`}
            >
                {page}
            </Link>
        );
    };

    return (
        <nav className={`top-0 fixed flex justify-center w-full py-3.5 ${navbarScroll && 'bg-stone-900'} duration-300`}>
            <div className="container flex justify-end">
                <NavItem
                    page="Home"
                    href="/"
                />
                <NavItem
                    page="Portfolio"
                    href="/portfolio"
                />
                <NavItem
                    page="Contact"
                    href="/contact"
                />
            </div>
        </nav>
    );
}
