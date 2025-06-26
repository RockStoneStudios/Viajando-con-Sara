import React from "react";

export default function Slider({ children }: { children: React.ReactNode }) {
    return (
        <div className="overflow-hidden text-nowrap group">
            <div className="inline-block animate-slide group-hover:[animation-play-state:paused]">
                {children}
            </div>
            <div className="inline-block animate-slide group-hover:[animation-play-state:paused]">
                {children}
            </div>
        </div>
    );
}
