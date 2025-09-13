import React from "react";

export default function CTA() {
    return (
        <section className="w-[90%] max-w-[1200px] mx-auto mt-24 text-center p-10 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-600/90 text-white">
            <h3 className="text-2xl md:text-3xl font-semibold mb-3">Ready to kickstart your career?</h3>
            <p className="text-blue-50/90 mb-6 max-w-2xl mx-auto">
                Join InTurn to find mentored, real-world projects with startups and small businesses.
            </p>
            <a href="/start" className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                Get Started
            </a>
        </section>
    );
}


