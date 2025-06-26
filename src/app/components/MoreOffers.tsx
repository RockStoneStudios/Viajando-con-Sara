import React from "react";
import Container from "./Container";
import icons from "../icons";
import Image from "next/image";

export default function MoreOffers() {
    return (
        <section className="py-20">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Tarjeta 1 - Colombia */}
                    <div className="lg:col-span-2 rounded-xl p-5 bg-sky-200 flex flex-col sm:flex-row gap-6 max-h-full overflow-hidden">
                        <div className="flex-1">
                            <div className="w-14 h-14 bg-orange-400 rounded-full flex items-center justify-center">
                                {icons.discount}
                            </div>

                            <h3 className="text-2xl font-semibold uppercase my-6">
                                Vamos a viajar por Colombia
                            </h3>

                            <button className="px-6 py-3 rounded-xl font-semibold uppercase border flex items-center gap-x-2 bg-transparent hover:bg-white hover:cursor-pointer duration-300">
                                <span>Reserva ahora</span>
                                <span>{icons.externalLink}</span>
                            </button>
                        </div>
                        <div className="flex-1">
                            <Image
                                src="/images/offer-2.jpg"
                                alt="Viaje Colombia"
                                width={350}
                                height={350}
                                className="rounded-xl w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Tarjeta 2 - Mundo */}
                    <div className="rounded-xl p-5 bg-orange-200 flex flex-col sm:flex-row gap-6 max-h-full overflow-hidden">
                        <div className="flex-1">
                            <div className="w-14 h-14 bg-orange-400 rounded-full flex items-center justify-center">
                                {icons.discount}
                            </div>

                            <h3 className="text-2xl font-semibold uppercase my-6">
                                Vamos a viajar por el Mundo
                            </h3>

                            <button className="px-6 py-3 rounded-xl font-semibold uppercase border flex items-center gap-x-2 bg-transparent hover:bg-white hover:cursor-pointer duration-300">
                                <span>Reserva ahora</span>
                                <span>{icons.externalLink}</span>
                            </button>
                        </div>
                        <div className="flex-1">
                            <Image
                                src="/images/offer-3.jpg"
                                alt="Viaje Mundo"
                                width={350}
                                height={350}
                                className="rounded-xl w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
