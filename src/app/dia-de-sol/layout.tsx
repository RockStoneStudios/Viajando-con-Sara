import type { Metadata } from "next";

export const metadata: Metadata = {
    // ============================================
    // TÍTULO Y DESCRIPCIÓN
    // ============================================
    title: "Días de Sol | Promociones de Octubre - Viaja con Sara",
    description:
        "Descubre las promociones del mes de Viaja con Sara: 20 destinos turísticos desde $119.000. Guatapé, Santorini, Termales, Jericó y más. Domingos y festivos. ¡Reserva por WhatsApp!",

    // ============================================
    // PALABRAS CLAVE
    // ============================================
    keywords: [
        "promociones turísticas octubre",
        "días de sol viaja con sara",
        "paquetes turísticos Colombia",
        "viajes domingos y festivos",
        "Guatapé desde Medellín",
        "Santorini Colombia",
        "Termales Santa Rosa",
        "Jericó tours",
        "Río Claro",
        "Kanaloa",
        "planes turísticos Antioquia",
        "ofertas viajes Medellín",
        "promociones octubre 2026",
        "viajes económicos Colombia",
        "paquetes todo incluido",
    ],

    // ============================================
    // AUTOR Y MARCA
    // ============================================
    authors: [{ name: "Viaja con Sara" }],
    creator: "Viaja con Sara",
    publisher: "Viaja con Sara",

    // ============================================
    // URL CANÓNICA
    // ============================================
    alternates: {
        canonical: "https://www.viajaconsara.com/dia-de-sol",
    },

    // ============================================
    // OPEN GRAPH (Facebook, WhatsApp, LinkedIn)
    // ============================================
    openGraph: {
        type: "website",
        locale: "es_CO",
        url: "https://www.viajaconsara.com/dia-de-sol",
        siteName: "Viaja con Sara",
        title: "Días de Sol | Promociones de Octubre - Viaja con Sara",
        description:
            "20 destinos turísticos desde $119.000. Domingos y festivos. Guatapé, Santorini, Termales, Jericó y más. ¡Reserva ya!",
        images: [
            {
                url: "/images/octubre.jpeg",
                width: 1200,
                height: 630,
                alt: "Promociones Días de Sol - Octubre - Viaja con Sara",
            },
        ],
    },

    // ============================================
    // TWITTER CARDS
    // ============================================
    twitter: {
        card: "summary_large_image",
        title: "Días de Sol | Promociones de Octubre - Viaja con Sara",
        description:
            "20 destinos desde $119.000. Domingos y festivos. ¡Reserva por WhatsApp!",
        images: ["/images/octubre.jpeg"],
    },

    // ============================================
    // ROBOTS
    // ============================================
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function DiasDeSolLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}