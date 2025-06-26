import React from "react";
import Container from "./Container";
import HeadingLabel from "./HeadingLabel";
import SectionHeading from "./SectionHeading";
import Slider from "./Slider";

export default function Reviews() {
  const reviews = [
    {
        text: "¡Nuestro viaje a Santa Marta con Viaja con Sara fue mágico! Desde el Parque Tayrona hasta las playas de Taganga, cada detalle estuvo perfectamente organizado.",
        name: "Eugenia Uribe",
    },
    {
        text: "La luna de miel en San Andrés superó todas nuestras expectativas. Vuelos, hotel todo incluido y hasta un tour privado por la isla... ¡Todo impecable!",
        name: "Andrés G.",
    },
    {
        text: "Punta Cana fue una experiencia de ensueño gracias a Viaja con Sara. El resort con vista al mar y las excursiones a Isla Saona fueron inolvidables.",
        name: "María Pineda.",
    },
    {
        text: "El equipo personalizó nuestro viaje familiar a Cartagena: desde la Ciudad Amurallada hasta el Volcán del Totumo. ¡Los niños aún no paran de hablar de esa aventura!",
        name: "Carlos Montoya.",
    },
    {
        text: "¡Nunca pensé que conocer el Eje Cafetero podría ser tan fácil! Traslados, hoteles boutique y catas de café incluidas... Todo sin complicaciones.",
        name: "Laura Sosa.",
    },
    {
        text: "Gracias a Viaja con Sara descubrí la Guajira como nunca. Desde Cabo de la Vela hasta los flamingos en Manaure, cada momento valió la pena.",
        name: "Jorge Lopez.",
    }
];
    const colors = [
        "bg-sky-300",
        "bg-emerald-400",
        "bg-orange-300",
        "bg-fuchsia-400",
        "bg-yellow-400"
    ];

    const getColor = () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return randomColor;
    };

    return (
        <section className="py-40 bg-orange-50">
            <Container>
                <HeadingLabel text="Reviews" />
                <SectionHeading>
                    Nuestros Clientes{" "}
                    <span className="text-orange-600">Nos Quieren</span>
                </SectionHeading>
            </Container>

            <div className="mt-20 relative">
                <div className="absolute top-0 bottom-0 left-0 z-10 w-80 bg-gradient-to-r from-orange-50/75 to-transparent from-30%"></div>
                <Slider>
                    <div className="flex text-wrap">
                        {reviews.map((review, i) => (
                            <div
                                key={i}
                                className={`p-10 rounded-2xl ${getColor()} text-xl uppercase font-bold mx-6 min-w-80 basis-0 grow text-center nth-[even]:mt-20 nth-[odd]:mb-20`}
                            >
                                <p className="mb-4">
                                    &ldquo;{review.text}&rdquo;
                                </p>
                                <hr className="my-6" />
                                <p>{review.name}</p>
                            </div>
                        ))}
                    </div>
                </Slider>
                <div className="absolute top-0 bottom-0 right-0 z-10 w-80 bg-gradient-to-l from-orange-50/75 to-transparent from-30%"></div>
            </div>
        </section>
    );
}
