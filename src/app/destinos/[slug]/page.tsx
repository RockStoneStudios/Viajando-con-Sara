"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";

const destinations = [
  {
    slug: "cartagena",
    image: "/images/cartagena.jpeg",
    title: "Cartagena",
    price: "$699.000",
    location: "Bolivar, Colombia",
    color: "bg-amber-600",
    duration: "3 días y 2 noches",
    includes: [
      "Tiquetes Aereos",
      "Traslados aeropuerto hotel aeropuerto",
      "Alojamiento",
      "Alimentación de acuerdo a hotel elegido",
      "Asistencia médica",
      "Impuestos hoteleros",
    ],
  },
  {
  "slug": "covenas",
  "image": "/images/coveñas.jpg", 
  "title": "Coveñas",
  "price": "$550.000", // Ajusta según el valor real
  "location": "Sucre, Colombia",
  "color": "bg-emerald-600", // Verde esmeralda para playas y naturaleza
  "duration": "2 días y 1 noche", // Ajusta según el plan
  "includes": [
    "Transporte ida y regreso en buses de turismo",
    "Alojamiento según número de noches",
    "Alimentación según plan",
    "Asistencia médica",
    "Guía acompañante"
  ],
  "excludes": [
    "Gastos no especificados",
    "Actividades opcionales (ej. paseos en lancha)"
  ]
},
  {
    slug: "isla-margarita",
    image: "/images/isla_margarita.jpeg",
    title: "Isla Margarita",
    price: "$1'200.000",
    location: "Venezuela",
    color: "bg-sky-600",
    duration: "4 días y 3 noches",
    includes: [
      "Resort todo incluido",
      "Tour a Playa El Agua",
      "Excursión a Isla Coche",
      "Desayuno y cena buffet",
      "Barra libre de bebidas nacionales",
      "Actividades acuáticas",
    ],
  },
  {
  "slug": "san-andres",
  "image": "/images/san-andres.jpg", 
  "title": "San Andrés",
  "price": "$1.200.000", // Ajusta según el valor real
  "location": "Archipiélago de San Andrés, Colombia",
  "color": "bg-blue-500", // Color azul para reflejar el mar
  "duration": "4 días y 3 noches", // Ajusta según el plan
  "includes": [
    "Tiquete Aéreo Ida y Regreso",
    "Equipaje Personal (45x35x25 cm)",
    "Alojamiento según noches",
    "Alimentación según plan",
    "Asistencia Médica",
    "Impuestos Aéreos y Hoteleros",
    "Traslado Aeropuerto-Hotel-Aeropuerto"
  ],
  "excludes": [
    "Asignación de Silla",
    "Gastos no especificados",
    "Tarjeta de Entrada Isla ($146.000 + impuestos coralinos)"
  ]
},
  {
    slug: "tour-santa-elena",
    image: "/images/tour_santa_elena.jpeg",
    title: "Tour Santa Elena",
    price: "$200.000",
    location: "Santa Elena, Medellin",
    color: "bg-emerald-600",
    duration: "1 día completo",
    includes: [
      "Transporte ida y vuelta",
      "Guía turístico especializado",
      "Visita a fincas de flores",
      "Almuerzo campesino",
      "Degustación de café",
      "Recorrido por el parque ecológico",
    ],
  },
  {
    slug: "paris",
    image: "/images/paris.jpg",
    title: "Paris",
    price: "$3'699.000",
    location: "Paris, Francia",
    color: "bg-amber-600",
    duration: "7 días y 6 noches",
    includes: [
      "Hotel 4 estrellas en centro histórico",
      "Tour Torre Eiffel y Louvre",
      "Crucero por el Sena",
      "Desayuno continental diario",
      "3 cenas gourmet",
      "Seguro de viaje internacional",
    ],
  },
];

export default function DestinationPage() {
  const params = useParams();
  const { slug } = params;

  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) {
    return (
      <div className="p-4 sm:p-6 text-center text-red-600 text-base sm:text-lg md:text-xl">
        Destino no encontrado.
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar responsivo */}
      <header className="sticky top-0 z-50 w-full bg-white shadow-md">
        <Navbar />
      </header>

      {/* Contenido principal */}
      <main className={`flex-1 ${destination.color} text-white`}>
        <div className="container mx-auto px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10 max-w-7xl">
          {/* Imagen responsiva */}
          <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] rounded-xl overflow-hidden mb-6 sm:mb-8">
            <Image
              src={destination.image}
              alt={destination.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
            />
          </div>

          {/* Título */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            {destination.title}
          </h1>

          {/* Información del paquete */}
          <div className="bg-white/20 p-4 sm:p-6 rounded-xl backdrop-blur-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div>
                <p className="text-xs sm:text-sm md:text-base font-semibold">Precio:</p>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
                  {destination.price}
                </p>
              </div>
              <div>
                <p className="text-xs sm:text-sm md:text-base font-semibold">Duración:</p>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
                  {destination.duration}
                </p>
              </div>
              <div className="sm:col-span-2 lg:col-span-1">
                <p className="text-xs sm:text-sm md:text-base font-semibold">Ubicación:</p>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
                  {destination.location}
                </p>
              </div>
            </div>

            {/* Lista de inclusiones */}
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
                Incluye:
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                {destination.includes.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm sm:text-base md:text-lg"
                  >
                    <span className="mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}