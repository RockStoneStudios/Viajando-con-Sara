import React from "react";
import Container from "./Container";
import WhiteExternalButton from "./WhiteExternalButton";

export default function Hero() {
    return (
        <section className="relative isolate py-20 overflow-hidden min-h-[80vh] flex items-center">
            {/* Video de fondo */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            >
                <source src="/images/heros.mp4" type="video/mp4" />
                Tu navegador no soporta video en HTML5.
            </video>

            {/* Overlay con degradado */}
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-br from-[#00000088]/30 to-[#ffffff44]/0 -z-10"></div>

            {/* Contenido */}
            <Container>
                <div className="flex flex-col lg:flex-row justify-between gap-y-12 lg:gap-y-0">
                    {/* Columna izquierda con título y botón */}
                    <div className="lg:w-1/2">
                        <h1 className="text-[clamp(2.25rem,1.179rem+5.357vw,6rem)] font-bold text-white uppercase max-w-xl mb-8 lg:mb-12 leading-tight 
                                      [text-shadow:_0_4px_12px_rgb(0_0_0_/_80%),_0_0_1px_rgb(255_255_255_/_90%)] 
                                      drop-shadow-2xl">
                            Descubre tu próximo destino
                        </h1>

                        <div className="mb-8 lg:mb-0">
                            <WhiteExternalButton text="Planea tu Viaje" />
                        </div>
                    </div>

                    {/* Columna derecha con texto descriptivo */}
                    <div className="lg:w-2/5 flex items-end">
                        <p className="text-white text-lg lg:text-xl font-semibold max-w-md lg:ml-auto
                                    [text-shadow:_0_2px_8px_rgb(0_0_0_/_70%),_0_0_1px_rgb(255_255_255_/_80%)] 
                                    bg-black/20 backdrop-blur-xs p-4 rounded-lg">
                            Explora destinos impresionantes, planifica aventuras
                            emocionantes y crea recuerdos inolvidables.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}