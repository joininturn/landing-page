'use client';

import Image from "next/image";
import { WordRotate } from "./magicui/word-rotate";

export default function Hook() {

    return (
        <div className="flex flex-col mx-auto mt-10 w-[90%] max-w-[1450px] h-170">
            <div className="motto relative items-center justify-center w-[90%] md:w-1/2 md:min-w-[640px] h-fit text-center mx-auto">
                <h1
                    className="text-3xl md:text-5xl font-semibold leading-tight bg-gradient-to-r from-black to-black/80 text-transparent bg-clip-text"
                >
                    <span className="">
                        <WordRotate className="text-blue-600 inline-block w-40 md:w-68" words={["Innovating", "Creating", "Paving"]} />
                    </span>
                    
                    the future to high school internships
                </h1>
            </div>
        </div>
    )
}