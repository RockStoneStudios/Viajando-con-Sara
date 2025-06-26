import React from "react";
import SectionHeading from "./SectionHeading";
import PrimaryButton from "./PrimaryButton";
import icons from "../icons";
import Image from "next/image";

export default function CTA() {
    return (
        <section className="pb-20 bg-gradient-to-b from-yellow-200 to-yellow-300 from-60%">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                    {/* Imagen izquierda */}
                    <div className="w-full lg:w-1/3">
                        <Image
                            src="/images/cta-1.jpg"
                            alt="Imagen izquierda"
                            width={400}
                            height={320}
                            className="rounded-xl object-cover w-full h-auto max-h-80"
                        />
                    </div>

                    {/* Centro: Texto y botón */}
                    <div className="w-full lg:w-1/3 text-center">
                        <SectionHeading>
                            Únete a nuestra <span className="text-orange-600">Gran Aventura</span>
                        </SectionHeading>
                        <p className="max-w-md mx-auto mb-6 text-slate-800">
                            Viaja con Sara te lleva a los destinos más fascinantes, con itinerarios personalizados y atención dedicada en cada paso.
                            Vive la emoción de explorar playas paradisíacas, 
                            ciudades llenas de cultura y paisajes inolvidables. ¡Tu viaje soñado comienza aquí!
                        </p>

                        <PrimaryButton>
                            <div className="flex items-center justify-center gap-x-2 fill-white">
                                Empezar
                                {icons.externalLink}
                            </div>
                        </PrimaryButton>
                    </div>

                    {/* Imagen derecha */}
                    <div className="w-full lg:w-1/3">
                        <Image
                            src="/images/cta-2.jpg"
                            alt="Imagen derecha"
                            width={400}
                            height={320}
                            className="rounded-xl object-cover w-full h-auto max-h-80"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
