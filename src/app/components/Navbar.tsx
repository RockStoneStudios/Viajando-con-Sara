"use client";
import React, { useState } from "react";
import Container from "./Container";
import icons from "../icons";
import PrimaryButton from "./PrimaryButton";
import Image from "next/image";


export default function Navbar() {
    const [active, setActive] = useState(false);

    const toggleNav = () => {
        setActive(!active);
    }

    return (
        <Container>
            <nav className="flex items-center justify-between gap-6 py-6 flex-wrap">

                <div className="flex items-center gap-x-2">
                    <button className="hover:cursor-pointer md:hidden" onClick={toggleNav}>
                        {icons.menu}
                    </button>
                    {/* <a href="#" className="text-2xl font-semibold">Viajando<span className="text-orange-600">ConSara</span></a> */}
                    <Image src="/images/sara.jpg" alt="Tour" width={80} height={40} className="w-full" />
                </div>

                <div className={`${active ? "flex" : "hidden"} flex-col md:flex-row items-center gap-4 order-3 grow w-full mt-4 xl:order-[revert] xl:mt-0 xl:w-auto xl:grow-0 md:flex`}>
                      <a href="#">Destinos</a>
                        <span className="h-4 w-px bg-gray-300"></span>
                        <a href="#">Paquetes Turísticos</a>
                        <span className="h-4 w-px bg-gray-300"></span>
                        <a href="#">Vuelos y Hoteles</a>
                        <span className="h-4 w-px bg-gray-300"></span>
                        <a href="#">Guías de Viaje</a>
                        <span className="h-4 w-px bg-gray-300"></span>
                        <a href="#">Sobre Nosotros</a>
                        <span className="h-4 w-px bg-gray-300"></span>
                        <a href="#">Contacto</a>
                </div>

                <div className="flex items-center gap-x-6">
                    {/* <button className="hover:cursor-pointer">{icons.search}</button>
                    <button className="hover:cursor-pointer">{icons.heart}</button> */}
                    <PrimaryButton>
                        Book Flight
                    </PrimaryButton>
                </div>
            </nav>
        </Container>
    );
}
