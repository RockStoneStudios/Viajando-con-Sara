// import React from "react";
// import Container from "./Container";
// import HeadingLabel from "./HeadingLabel";
// import icons from "../icons";
// import SectionHeading from "./SectionHeading";
// import Image from "next/image";

// export default function FeaturedDestinations() {
//     const destinations = [
//         {
//             image: "/images/cartagena.jpeg",
//             title: "Cartagena",
//             price: "$699.000",
//             location: "Bolivar, Colombia",
//             color: "bg-amber-600"
//         },
//         {
//             image: "/images/isla_margarita.jpeg",
//             title: "Isla Margarita",
//             price: "$1'200.000",
//             location: "Venezuela",
//             color: "bg-sky-600"
//         },
//         {
//             image: "/images/tour_santa_elena.jpeg",
//             title: "Tour Santa Elena",
//             price: "$200.000",
//             location: "Santa Elena, Medellin",
//             color: "bg-emerald-600"
//         },
//         {
//             image: "/images/paris.jpg",
//             title: "Paris",
//             price: "$3'699.000",
//             location: "Paris, Francia",
//             color: "bg-amber-600"
//         },
        
//     ];

//     return (
//         <section className="pt-40 bg-[url('/images/destinations-bg.jpg')] bg-cover bg-center relative isolate">
//             <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-b from-white to-white/55 from-30% -z-10"></div>
//             <Container>
//                 <HeadingLabel text="Featured" />

//                 <div className="flex flex-wrap items-center justify-between gap-6 mb-6">
//                     <SectionHeading>
//                         Top <span className="text-orange-600">Destinos</span>{" "}
//                         Para Tí
//                     </SectionHeading>

//                     <div className="flex items-center gap-x-2">
//                         <div className="w-12 h-12 rounded-full border-2 flex items-center justify-center hover:cursor-pointer">
//                             {icons.backArrow}
//                         </div>
//                         <div className="w-12 h-12 rounded-full border-2 flex items-center justify-center hover:cursor-pointer">
//                             {icons.forwardArrow}
//                         </div>
//                     </div>
//                 </div>

//                 <div className="flex flex-wrap gap-6">
//                     {destinations.map((dest, i) => (
//                         <div
//                             key={i}
//                             className={`p-5 rounded-2xl text-white basis-0 grow min-w-60 @container ${dest.color}`}
//                         >
//                             <div className="flex flex-col gap-6 @min-xl:flex-row">
//                                 <div className="relative basis-0 grow">
//                                     <Image
                                        
//                                         src={dest.image}
//                                         alt=""
//                                         className="aspect-square w-full object-center object-cover rounded-2xl"
//                                         width={350} height={350} 
//                                     />

//                                     <div className="absolute top-3 left-3 px-4 py-2 rounded-md bg-slate-800/70 text-white">
//                                         <span className="text-2xl font-semibold">
//                                              <h6>Desde</h6>
//                                             {dest.price}
//                                         </span>{" "}
//                                         / Persona
//                                     </div>
//                                 </div>

//                                 <div className="basis-0 grow">
//                                     <h3 className="text-2xl font-semibold mb-6">
//                                         {dest.title}
//                                     </h3>

//                                     <div className="flex items-center mb-2">
//                                         {icons.location}
//                                         <span>{dest.location}</span>
//                                     </div>

//                                     <button className="bg-white text-black border-black px-6 py-3 rounded-md hover:cursor-pointer hover:bg-slate-200 duration-300">
//                                         Explora Mas
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </Container>

//             <div className="w-full bg-orange-600 h-6 mt-24">

//             </div>
//         </section>
//     );
// }

'use client';

import React, { useRef } from 'react';
import Container from './Container';
import HeadingLabel from './HeadingLabel';
import icons from '../icons';
import SectionHeading from './SectionHeading';
import Image from 'next/image';

export default function FeaturedDestinations() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = container.offsetWidth * 0.9;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const destinations = [
    {
      image: '/images/cartagena.jpeg',
      title: 'Cartagena',
      price: '$699.000',
      location: 'Bolivar, Colombia',
      color: 'bg-amber-600',
    },
    {
      image: '/images/isla_margarita.jpeg',
      title: 'Isla Margarita',
      price: "$1'200.000",
      location: 'Venezuela',
      color: 'bg-sky-600',
    },
    {
      image: '/images/tour_santa_elena.jpeg',
      title: 'Tour Santa Elena',
      price: '$200.000',
      location: 'Santa Elena, Medellin',
      color: 'bg-emerald-600',
    },
    {
      image: '/images/paris.jpg',
      title: 'Paris',
      price: "$3'699.000",
      location: 'Paris, Francia',
      color: 'bg-amber-600',
    },
  ];

  return (
    <section className="pt-40 bg-[url('/images/destinations-bg.jpg')] bg-cover bg-center relative isolate">
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-b from-white to-white/55 from-30% -z-10" />
      <Container>
        <HeadingLabel text="Featured" />

        <div className="flex flex-wrap items-center justify-between gap-6 mb-6">
          <SectionHeading>
            Top <span className="text-orange-600">Destinos</span> Para Tí
          </SectionHeading>

          <div className="flex items-center gap-x-2">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border-2 flex items-center justify-center hover:cursor-pointer"
            >
              {icons.backArrow}
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border-2 flex items-center justify-center hover:cursor-pointer"
            >
              {icons.forwardArrow}
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto px-4 pb-4 scroll-smooth hide-horizontal-scrollbar"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {destinations.map((dest, i) => (
            <div
              key={i}
              className={`flex-shrink-0 w-[80vw] sm:w-[290px] p-5 rounded-2xl text-white snap-start ${dest.color}`}
            >
              <div className="flex flex-col gap-6">
                <div className="relative">
                  <Image
                    src={dest.image}
                    alt={dest.title}
                    className="aspect-square w-full object-center object-cover rounded-2xl"
                    width={350}
                    height={350}
                  />
                  <div className="absolute top-3 left-3 px-4 py-2 rounded-md bg-slate-800/70 text-white">
                    <span className="text-2xl font-semibold">
                      <h6 className="inline">Desde</h6> {dest.price}
                    </span>{' '}
                    / Persona
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-2">{dest.title}</h3>
                  <div className="flex items-center mb-4">
                    {icons.location}
                    <span>{dest.location}</span>
                  </div>
                  <button className="bg-white text-black border-black px-6 py-3 rounded-md hover:cursor-pointer hover:bg-slate-200 duration-300">
                    Explora Más
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <div className="w-full bg-orange-600 h-6 mt-24"></div>
    </section>
  );
}
