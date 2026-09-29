import type { Metadata } from "next";
import MonthlyDeals from "../components/MonthlyDeals";

export const metadata: Metadata = {
    title: "Días de Sol | Promociones del Mes",
    description:
        "Descubre las promociones del mes de Viaja con Sara. Paquetes turísticos a los mejores destinos de Colombia con precios desde $119.000. ¡Reserva ya!",
    keywords: [
        "promociones turísticas",
        "paquetes turísticos octubre",
        "días de sol",
        "viaja con sara",
        "ofertas viajes Colombia",
    ],
    openGraph: {
        title: "Días de Sol | Promociones del Mes",
        description:
            "Paquetes turísticos a los mejores destinos de Colombia. Precios desde $119.000.",
        url: "https://www.viajaconsara.com/dias-de-sol",
        type: "website",
    },
    alternates: {
        canonical: "https://www.viajaconsara.com/dias-de-sol",
    },
};

export default function DiasDeSolPage() {
    return (
        <main className="min-h-screen bg-sky-50">
            <MonthlyDeals />
        </main>
    );
}