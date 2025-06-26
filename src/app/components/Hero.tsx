import React from "react";
import Container from "./Container";
import icons from "../icons";
import WhiteExternalButton from "./WhiteExternalButton";

export default function Hero() {
    return (
        <section className="bg-[url('/images/hero-bg.jpg')] py-20 bg-center bg-cover relative isolate">
            <Container>
                <div className="flex flex-col justify-between gap-y-24">
                    <div>
                        <h1 className="text-[clamp(2.25rem,1.179rem+5.357vw,6rem)] font-bold text-white uppercase max-w-xl mb-12">
                            Descubre tu próximo destino
                        </h1>

                        <div>
                            <WhiteExternalButton text="Planea tu Viaje" />
                        </div>
                    </div>

                    <div className="text-white text-xl font-semibold max-w-md">
                        <p>Explora destinos impresionantes, planifica aventuras emocionantes y crea recuerdos inolvidables.</p>
                    </div>
                </div>
            </Container>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-br from-[#00000088]/30 to-[#ffffff44]/0 -z-10"></div>
        </section>
    );
}
