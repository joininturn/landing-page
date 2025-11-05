'use client';

import { useEffect, useRef, useState } from "react";
import { WordRotate } from "./magicui/word-rotate";
import { AuroraText } from "./magicui/aurora-text";

const UPDATE_DEBOUNCE = 10;
const GAP = 12;
const TRANSITION_STYLE = "transform 250ms cubic-bezier(0.33, 1, 0.68, 1)";

export default function Hook() {
    const groupRef = useRef<HTMLSpanElement>(null);
    const wordRef = useRef<HTMLSpanElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);
    const parentRef = useRef<HTMLDivElement>(null);
    const [groupTranslate, setGroupTranslate] = useState(0);
    const [textTranslate, setTextTranslate] = useState(0);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const word = wordRef.current;
        const text = textRef.current;
        const parent = parentRef.current;
        if (!word || !text || !parent) return;

        let updateTimeout: NodeJS.Timeout;

        const updatePositions = () => {
            clearTimeout(updateTimeout);
            
            updateTimeout = setTimeout(() => {
                requestAnimationFrame(() => {
                    const wordRect = word.getBoundingClientRect();
                    const textRect = text.getBoundingClientRect();
                    const parentRect = parent.getBoundingClientRect();
                    
                    // Position text relative to word
                    const textPosition = wordRect.width + GAP;
                    setTextTranslate(textPosition);
                    
                    // Center the entire group
                    const totalWidth = wordRect.width + GAP + textRect.width;
                    const centerTranslate = (parentRect.width - totalWidth) / 2;
                    setGroupTranslate(centerTranslate);
                    
                    setIsReady(true);
                });
            }, UPDATE_DEBOUNCE);
        };

        const resizeObserver = new ResizeObserver(updatePositions);
        resizeObserver.observe(word);
        resizeObserver.observe(text);
        resizeObserver.observe(parent);

        const mutationObserver = new MutationObserver(updatePositions);
        mutationObserver.observe(word, { childList: true, subtree: true });

        updatePositions();

        return () => {
            resizeObserver.disconnect();
            mutationObserver.disconnect();
            clearTimeout(updateTimeout);
        };
    }, []);

    return (
        <section className="relative flex flex-col mx-auto pt-24 md:mt-30 mt-20 w-full px-4 sm:px-6 max-w-[1200px] min-h-[500px] overflow-hidden">
            <div className="motto relative items-center justify-center w-full md:w-2/3 md:min-w-[500px] h-fit mx-auto z-10 bg-white/50 px-2">
                <h1
                    ref={parentRef}
                    className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight mb-4"
                >
                    <span className="block relative overflow-hidden">
                        <span 
                            ref={groupRef}
                            className="inline-block relative"
                            style={{
                                transform: `translateX(${groupTranslate}px)`,
                                transition: `${TRANSITION_STYLE}, opacity 300ms ease-in`,
                                opacity: isReady ? 1 : 0,
                            }}
                        >
                            <span ref={wordRef} className="inline-block relative z-10">
                                <WordRotate 
                                    className="text-blue-600 inline-block text-right" 
                                    words={["Innovating", "Creating", "Paving", "Developing", "Leading"]} 
                                />
                            </span>
                            <span 
                                ref={textRef}
                                className="absolute left-0 top-0 bg-gradient-to-r from-black to-black/80 text-transparent bg-clip-text whitespace-nowrap"
                                style={{
                                    transform: `translateX(${textTranslate}px)`,
                                    transition: TRANSITION_STYLE,
                                }}
                            >
                                the future to high
                            </span>
                        </span>
                    </span>

                    <span className="block text-center">
                        <span className="inline-flex items-baseline justify-center gap-2 flex-wrap">
                            <span>school</span>
                            <AuroraText className="inline-block">internships.</AuroraText>
                        </span>
                    </span>
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto bg-white/50 text-center px-2">
                    We connect ambitious high school students with innovative startups and small businesses. 
                    Gain real-world experience while helping companies grow.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-2">
                    <a 
                        href="/students/start" 
                        className="w-full sm:w-auto text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105"
                    >
                        Get Started
                    </a>
                    <a 
                        href="#about" 
                        className="w-full sm:w-auto text-center border bg-white border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-md"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    );
}