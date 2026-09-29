"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import icons from "../icons";
import PrimaryButton from "./PrimaryButton";

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
                    <Link href="/">
                        <Image
                            src="/images/sara.jpg"
                            alt="Viaja con Sara"
                            width={80}
                            height={40}
                            className="w-12 md:w-16 h-auto"
                        />
                    </Link>
                </div>

                {/* Enlaces */}
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
                    {/* Página interna: usa <Link> */}
                    <Link
                        href="/dias-de-sol"
                        className="w-full md:w-auto py-2 md:py-0 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
                        onClick={() => setActive(false)}
                    >
                        Días de Sol
                    </Link>
                    <span className="hidden md:block h-4 w-px bg-gray-300"></span>

                    {/* Anclas internas de la home: usa <Link> también */}
                    <Link
                        href="/#destinos"
                        className="w-full md:w-auto py-2 md:py-0 text-sm hover:text-orange-600 transition-colors"
                        onClick={() => setActive(false)}
                    >
                        Destinos
                    </Link>
                    <span className="hidden md:block h-4 w-px bg-gray-300"></span>

                    <Link
                        href="/#paquetes"
                        className="w-full md:w-auto py-2 md:py-0 text-sm hover:text-orange-600 transition-colors"
                        onClick={() => setActive(false)}
                    >
                        Paquetes Turísticos
                    </Link>
                    <span className="hidden md:block h-4 w-px bg-gray-300"></span>

                    <Link
                        href="/#vuelos"
                        className="w-full md:w-auto py-2 md:py-0 text-sm hover:text-orange-600 transition-colors"
                        onClick={() => setActive(false)}
                    >
                        Vuelos y Hoteles
                    </Link>
                    <span className="hidden md:block h-4 w-px bg-gray-300"></span>

                    <Link
                        href="/#guias"
                        className="w-full md:w-auto py-2 md:py-0 text-sm hover:text-orange-600 transition-colors"
                        onClick={() => setActive(false)}
                    >
                        Guías de Viaje
                    </Link>
                    <span className="hidden md:block h-4 w-px bg-gray-300"></span>

                    <Link
                        href="/#nosotros"
                        className="w-full md:w-auto py-2 md:py-0 text-sm hover:text-orange-600 transition-colors"
                        onClick={() => setActive(false)}
                    >
                        Sobre Nosotros
                    </Link>
                    <span className="hidden md:block h-4 w-px bg-gray-300"></span>

                    {/* Enlace externo: se queda como <a> */}
                    <a
                        href="https://wa.me/573004526484"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full md:w-auto py-2 md:py-0 text-sm hover:text-orange-600 transition-colors"
                    >
                        Contacto
                    </a>
                </div>

                {/* Botón Reserva */}
                <div className="hidden md:flex items-center gap-x-6">
                    <PrimaryButton>Reserva</PrimaryButton>
                </div>
            </nav>
        </Container>
    );
}