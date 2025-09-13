'use client';

import React, { useEffect, useRef } from "react";
// @ts-expect-error: cobe has no type defs by default
import createGlobe from "cobe";

export default function Globe() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const containerWidth = containerRef.current?.offsetWidth ?? 500;
        const size = Math.min(600, Math.max(360, containerWidth));

        const studentLocation = [40.7128, -74.006]; // New York, NY
        const businesses = [
            [37.7749, -122.4194], // San Francisco
            [30.2672, -97.7431],  // Austin
            [41.8781, -87.6298],  // Chicago
            [25.7617, -80.1918],  // Miami
            [47.6062, -122.3321], // Seattle
        ];

        const arcs = businesses.map(([lat, lng]) => ({
            startLat: studentLocation[0],
            startLng: studentLocation[1],
            endLat: lat,
            endLng: lng,
            color: [0.2, 0.4, 0.95],
            arcAlt: 0.6,
        }));

        const markers = [
            { location: studentLocation, size: 0.12 },
            ...businesses.map((loc) => ({ location: loc, size: 0.08 })),
        ];

        const globe: any = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: size * 2,
            height: size * 2,
            phi: 0,
            theta: 0.3,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.93, 0.96, 1],
            glowColor: [0.3, 0.6, 1],
            markerColor: [0.2, 0.4, 0.95],
            markers,
            arcs,
            arcDashLength: 0.4,
            arcDashGap: 1,
            arcDashInitialGap: 1,
            arcDashAnimateTime: 1200,
            onRender: (state: any) => {
                state.phi += 0.003;
            },
        });

        return () => {
            globe?.destroy?.();
        };
    }, []);

    return (
        <div ref={containerRef} className="w-full max-w-[560px] mx-auto aspect-square">
            <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
        </div>
    );
}


