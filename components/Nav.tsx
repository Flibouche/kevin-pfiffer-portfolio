"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: 'À propos',
        path: '/'
    },
    {
        name: 'resumé',
        path: '/resume'
    },
    {
        name: 'projets',
        path: '/work'
    },
];

const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return (
                    <Link
                        href={link.path}
                        key={index}
                        className={`${link.path === pathname && "text-accent border-b-2 border-accent"
                            } capitalize font-medium hover:text-accent transition-all relative after:bg-accent after:absolute after:h-0.5 after:w-0 after:top-8 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer`}>
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    )
}

export default Nav