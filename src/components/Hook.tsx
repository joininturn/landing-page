'use client';

import Image from "next/image";
import { WordRotate } from "./magicui/word-rotate";

export default function Hook() {

    return (
        <div className="flex flex-col mx-auto mt-8 w-[90%] max-w-[1200px] min-h-[500px] hero-pattern">
            <div className="motto relative items-center justify-center w-[90%] md:w-2/3 md:min-w-[500px] h-fit text-center mx-auto">
                <h1
                    className="text-2xl md:text-4xl font-semibold leading-tight bg-gradient-to-r from-black to-black/80 text-transparent bg-clip-text mb-4"
                >
                    <span className="">
                        <WordRotate className="text-blue-600 inline-block w-32 md:w-48" words={["Innovating", "Creating", "Paving"]} />
                    </span>
                    
                    the future to high school internships
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    Connect ambitious high school students with innovative startups and small businesses. 
                    Gain real-world experience while helping companies grow.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a 
                        href="/start" 
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105"
                    >
                        Get Started
                    </a>
                    <a 
                        href="#about" 
                        className="border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-md"
                    >
                        Learn More
                    </a>
                </div>
            </div>
            
            {/* Features Section */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Real Experience</h3>
                    <p className="text-gray-600 text-sm">Work on actual projects with real companies and build your portfolio.</p>
                </div>
                
                <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Mentorship</h3>
                    <p className="text-gray-600 text-sm">Get guidance from experienced professionals and industry experts.</p>
                </div>
                
                <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Track</h3>
                    <p className="text-gray-600 text-sm">Jumpstart your career with hands-on experience before college.</p>
                </div>
            </div>
        </div>
    )
}