import React from "react";

export default function SectionHeading({
    children,
}: {
    children: React.ReactNode;
}) {
    return <h2 className="text-[clamp(1.25rem,0.964rem+1.429vw,2.25rem)] font-semibold my-6">{children}</h2>;
}
