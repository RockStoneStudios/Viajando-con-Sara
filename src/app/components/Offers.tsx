import React from "react";
import Container from "./Container";
import HeadingLabel from "./HeadingLabel";
import WhiteExternalButton from "./WhiteExternalButton";
import SectionHeading from "./SectionHeading";
import Image from "next/image";

export default function Offers() {
    return (
        <section className="py-20 bg-orange-50">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Columna de texto */}
                    <div>
                        <HeadingLabel text="Offers" />
                        <SectionHeading>
                            Ahorre en{" "}
                            <span className="text-orange-600">resortes</span> ó{" "}
                            <span className="text-orange-600">villas</span>
                        </SectionHeading>

                        <p className="mb-6 text-slate-800">
                            Imagina despertarte frente al mar en un gran Hotel ... 
                            ¿Sabías que puede ser más económico de lo que piensas?
                            Nos especializamos en hacer realidad esos momentos mágicos con precios inteligentes y asesoría personalizada. 
                            ¡Tu escapada perfecta empieza aquí!
                        </p>

                        <WhiteExternalButton text="Explore Más" bordered />
                    </div>

                    {/* Columna de imagen + testimonio */}
                    <div className="relative">
                        <Image
                            src="/images/offers-1.jpg"
                            alt="Imagen de oferta"
                            width={600}
                            height={400}
                            className="rounded-xl w-full object-cover"
                        />
                        <div className="absolute bottom-[-3rem] left-4 right-4 p-5 bg-white shadow-xl rounded-xl text-gray-700 text-sm sm:text-base">
                            <p className="italic mb-3 leading-relaxed">
                                ¡Ocean Breeze Resort fue la escapada perfecta!
                                Las impresionantes vistas al mar, las lujosas comodidades y el excepcional servicio
                                hicieron que cada momento fuera inolvidable. ¡Estoy deseando volver para otra escapada relajante!
                            </p>
                            <p className="font-semibold text-right">Sara Restrepo.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
