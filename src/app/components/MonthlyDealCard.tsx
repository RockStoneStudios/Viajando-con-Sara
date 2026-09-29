import type { MonthlyDeal } from "@/data/diasDeSol";

type Props = MonthlyDeal;

export default function MonthlyDealCard({ name, price, days, gradient }: Props) {
    const formattedPrice = new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
    }).format(price);

    const waLink = `https://wa.me/573004526484?text=${encodeURIComponent(
        `Hola, quiero información sobre ${name}`
    )}`;

    return (
        <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
        >
            {/* Bloque con gradiente */}
            <div
                className="w-full aspect-square flex items-center justify-center px-3"
                style={{ background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})` }}
            >
                <span className="text-white font-black text-base sm:text-lg uppercase tracking-tight text-center drop-shadow-md leading-tight">
                    {name}
                </span>
            </div>

            <div className="bg-[#E36414] text-white text-center py-2 px-2">
                <h3 className="font-bold text-[11px] sm:text-xs uppercase tracking-wide leading-tight">
                    {name}
                </h3>
            </div>

            <div className="bg-[#1E3A8A] text-white text-center py-2">
                <p className="text-base sm:text-lg font-extrabold">{formattedPrice}</p>
            </div>

            <div className="bg-white text-center py-2 px-2 border-t border-gray-200">
                <p className="text-[10px] sm:text-[11px] text-gray-700 uppercase font-medium">
                    {days}
                </p>
            </div>
        </a>
    );
}