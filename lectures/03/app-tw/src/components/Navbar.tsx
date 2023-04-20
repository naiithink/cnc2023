'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';


interface NavbarItemInterface {
    target: string;
    routeName: string;
}

export default function Navbar() {
    const pathName = usePathname();
    console.log(pathName);

    const navbarItems: NavbarItemInterface[] = [
        {
            target: '/',
            routeName: 'Home'
        },
        {
            target: '/about',
            routeName: 'About'
        },
        {
            target: '/about/education',
            routeName: 'Education'
        },
    ];

    const NavItem = ({ target, routeName } : { target: string, routeName: string }) => {
        return (
            <Link
                href={target}
                className={
                    `${ target === pathName ? 'bg-orange-700' : 'bg-orange-500' } px-2 py-1 rounded-md text-white hover:bg-orange-700 m-1`
                }
            >
                {routeName}
            </Link>
        )
    };

    return (
        <nav
            className="bg-orange-300 px-3 py-2 mb-3"
        >
            {
                navbarItems.map((navItem: NavbarItemInterface) => {
                    return (
                        <NavItem
                            key={navItem.routeName}
                            target={navItem.target}
                            routeName={navItem.routeName}
                        />
                    )
                })
            }
        </nav>
    )
}
