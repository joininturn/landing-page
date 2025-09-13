import React from "react";
import InturnLogo from "@/assets/InturnLogo";

export default function Footer() {
    return (
        <footer className="w-full mt-24 border-t border-gray-100">
            <div className="w-[90%] max-w-[1200px] mx-auto py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                    <InturnLogo color="oklch(48.8% 0.243 264.376)" className="h-5 w-5" />
                    <span className="font-semibold text-gray-800">InTurn</span>
                </div>
                <div className="text-sm">© {new Date().getFullYear()} InTurn. All rights reserved.</div>
                <div className="flex gap-4 text-sm">
                    <a href="#about" className="hover:text-blue-600">About</a>
                    <a href="/contact" className="hover:text-blue-600">Contact</a>
                    <a href="/mission" className="hover:text-blue-600">Our Mission</a>
                    <a href="/team" className="hover:text-blue-600">Team</a>
                </div>
            </div>
        </footer>
    );
}


