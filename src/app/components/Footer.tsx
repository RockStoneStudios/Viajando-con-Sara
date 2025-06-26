import React from "react";
import Container from "./Container";
import PrimaryButton from "./PrimaryButton";
import icons from "../icons";

export default function Footer() {
    return (
        <footer className="py-40 bg-slate-900 text-white">
            <Container>
                <div className="grid grid-cols-4 gap-6">
                    <div className="col-span-2">
                        <p className="text-2xl font-semibold mb-6">
                            ViajaCon<span className="text-orange-600">Sara</span>
                        </p>
                        <p className="text-slate-300 mb-4">
                           Descubre el mundo con experiencias hechas a tu medida. 
                           Desde las playas caribeñas hasta aventuras en la montaña, 
                           creamos recuerdos que durarán toda la vida.
                        </p>

                        <div className="flex items-center gap-x-2">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="px-4 py-2 rounded-lg border border-slate-400"
                                placeholder="Entra tu Email"
                            />
                            <PrimaryButton>Subscribe</PrimaryButton>
                        </div>

                        <div className="flex items-center gap-x-4 mt-8">
                            <a
                                href="https://www.facebook.com/725on"
                                className="fill-white hover:fill-orange-600 duration-300"
                            >
                                {icons.biFacebook}
                            </a>
                            <a
                                href="#"
                                className="fill-white hover:fill-orange-600 duration-300"
                            >
                                {icons.biTwitter}
                            </a>
                            <a
                                href="https://www.instagram.com/viajaconsara_/"
                                className="fill-white hover:fill-orange-600 duration-300"
                            >
                                {icons.biInstagram}
                            </a>
                            <a
                                href="#"
                                className="fill-white hover:fill-orange-600 duration-300"
                            >
                                {icons.biYoutube}
                            </a>
                             <a
                                href="https://wa.me/573004526484"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="fill-white hover:fill-orange-600 duration-300"
                                >
                                {icons.whatsapp}
                            </a>

                        </div>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold mb-6">
                            Quick Links
                        </h4>

                        <ul className="text-slate-300 flex flex-col gap-y-4">
                            <li>
                                <a href="#">Destinos</a>
                            </li>
                            <li>
                                <a href="#">Tours & Paquetes</a>
                            </li>
                            <li>
                                <a href="#">Guia de Viajes</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Contactanos</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold mb-6">
                            Soperte Usuarios
                        </h4>

                        <ul className="text-slate-300 flex flex-col gap-y-4">
                            <li>
                                <a href="#">FAQs</a>
                            </li>
                           <li>
                            <a href="#">Política de Reserva</a>
                            </li>
                            <li>
                            <a href="#">Política de Cancelación</a>
                            </li>
                            <li>
                            <a href="#">Términos y Condiciones</a>
                            </li>
                            <li>
                            <a href="#">Política de Privacidad</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="my-16 border-slate-700" />

                <div className="flex items-center justify-between gap-6 text-slate-300">
                    <div>Designed by, <a href="https://www.hassandev.me" className="text-orange-600">RockStone Studios</a></div>
                    <div>Copyright &copy; 2025, All Rights Reserved</div>
                    <div>
                        <button className="flex items-center hover:cursor-pointer">
                            <span className="fill-slate-300">{icons.doubleArrowUp}</span>
                            <span>Back To Top</span>
                        </button>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
