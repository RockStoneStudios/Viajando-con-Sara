import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
    return <div className="max-w-7xl mx-auto px-10 xl:px-5 2xl:px-0">{children}</div>;
}
