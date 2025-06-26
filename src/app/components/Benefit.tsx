import React from "react";
import Image from "next/image";

type BenefitProps = {
    icon: string;
    header: string;
    text: string;
};

export default function Benefit({ icon, header, text }: BenefitProps) {
    return (
        <div>
            <div>
                {icon && (
                    <Image
                        src={icon}
                        alt={header}
                        width={48}
                        height={48}
                        className="mb-4"
                    />
                )}
            </div>
            <h3 className="font-semibold text-2xl mb-2">{header}</h3>
            <p>{text}</p>
        </div>
    );
}
