'use client';

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText)

export default function CTA() {
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".cta-text-long-scroll",
                start: "top 40%",
                end: "50% 20%",
                scrub: true,
                pin: true,
                markers: true
            }
        })

        const ctaTextSplit = new SplitText(".cta-text", { type: "words" });

        tl.fromTo(ctaTextSplit.words, { y: "50%", autoAlpha: 0, scale: 0.9 }, { y: "0%", autoAlpha: 1, scale: 1, stagger: 0.2, ease: "power2.out" });
    })

    return (
        <section className="cta-section w-[90%] max-w-[1200px] mx-auto mt-50">
            <div className="cta-text-long-scroll h-300">
                <h1 className="cta-text text-5xl font-semibold text-center">Ready to empower your career?</h1>
            </div>
        </section>
    );
}


