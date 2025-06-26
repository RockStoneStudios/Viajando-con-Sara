import React from "react";
import icons from "../icons";

export default function HeadingLabel({ text }: { text: string }) {
    return (
        <div className="p-2 bg-yellow-200 relative text-black rounded-md inline-block">
            <div className="absolute -top-4 -left-4 fill-slate-800 rotate-[225deg]">
                {icons.plane}
            </div>
            {text}
        </div>
    );
}
