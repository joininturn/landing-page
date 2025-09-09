import InturnLogo from "../assets/InturnLogo";
import { BiMenu } from "react-icons/bi";
import gsap from "gsap";
import { useState } from "react";
import { useGSAP } from "@gsap/react";

export default function Navigation() {
    const [navOpen, setNavOpen] = useState<boolean | null>(null);
    const [currentlyAnimating, setCurrentlyAnimating] = useState(false);

    const listOfLinks = [
        { name: "About", href: "#about" },
        { name: "Contact", href: "/contact" },
        { name: "Our Mission", href: "/mission"},
        { name: "Team", href: "/team"}
        // we can always add more... (roro is a bum btw)
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
                { opacity: 1, height: "22.5rem", duration: 1, ease: "power2.out" }
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
                { opacity: 1, height: "22.5rem" },
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
        <nav className="fixed top-0 left-0 flex flex-row justify-between items-center w-full h-20 px-5 z-50">
            { /* logo/link to homepage */ }
            <a aria-label="Hyperlink to InTurn's Homepage" href="/" className="flex flex-row items-center">
                <InturnLogo color="oklch(48.8% 0.243 264.376)" className="h-10 w-10" />
                <span className="text-3xl ml-1 font-bold bg-gradient-to-r from-blue-700 to-blue-700/90 bg-clip-text text-transparent">InTurn</span>
            </a>

            { /* other page links and start now button */ }
            <div className="flex flex-row items-center gap-5">
                <div className="nav-page-links hidden md:flex flex-row items-center gap-5">
                    {
                        listOfLinks.map((link) => (
                            <a key={link.name} href={link.href} className="transition-transform transform text-lg font-normal text-black hover:text-blue-700 duration-300 hover:scale-110">{link.name}</a>
                        ))
                    }
                </div>
                <a href="/start" className="text-lg font-semibold bg-gradient-to-r from-blue-700 to-blue-700/90 px-4 py-2 rounded-lg text-white">Start Now</a>
                <BiMenu onClick={handleOnHamburgerClick} className="text-black text-3xl block md:hidden" />
            </div>
        </nav>
    )
}