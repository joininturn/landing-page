'use client';

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText)

export default function CTA() {

    return (
        <section className="cta-section w-full px-4 sm:px-6 max-w-[1200px] mx-auto mt-50">
            <div className="cta-content mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center px-2">Ready to empower your career?</h2>
                <div className="flex flex-col lg:flex-row gap-4 text-white">
                    <div className="bg-blue-500 w-full lg:w-[49%] h-auto mt-10 rounded-xl">
                        <div className="p-5">
                            <h1 className="text-2xl sm:text-3xl font-semibold">For Students</h1>
                            <p className="text-blue-200 mt-3">Help out local businesses and gain real-world experience</p>
                            <a href="/start/students">
                                <InteractiveHoverButton className="text-black mt-5">
                                    Join Now
                                </InteractiveHoverButton>
                            </a>
                        </div>
                    </div>
                    <div className="bg-blue-500 w-full lg:w-[49%] h-auto mt-10 rounded-xl lg:ml-auto">
                        <div className="p-5">
                            <h1 className="text-2xl sm:text-3xl font-semibold">For Businesses</h1>
                            <p className="text-blue-200 mt-3">Receive help from qualified students and take them under your wing</p>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-0">
                                <a href="/start/businesses" className="w-full sm:w-auto">
                                    <InteractiveHoverButton className="text-black mt-5 w-full sm:w-auto">
                                        Start for Businesses
                                    </InteractiveHoverButton>
                                </a>
                                <p className="hidden sm:block mt-auto mb-2 mx-3 text-blue-100">or...</p>
                                <a href="/contact" className="text-center bg-blue-500 mt-5 sm:mt-auto border-2 border-white px-5 py-2 rounded-lg hover:scale-105 duration-300">
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


