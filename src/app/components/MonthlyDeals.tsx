import MonthlyDealCard from "./MonthlyDealCard";
import { diasDeSol } from "@/data/diasDeSol";

export default function MonthlyDeals() {
    const { month, monthSubtitle, rnt, deals } = diasDeSol;

    return (
        <section
            id="promociones"
            className="w-full py-12 md:py-16 bg-gradient-to-b from-sky-100 via-sky-50 to-white"
        >
            <div className="container mx-auto px-4">
                {/* Encabezado */}
                <div className="text-center mb-10">
                    <p className="text-xs sm:text-sm tracking-widest text-gray-500 uppercase font-semibold">
                        Viaja con Sara · RNT {rnt}
                    </p>
                    <h2 className="mt-3 text-5xl md:text-7xl font-black text-orange-500 tracking-tight uppercase">
                        {month}
                    </h2>
                    <p className="text-2xl md:text-4xl font-extrabold text-blue-900 uppercase">
                        {monthSubtitle}
                    </p>
                    <p className="mt-4 text-gray-600 italic">
                        Tu próxima aventura empieza aquí ✈️
                    </p>
                </div>

                {/* Grid de tarjetas */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                    {deals.map((deal) => (
                        <MonthlyDealCard
                            key={deal.id}
                            {...deal}
                            gradient={deal.gradient as [string, string]}
                        />
                    ))}
                </div>

                {/* CTA final */}
                <div className="mt-10 text-center">
                    <a
                        href="https://wa.me/573004526484"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition shadow-lg"
                    >
                        Reserva por WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}