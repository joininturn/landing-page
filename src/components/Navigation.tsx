'use client';

import InturnLogo from "../assets/InturnLogo";
import gsap from "gsap";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import { Menu } from "lucide-react";

export default function Navigation() {
    const [navOpen, setNavOpen] = useState<boolean | null>(null);
    const [currentlyAnimating, setCurrentlyAnimating] = useState(false);

    const listOfLinks = [
        { name: "About", href: "#about" },
        { name: "Contact", href: "/contact" },
        { name: "Our Mission", href: "/mission"},
        { name: "Team", href: "/team"}
        // we can always add more...
    ]

    useGSAP(() => {
        if(navOpen === null) return;
        if(window.innerWidth >= 768) {
            gsap.set(".nav-page-links", { clearProps: "all" });
            setNavOpen(true);
            return;
        }
        if(currentlyAnimating) return;
        const tl = gsap.timeline();

        tl.eventCallback("onStart", () => setCurrentlyAnimating(true));
        tl.eventCallback("onComplete", () => setCurrentlyAnimating(false));

        if(!navOpen) {
            tl.set(".nav-page-links", { display: "flex" });
            tl.fromTo(
                ".nav-page-links",
                { opacity: 0, height: "0rem" },
                { opacity: 1, height: "20rem", duration: 1, ease: "power2.out" }
            );
            tl.fromTo(
                ".nav-page-links a",
                { x: -100, opacity: 0 },
                { x: 0, opacity: 1, duration: 1, ease: "power2.out", stagger: 0.1 },
                "-=0.75"
            );
        } else {
            tl.fromTo(
                ".nav-page-links a",
                { x: 0, opacity: 1 },
                { x: -100, opacity: 0, duration: 1, ease: "power2.out", stagger: 0.1 },
            );
            tl.fromTo(
                ".nav-page-links",
                { opacity: 1, height: "20rem" },
                { opacity: 0, height: "0rem", duration: 1, ease: "power2.out" },
                "-=1.25"
            );
            tl.set(".nav-page-links", { display: "none", delay: 0.5 });
        }
        return () => tl.kill();
    }, [navOpen]);

    const handleOnHamburgerClick = () => {
        if(currentlyAnimating) return;
        if(navOpen === null) {
            setNavOpen(false);
            return;
        }
        setNavOpen(navOpen => !navOpen);
    }

    return (
        <nav className="sticky top-0 left-0 mx-auto p-3 flex flex-row w-screen max-w-[1200px] h-16 z-50 bg-white/20 backdrop-blur-sm border-b border-gray-100">
            { /* logo/link to homepage */ }
            <a aria-label="Hyperlink to InTurn's Homepage" href="/" className="flex flex-row items-center justify-center ml-0 md:ml-6 order-2 md:order-1">
                <InturnLogo color="oklch(48.8% 0.243 264.376)" className="h-6 w-6" />
                <span className="text-xl ml-1 font-bold bg-gradient-to-r from-blue-700 to-blue-700/90 bg-clip-text text-transparent">InTurn</span>
            </a>
            <Menu onClick={handleOnHamburgerClick} className="text-black w-6 h-6 block md:hidden order-1 mr-4 my-auto" />
            { /* other page links */ }
            <div className="nav-page-links hidden absolute top-16 md:top-0 md:right-32 w-[90%] md:w-fit md:flex flex-col md:flex-row md:items-center justify-center gap-y-6 gap-x-6 mx-auto mr-3 order-1 md:order-2 bg-blue-600 md:bg-transparent h-80 md:h-full p-4 md:p-0 rounded-lg">
                {
                    listOfLinks.map(( link ) => (
                        <a key={link.name} href={link.href} className="transition-none text-2xl font-semibold md:text-sm md:font-medium text-white md:text-gray-700 md:hover:text-blue-600 md:transition-all md:duration-200 md:hover:scale-105 ">{link.name}</a>
                    ))
                }
            </div>
            { /* start now */ }
            <div className="relative flex flex-row items-center ml-auto mr-6 order-3">
                <a href="/students/start" className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-blue-600/90 px-3 py-1.5 rounded-md text-white hover:shadow-md transition-all duration-200">Start Now</a>
                <div className="w-3 h-3 -top-1 -right-1 rounded-full absolute bg-blue-500 animate-ping" />
                <div className="w-3 h-3 -top-1 -right-1 rounded-full absolute bg-blue-500" />
            </div>
        </nav>
    )
}