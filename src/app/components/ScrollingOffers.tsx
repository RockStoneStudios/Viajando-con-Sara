import React from "react";
import icons from "../icons";
import Container from "./Container";
import Slider from "./Slider";

export default function ScrollingOffers() {
    const offers = [
        {
            text: "Reserva Facil",
            link: "",
            icon: icons.plane2,
        },
        {
            text: "Explore Mas",
            link: "",
            icon: icons.globe,
        },
        {
            text: "Mejores Destinos",
            link: "https://www.facebook.com/725on",
            icon: icons.map,
        },
        {
            text: "Viajes sin complicaciones",
            link: "",
            icon: icons.car,
        },
        {
            text: "Aventuras Inolvidables",
            link: "",
            icon: icons.instagram,
        },
    ];

    return (
        <section className="bg-sky-600 text-white py-6">
            <Container>
                <Slider>
                    <div className="flex items-center">
                        {offers.map((offer, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-x-2 uppercase text-2xl font-semibold px-6"
                            >
                                <div>{offer.icon}</div>
                                <div>
                                    <a href={offer.link}>{offer.text}</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </Slider>
            </Container>
        </section>
    );
}
