'use client';

import { WordRotate } from "./magicui/word-rotate";
import { AuroraText } from "./magicui/aurora-text";

export default function Hook() {

    return (
        <section className="flex flex-col mx-auto pt-24 md:mt-20 w-[90%] max-w-[1200px] min-h-[500px]">
            <div className="motto relative items-center justify-center w-[90%] md:w-2/3 md:min-w-[500px] h-fit text-center mx-auto">
                <h1
                    className="text-2xl md:text-4xl font-semibold leading-tight bg-gradient-to-r from-black to-black/80 text-transparent bg-clip-text mb-4"
                >
                    <WordRotate className="text-blue-600 inline-block w-32 md:w-48 text-right mr-3" words={["Innovating", "Creating", "Paving"]} />

                    the future to high school <AuroraText className="inline-block" >internships.</AuroraText>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    We connect ambitious high school students with innovative startups and small businesses. 
                    Gain real-world experience while helping companies grow.
                </p>
                <div className="flex flex-row gap-4 justify-center items-center">
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
        </section>
    )
}