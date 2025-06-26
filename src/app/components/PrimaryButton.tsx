import React from "react";

export default function PrimaryButton({ children }: { children: React.ReactNode }) {
    return (
        <button className="bg-orange-600 hover:bg-orange-500 duration-300 cursor-pointer text-white rounded-lg px-4 py-2 text-lg font-semibold">
            {children}
        </button>
    );
}
