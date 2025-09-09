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
        <nav className="fixed top-0 left-1/2 -translate-x-1/2 flex flex-row max-w-6xl w-[90vw] h-20 z-50">
            { /* logo/link to homepage */ }
            <a aria-label="Hyperlink to InTurn's Homepage" href="/" className="flex flex-row items-center justify-center mr-0 md:mr-5 order-2 md:order-1">
                <InturnLogo color="oklch(48.8% 0.243 264.376)" className="h-10 w-10" />
                <span className="text-3xl ml-1 font-bold bg-gradient-to-r from-blue-700 to-blue-700/90 bg-clip-text text-transparent">InTurn</span>
            </a>
            <BiMenu onClick={handleOnHamburgerClick} className="text-black text-5xl block md:hidden my-auto order-1 mr-[3vw]" />
            { /* other page links */ }
            <div className="nav-page-links hidden absolute md:left-1/2 top-20 md:top-0 md:-translate-x-1/2 w-[90vw] md:w-[clamp(150px,_55vw,_1500px)] md:flex flex-col md:flex-row md:items-center justify-center gap-y-10 md:gap-[7vw] mx-auto mr-5 mt-1 order-1 md:order-2 bg-blue-700 md:bg-transparent h-90 md:h-full p-5 md:p-0 rounded-lg">
                {
                    listOfLinks.map(( link ) => (
                        <a key={link.name} href={link.href} className="transition-none text-3xl font-semibold md:text-lg md:font-normal text-white md:text-black md:hover:text-blue-700 md:transition-all md:duration-200 md:hover:font-bold">{link.name}</a>
                    ))
                }
            </div>
            { /* start now */ }
            <div className="flex flex-row items-center ml-auto mr-3 order-3">
                <a href="/start" className="text-xl font-semibold bg-gradient-to-r from-blue-700 to-blue-700/90 p-2 rounded-lg text-white">Start Now</a>
            </div>
        </nav>
    )
}