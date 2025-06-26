import React from "react";
import Container from "./Container";
import HeadingLabel from "./HeadingLabel";
import Benefit from "./Benefit";
import SectionHeading from "./SectionHeading";

export default function Benefits() {
    const benefits_g1 = [
        {
            icon: "/images/badge.png",
            header: "Precios Competitivos",
            text: "Planes turísticos a medida con las mejores tarifas y sin sorpresas.",
        },
        {
            icon: "/images/booking.png",
            header: "Seriedad y Confianza",
            text: "Más de 6 años creando experiencias únicas con compromiso y profesionalismo.",
        },
    ];
    const benefits_g2 = [
        {
            icon: "/images/customer-service.png",
            header: "Asesoría 24/7",
            text: "Te acompañamos antes, durante y después de tu aventura. ¡Siempre estamos contigo!",
        },
        {
            icon: "/images/deal.png",
            header: "Experiencias Personalizadas",
            text: "Diseñamos cada viaje según tus gustos, porque no hay dos viajeros iguales.",
        },
    ];

    return (
        <section className="py-40">
            <Container>
                <div className="flex flex-col items-center gap-y-6">
                    <HeadingLabel text="Benefits" />

                    <SectionHeading>
                        Por qué te encantará viajar con 
                        <span className="text-orange-600"> Sara</span>
                    </SectionHeading>
                </div>

                <div className="mt-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        <div className="flex flex-col gap-y-16">
                            {benefits_g1.map((benefit, i) => (
                                <Benefit key={i} {...benefit} />
                            ))}
                        </div>
                        <div className="flex justify-center items-start">
                            <img
                                src="/images/benefits.jpg"
                                alt=""
                                className="rounded-md w-full min-w-72 max-w-80"
                            />
                        </div>
                        <div className="flex flex-col gap-y-16">
                            {benefits_g2.map((benefit, i) => (
                                <Benefit key={i} {...benefit} />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
