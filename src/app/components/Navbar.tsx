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
    };

    return (
        <Container>
            <nav className="flex items-center justify-between gap-4 py-2 md:py-3 relative">
                {/* Logo + hamburguesa */}
                <div className="flex items-center gap-x-2">
                    <button
                        className="hover:cursor-pointer md:hidden"
                        onClick={toggleNav}
                        aria-label="Abrir menú"
                    >
                        {icons.menu}
                    </button>
                    <Image
                        src="/images/sara.jpg"
                        alt="Viaja con Sara"
                        width={80}
                        height={40}
                        className="w-12 md:w-16 h-auto"
                    />
                </div>

                {/* Enlaces: menú desplegable en móvil, horizontal en desktop */}
                <div
                    className={`
                        ${active ? "flex" : "hidden"}
                        md:flex
                        absolute md:static
                        top-full left-0 right-0
                        bg-white md:bg-transparent
                        shadow-md md:shadow-none
                        flex-col md:flex-row
                        items-start md:items-center
                        gap-3 md:gap-4
                        p-4 md:p-0
                        z-50
                    `}
                >
                    <a href="#destinos" className="w-full md:w-auto py-2 md:py-0 text-sm">Destinos</a>
                    <span className="hidden md:block h-4 w-px bg-gray-300"></span>
                    <a href="#paquetes" className="w-full md:w-auto py-2 md:py-0 text-sm">Paquetes Turísticos</a>
                    <span className="hidden md:block h-4 w-px bg-gray-300"></span>
                    <a href="#vuelos" className="w-full md:w-auto py-2 md:py-0 text-sm">Vuelos y Hoteles</a>
                    <span className="hidden md:block h-4 w-px bg-gray-300"></span>
                    <a href="#guias" className="w-full md:w-auto py-2 md:py-0 text-sm">Guías de Viaje</a>
                    <span className="hidden md:block h-4 w-px bg-gray-300"></span>
                    <a href="#nosotros" className="w-full md:w-auto py-2 md:py-0 text-sm">Sobre Nosotros</a>
                    <span className="hidden md:block h-4 w-px bg-gray-300"></span>
                    <a href="https://wa.me/573004526484" className="w-full md:w-auto py-2 md:py-0 text-sm">Contacto</a>
                </div>

                {/* Botón Reserva (solo desktop) */}
                <div className="hidden md:flex items-center gap-x-6">
                    <PrimaryButton>Reserva</PrimaryButton>
                </div>
            </nav>
        </Container>
    );
}