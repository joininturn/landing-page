import React from "react";
import Globe from "./Globe";

export default function GlobeSection() {
    return (
        <section id="about" className="w-[90%] max-w-[1200px] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Connecting students with small businesses</h2>
                <p className="text-gray-600 mb-4">
                    InTurn helps ambitious high school students discover real-world opportunities at startups and
                    small businesses. Build experience, grow your network, and contribute to companies that need
                    your energy and fresh perspective.
                </p>
                <p className="text-gray-600 mb-6">
                    Our network spans the country—see how students plug into small businesses through meaningful,
                    mentored projects.
                </p>
                <div className="flex gap-4">
                    <a href="/start" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg">Start Now</a>
                    <a href="#features" className="border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-5 py-2.5 rounded-lg font-semibold transition-all duration-200">See Features</a>
                </div>
            </div>
            <div className="order-1 md:order-2">
                <Globe />
            </div>
        </section>
    );
}


