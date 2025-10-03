'use client';

import InturnLogo from "../assets/InturnLogo";
import gsap from "gsap";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import { Menu, X } from "lucide-react";

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
            gsap.set(".mobile-nav-overlay", { clearProps: "all" });
            setNavOpen(true);
            return;
        }
        if(currentlyAnimating) return;
        const tl = gsap.timeline();

        tl.eventCallback("onStart", () => setCurrentlyAnimating(true));
        tl.eventCallback("onComplete", () => setCurrentlyAnimating(false));

        if(!navOpen) {
            // Opening animation
            tl.set(".mobile-nav-overlay", { display: "block" });
            tl.set(".nav-page-links", { display: "flex" });
            
            // Set initial state for close button
            tl.set(".mobile-close-btn", { opacity: 0, scale: 0, rotation: -90 });
            
            // Animate overlay
            tl.fromTo(
                ".mobile-nav-overlay",
                { opacity: 0 },
                { opacity: 1, duration: 0.3, ease: "power2.out" }
            );
            
            // Animate menu container
            tl.fromTo(
                ".nav-page-links",
                { opacity: 0, y: -20, scale: 0.95 },
                { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "back.out(1.7)" },
                "-=0.1"
            );
            
            // Animate close button
            tl.to(
                ".mobile-close-btn",
                { opacity: 1, scale: 1, rotation: 0, duration: 0.4, ease: "back.out(1.7)" },
                "-=0.3"
            );
            
            // Animate menu items
            tl.fromTo(
                ".nav-link-item",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.4, ease: "power2.out", stagger: 0.08 },
                "-=0.2"
            );
            
            // Animate hamburger to X
            tl.to(".hamburger-line-1", { rotation: 45, y: 6, duration: 0.3, ease: "power2.inOut" }, 0);
            tl.to(".hamburger-line-2", { opacity: 0, duration: 0.2, ease: "power2.inOut" }, 0);
            tl.to(".hamburger-line-3", { rotation: -45, y: -6, duration: 0.3, ease: "power2.inOut" }, 0);
        } else {
            // Closing animation
            tl.to(".hamburger-line-1", { rotation: 0, y: 0, duration: 0.3, ease: "power2.inOut" }, 0);
            tl.to(".hamburger-line-2", { opacity: 1, duration: 0.2, ease: "power2.inOut" }, 0.1);
            tl.to(".hamburger-line-3", { rotation: 0, y: 0, duration: 0.3, ease: "power2.inOut" }, 0);
            
            tl.fromTo(
                ".mobile-close-btn",
                { opacity: 1, scale: 1, rotation: 0 },
                { opacity: 0, scale: 0.8, rotation: 90, duration: 0.2, ease: "power2.in" },
                0
            );
            
            tl.fromTo(
                ".nav-link-item",
                { opacity: 1, y: 0 },
                { opacity: 0, y: -20, duration: 0.2, ease: "power2.in", stagger: 0.05 },
                0.1
            );
            
            tl.fromTo(
                ".nav-page-links",
                { opacity: 1, y: 0, scale: 1 },
                { opacity: 0, y: -20, scale: 0.95, duration: 0.3, ease: "power2.in" },
                "-=0.1"
            );
            
            tl.fromTo(
                ".mobile-nav-overlay",
                { opacity: 1 },
                { opacity: 0, duration: 0.2, ease: "power2.in" },
                "-=0.1"
            );
            
            tl.set(".nav-page-links", { display: "none" });
            tl.set(".mobile-nav-overlay", { display: "none" });
        }
        return () => tl.kill();
    }, [navOpen]);

    const handleOnHamburgerClick = () => {
        console.log('Hamburger clicked, navOpen:', navOpen, 'currentlyAnimating:', currentlyAnimating);
        if(currentlyAnimating) return;
        if(navOpen === null) {
            setNavOpen(false);
            return;
        }
        setNavOpen(navOpen => !navOpen);
    }

    return (
        <>
            <nav className="sticky top-0 left-0 mx-auto p-3 flex flex-row w-screen max-w-[1200px] h-16 z-50 bg-white/30 backdrop-blur-md border-b border-white/20 shadow-sm">
                { /* logo/link to homepage */ }
                <a aria-label="Hyperlink to InTurn's Homepage" href="/" className="flex flex-row items-center justify-center ml-0 md:ml-6 order-2 md:order-1">
                    <InturnLogo color="oklch(48.8% 0.243 264.376)" className="h-6 w-6" />
                    <span className="text-xl ml-1 font-bold bg-gradient-to-r from-blue-700 to-blue-700/90 bg-clip-text text-transparent">InTurn</span>
                </a>
                
                { /* Modern Hamburger Menu */ }
                <button 
                    onClick={handleOnHamburgerClick} 
                    className="relative w-8 h-8 block md:hidden order-1 mr-4 my-auto focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2 focus:ring-offset-white/50 rounded-lg transition-all duration-200 hover:bg-blue-50/50"
                    aria-label="Toggle navigation menu"
                >
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="hamburger-line-1 w-5 h-0.5 bg-gray-700 rounded-full transform transition-all duration-300 origin-center mb-1"></div>
                        <div className="hamburger-line-2 w-5 h-0.5 bg-gray-700 rounded-full transform transition-all duration-300 origin-center mb-1"></div>
                        <div className="hamburger-line-3 w-5 h-0.5 bg-gray-700 rounded-full transform transition-all duration-300 origin-center"></div>
                    </div>
                </button>
                
                { /* Desktop Navigation */ }
                <div className="hidden md:flex flex-row items-center justify-center gap-x-6 mx-auto mr-3 order-1 md:order-2">
                    {
                        listOfLinks.map(( link ) => (
                            <a key={link.name} href={link.href} className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-all duration-200 hover:scale-105">{link.name}</a>
                        ))
                    }
                </div>
                
                { /* start now */ }
                <div className="relative flex flex-row items-center ml-auto mr-6 order-3">
                    <a href="/students/start" className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-blue-600/90 px-3 py-1.5 rounded-md text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 hover:scale-105">Start Now</a>
                    <div className="w-3 h-3 -top-1 -right-1 rounded-full absolute bg-blue-500 animate-ping" />
                    <div className="w-3 h-3 -top-1 -right-1 rounded-full absolute bg-blue-500" />
                </div>
            </nav>
            
            { /* Mobile Navigation Overlay */ }
            <div className="mobile-nav-overlay fixed inset-0 bg-black/60 backdrop-blur-sm z-40 hidden md:hidden" onClick={handleOnHamburgerClick}></div>
            
            { /* Mobile Navigation Menu */ }
            <div className="nav-page-links fixed top-0 right-0 w-80 max-w-[90vw] h-full bg-gradient-to-br from-white via-white to-blue-50/30 backdrop-blur-xl border-l border-white/20 shadow-2xl z-50 hidden md:hidden flex-col justify-start pt-20 px-6">
                { /* Close Button */ }
                <button 
                    onClick={handleOnHamburgerClick}
                    className="mobile-close-btn group absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100/50 hover:bg-gray-200/50 hover:scale-110 active:scale-95 transition-all duration-200 z-10 cursor-pointer shadow-sm hover:shadow-md opacity-0"
                    aria-label="Close navigation menu"
                    style={{ transform: 'scale(0) rotate(-90deg)' }}
                >
                    <X className="w-5 h-5 text-gray-600 transition-transform duration-200 group-hover:rotate-90" />
                </button>

                { /* Navigation Links */ }
                <div className="flex flex-col space-y-2 mt-4">
                    {
                        listOfLinks.map(( link, index ) => (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                className="nav-link-item group relative block px-5 py-4 text-lg font-medium text-gray-800 hover:text-blue-600 transition-all duration-300 rounded-2xl hover:bg-white/60 border border-transparent hover:border-blue-100/50 hover:shadow-sm active:scale-95"
                                onClick={() => setNavOpen(false)}
                            >
                                <div className="flex items-center justify-between">
                                    <span className="relative z-10">{link.name}</span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </a>
                        ))
                    }
                </div>
                
                { /* Mobile CTA */ }
                <div className="mt-10 px-1">
                    <a 
                        href="/students/start" 
                        className="block text-center text-base font-semibold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600/80 px-6 py-4 rounded-2xl text-white hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 active:scale-95 border border-blue-600/20 relative overflow-hidden"
                        onClick={() => setNavOpen(false)}
                    >
                        <span className="relative z-10">Get Started Today</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    </a>
                </div>
                
                { /* Brand Footer */ }
                <div className="mt-auto mb-8 text-center">
                    <div className="flex items-center justify-center space-x-2 text-gray-500">
                        <InturnLogo color="oklch(48.8% 0.243 264.376)" className="h-4 w-4" />
                        <span className="text-sm font-medium">InTurn</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">Your future starts here</p>
                </div>
                
                { /* Enhanced Decorative Elements */ }
                <div className="absolute top-20 right-12 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl animate-pulse -z-10"></div>
                <div className="absolute bottom-32 left-6 w-20 h-20 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-lg animate-pulse delay-1000 -z-10"></div>
                <div className="absolute top-1/2 left-2 w-3 h-3 bg-blue-400/20 rounded-full blur-sm -z-10"></div>
                <div className="absolute top-1/3 right-4 w-2 h-2 bg-purple-400/30 rounded-full blur-sm -z-10"></div>
            </div>
        </>
    )
}