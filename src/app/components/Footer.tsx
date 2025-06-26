import React from "react";
import Container from "./Container";
import PrimaryButton from "./PrimaryButton";
import icons from "../icons";

export default function Footer() {
    return (
        <footer className="py-20 bg-slate-900 text-white">
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Columna 1 */}
                    <div className="col-span-1 lg:col-span-2">
                        <p className="text-2xl font-semibold mb-6">
                            ViajaCon<span className="text-orange-600">Sara</span>
                        </p>
                        <p className="text-slate-300 mb-6">
                            Descubre el mundo con experiencias hechas a tu medida. 
                            Desde las playas caribeñas hasta aventuras en la montaña, 
                            creamos recuerdos que durarán toda la vida.
                        </p>

                        <form className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="w-full sm:w-auto flex-1 px-4 py-2 rounded-lg border border-slate-400 text-black"
                                placeholder="Entra tu Email"
                            />
                            <PrimaryButton>Subscribe</PrimaryButton>
                        </form>

                        <div className="flex items-center gap-x-4 mt-8 flex-wrap">
                            <a href="https://www.facebook.com/725on" className="fill-white hover:fill-orange-600 duration-300">
                                {icons.biFacebook}
                            </a>
                            <a href="#" className="fill-white hover:fill-orange-600 duration-300">
                                {icons.biTwitter}
                            </a>
                            <a href="https://www.instagram.com/viajaconsara_/" className="fill-white hover:fill-orange-600 duration-300">
                                {icons.biInstagram}
                            </a>
                            <a href="#" className="fill-white hover:fill-orange-600 duration-300">
                                {icons.biYoutube}
                            </a>
                            <a href="https://wa.me/573004526484" target="_blank" rel="noopener noreferrer" className="fill-white hover:fill-orange-600 duration-300">
                                {icons.whatsapp}
                            </a>
                        </div>
                    </div>

                    {/* Columna 2 */}
                    <div>
                        <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
                        <ul className="text-slate-300 flex flex-col gap-y-3">
                            <li><a href="#">Destinos</a></li>
                            <li><a href="#">Tours & Paquetes</a></li>
                            <li><a href="#">Guía de Viajes</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contáctanos</a></li>
                        </ul>
                    </div>

                    {/* Columna 3 */}
                    <div>
                        <h4 className="text-xl font-semibold mb-6">Soporte Usuarios</h4>
                        <ul className="text-slate-300 flex flex-col gap-y-3">
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Política de Reserva</a></li>
                            <li><a href="#">Política de Cancelación</a></li>
                            <li><a href="#">Términos y Condiciones</a></li>
                            <li><a href="#">Política de Privacidad</a></li>
                        </ul>
                    </div>
                </div>

                <hr className="my-12 border-slate-700" />

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-300 text-sm">
                    <div>
                        Designed by <a href="https://www.hassandev.me" className="text-orange-600">RockStone Studios</a>
                    </div>
                    <div>Copyright © 2025, All Rights Reserved</div>
                    <button className="flex items-center gap-x-2 hover:cursor-pointer">
                        <span className="fill-slate-300">{icons.doubleArrowUp}</span>
                        <span>Back To Top</span>
                    </button>
                </div>
            </Container>
        </footer>
    );
}
