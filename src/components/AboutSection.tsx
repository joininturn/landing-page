'use client';

import { MapPin } from "lucide-react";
import React, { useRef } from "react";
import { PiBuildingBold, PiStudentBold, PiUser, PiUserBold } from "react-icons/pi";
import { AnimatedBeam } from "./magicui/animated-beam";
import { ShineBorder } from "./magicui/shine-border";

export default function AboutSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const userRef = useRef<HTMLDivElement>(null);
    const businessRef = useRef<HTMLDivElement>(null);
    const studentRef = useRef<HTMLDivElement>(null);

    return (
        <section className="w-full px-4 sm:px-6 max-w-[1100px] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="order-2 md:order-1">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Connecting students with small businesses</h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6 font-bold flex flex-row items-center flex-wrap">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>Currently only in Greater Washington D.C Area</span>
                </p>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                    InTurn helps ambitious high school students discover real-world opportunities at startups and
                    small businesses. Build experience, grow your network, and contribute to companies that need
                    your energy and fresh perspective.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a href="/start" className="text-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg">Start Now</a>
                    <a href="#features" className="text-center border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-5 py-2.5 rounded-lg font-semibold transition-all duration-200">See Features</a>
                </div>
            </div>
            { /* illustration of student beam with the business thing idk */ }
            <div ref={containerRef} className="flex flex-row relative order-1 md:order-2">
                <div ref={userRef} className="flex relative bg-zinc-100 w-20 h-20 rounded-full mr-auto z-40">
                    <ShineBorder borderWidth={2} shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                    <PiUserBold className="m-auto text-5xl" />
                </div>
                <div ref={businessRef} className="flex relative bg-zinc-100 w-20 h-20 rounded-full z-40 md:my-auto">
                    <ShineBorder borderWidth={2} shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                    <PiBuildingBold className="m-auto text-5xl" />
                </div>
                <div ref={studentRef} className="flex relative bg-zinc-100 w-20 h-20 rounded-full ml-auto z-40 md:mt-auto">
                    <ShineBorder borderWidth={2} shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                    <PiStudentBold className="m-auto text-5xl" />
                </div>

                { /* beams */ }
                <AnimatedBeam containerRef={containerRef} fromRef={userRef} toRef={businessRef} curvature={75} />
                <AnimatedBeam containerRef={containerRef} fromRef={businessRef} toRef={studentRef} curvature={75} />
            </div>
        </section>
    );
}


