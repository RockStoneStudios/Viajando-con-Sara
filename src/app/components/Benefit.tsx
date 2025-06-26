import React from "react";

interface BenefitProps {
    icon: React.ReactNode;
    header: string;
    text: string;
}

export default function Benefit({ icon, header, text }: BenefitProps) {
    return (
        <div>
            <div>
                <img src={icon} alt="" className="w-12 mb-4" />
            </div>
            <h3 className="font-semibold text-2xl mb-2">{header}</h3>
            <p>{text}</p>
        </div>
    );
}
