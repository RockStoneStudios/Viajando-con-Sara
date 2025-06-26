import React from "react";
import Container from "./Container";
import HeadingLabel from "./HeadingLabel";
import SectionHeading from "./SectionHeading";
import icons from "../icons";
import WhiteExternalButton from "./WhiteExternalButton";
import Image from "next/image";

export default function Social() {
    const posts = [
        {
            image: "/images/social-1.jpg",
            location: "Asia",
        },
        {
            image: "/images/social-2.jpg",
            location: "Colombia",
        },
        {
            image: "/images/social-3.jpg",
            location: "Dubai",
        },
        {
            image: "/images/social-4.jpg",
            location: "R Dominicana",
        },
    ];

    return (
        <section className="py-40 bg-orange-50">
            <Container>
                <HeadingLabel text="Social" />
                <SectionHeading>
                    Sigue Nuestros <span className="text-orange-600">Viajes</span>
                </SectionHeading>

                {/* Grid responsivo */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
                    {posts.map((post, i) => (
                        <div key={i} className="w-full">
                            <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden rounded-2xl group">
                                <div className="absolute inset-0 bg-white flex items-center justify-center opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-10">
                                    <WhiteExternalButton text="Explore Más" bordered />
                                </div>
                                <Image
                                    src={post.image}
                                    alt={`Imagen de ${post.location}`}
                                    fill
                                    className="object-cover object-center group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-xl font-semibold flex items-center gap-x-4 mt-4">
                                <span>{icons.instagram}</span>
                                <span>@{post.location}</span>
                            </h3>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
