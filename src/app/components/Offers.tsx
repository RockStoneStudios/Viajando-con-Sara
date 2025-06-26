import React from "react";
import Container from "./Container";
import HeadingLabel from "./HeadingLabel";
import WhiteExternalButton from "./WhiteExternalButton";
import SectionHeading from "./SectionHeading";

export default function Offers() {
    return (
        <section className="py-40 bg-orange-50">
            <Container>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <HeadingLabel text="Offers" />
                        <SectionHeading>
                            Ahorre en {" "}
                            <span className="text-orange-600">resortes</span> ó{" "}
                            <span className="text-orange-600">villas</span>
                        </SectionHeading>

                        <p className="mb-4">
                           "Imagina despertarte frente al mar en un gran Hotel ... 
                           ¿Sabías que puede ser más económico de lo que piensas?"
                          Nos especializamos en hacer realidad esos momentos mágicos con precios inteligentes y asesoría personalizada. 
                          ¡Tu escapada perfecta empieza aquí!
                        </p>

                        <WhiteExternalButton text="Explore Mas" bordered />
                    </div>
                    <div className="relative">
                        <img
                            src="/images/offers-1.jpg"
                            alt=""
                            className="rounded-lg"
                        />
                        <div className="absolute -bottom-12 left-6 right-6 p-5 bg-white shadow-lg rounded-lg text-gray-600">
                            <p className="italic mb-4">
                                ¡Ocean Breeze Resort fue la escapada perfecta!
                                 Las impresionantes vistas al mar, las lujosas comodidades y el excepcional servicio hicieron que cada momento fuera inolvidable. 
                                 ¡Estoy deseando volver para otra escapada relajante!

                                   
                            </p>
                            <p>
                                Sara Restrepo.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
