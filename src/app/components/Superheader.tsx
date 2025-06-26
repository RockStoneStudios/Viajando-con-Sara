import React from "react";
import Container from "./Container";
import icons from "../icons";

export default function Superheader() {
    return (
        <div className="bg-yellow-300 py-3">
            <Container>
                <div className="flex items-center justify-between gap-x-6 flex-wrap md:flex-nowrap">
                    <div className="flex items-center gap-x-1">
                        {icons.currency}
                        <span className="hidden lg:inline">United States Dollar</span>
                        (USD)
                    </div>
                    <div className="order-3 grow w-full text-center mt-2 md:order-[revert] md:mt-0 md:w-auto md:grow-0">
                        Get Free Shipping with code{" "}
                        <span className="font-bold">FREESHIPPING</span>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <a href="#">Login</a>
                        <span>|</span>
                        <a href="#">Join Us</a>
                    </div>
                </div>
            </Container>
        </div>
    );
}
