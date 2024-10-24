"use client";

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';
import { Button } from './ui/button';

const links = [
    {
        name: 'À propos',
        path: '/'
    },
    {
        name: 'résumé',
        path: '/resume'
    },
    {
        name: 'projets',
        path: '/projet'
    },
];

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className='flex justify-center items-center'>
                <CiMenuFries className='text-[32px] text-accent' />
            </SheetTrigger>
            <SheetContent className='flex flex-col'>
                {/* Logo */}
                <div className='mt-32 mb-40 text-center text-2xl'>
                    <Link href='/'>
                        <h1 className='text-4xl font-semibold'>
                            Kevin <span className='text-accent'>.</span>
                        </h1>
                    </Link>
                </div>
                {/* Nav */}
                <nav className='flex flex-col justify-center items-center gap-8'>
                    {links.map((link, index) => {
                        return (
                            <Link
                                href={link.path}
                                key={index}
                                className={`${link.path === pathname && "text-accent border-b-2 border-accent"
                            } capitalize text-xl font-medium hover:text-accent transition-all relative after:bg-accent after:absolute after:h-0.5 after:w-0 after:top-7 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                    <div className="items-center gap-8">
                        <Link href="/contact">
                            <Button className='text-xl'>Contactez-moi</Button>
                        </Link>
                    </div>
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav