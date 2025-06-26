import React from "react";
import Container from "./Container";
import HeadingLabel from "./HeadingLabel";
import SectionHeading from "./SectionHeading";
import Image from "next/image";

export default function Products() {
    const products = [
        {
            title: "Regalos",
            image: "/images/product-bags.jpg",
        },
        {
            title: "Herramientas",
            image: "/images/product-tools.jpg",
        },
        {
            title: "Camping ",
            image: "/images/product-camping.jpg",
        },
        {
            title: "Maletas",
            image: "/images/product-suitcase.jpg",
        },
    ];

    return (
        <section className="py-40 bg-orange-50">
            <Container>
                <HeadingLabel text="Esenciales" />
                <SectionHeading>
                 Kit del Viajero: Lo Esencial para tu Aventura {" "}
                    <span className="text-orange-600">Esenciales</span>
                </SectionHeading>

                <div className="flex gap-x-6 mt-20">
                    {products.map((product, i) => (
                        <div key={i} className="basis-0 grow group hover:cursor-pointer">
                            <div className="p-5 rounded-xl border h-full overflow-hidden">
                                <Image src={product.image} alt="" className="w-full h-full object-contain object-center group-hover:scale-115 duration-300" />
                            </div>

                            <h3 className="text-2xl text-center my-3 font-semibold uppercase">{product.title}</h3>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
