'use client';

import ReactLenis from "lenis/react";
import { useRef } from "react"

export default function LenisScrollProvider({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef(null);

    return <ReactLenis ref={lenisRef} root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>{children}</ReactLenis>;
}