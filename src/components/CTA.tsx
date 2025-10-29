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
        <section className="cta-section w-[90%] max-w-[1200px] mx-auto mt-50">
            <div className="cta-content mx-auto">
                <h2 className="text-4xl font-semibold text-center">Ready to empower your career?</h2>
                <div className="flex flex-row text-white">
                    <div className="bg-blue-500 w-[49%] h-50 mt-10 rounded-xl">
                        <div className="p-5">
                            <h1 className="text-3xl font-semibold">For Students</h1>
                            <p className="text-blue-200 mt-3">Help out local businesses and gain real-world experience</p>
                            <a href="/start/students">
                                <InteractiveHoverButton className="text-black mt-5">
                                    Join Now
                                </InteractiveHoverButton>
                            </a>
                        </div>
                    </div>
                    <div className="bg-blue-500 w-[49%] h-50 mt-10 rounded-xl ml-auto">
                        <div className="p-5">
                            <h1 className="text-3xl font-semibold">For Businesses</h1>
                            <p className="text-blue-200 mt-3">Receive help from qualified students and take them under your wing</p>
                            <div className="flex flex-row">
                                <a href="/start/businesses">
                                    <InteractiveHoverButton className="text-black mt-5">
                                        Start for Businesses
                                    </InteractiveHoverButton>
                                </a>
                                <p className="mt-auto mb-2 mx-3 text-blue-100">or...</p>
                                <a href="/contact" className="bg-blue-500 mt-auto border-2 border-white px-5 py-1.75 rounded-lg hover:scale-105 duration-300">
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


