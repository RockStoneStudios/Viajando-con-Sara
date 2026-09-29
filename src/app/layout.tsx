import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: {
        default: "Viaja con Sara | Paquetes Turísticos a Colombia y el Mundo",
        template: "%s | Viaja con Sara"
    },
    description: "Descubre los mejores paquetes turísticos a la Costa, Eje Cafetero y destinos internacionales. Más de 6 años de experiencia, asesoría 24/7 y gestión de pasaporte. ¡Viaja con confianza! viaja con Sara",
    keywords: [
        "paquetes turísticos Colombia",
        "viajes a la costa colombiana",
        "eje cafetero tours",
        "gestión de pasaporte",
        "viaja con sara",
        "turismo en colombia",
        "cartagena",
        "coveñas",
        "santa marta",
        "san andres",
        "punta cana",
        "paris",
        "isla margarita"
    ],
    authors: [{ name: "Viaja con Sara" }],
    creator: "Viaja con Sara",
    publisher: "Viaja con Sara",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    // 🔽 ICONOS (FAVICON) 🔽
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "any" },
            { url: "/icon0.svg", type: "image/svg+xml" },
            { url: "/icon1.png", sizes: "512x512", type: "image/png" },
        ],
        apple: [
            { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
        ],
    },
    manifest: "/manifest.json",

    // 🔽 VERIFICACIÓN DE GOOGLE 🔽
    verification: {
        google: "6ZZj9grznlQUdD-Zl1_UMczXHbnj7UgE1hDRbmgFkk8",
    },

    openGraph: {
        type: "website",
        locale: "es_CO",
        url: "https://www.viajaconsara.com/",
        siteName: "Viaja con Sara",
        title: "Viaja con Sara | Paquetes Turísticos a Colombia y el Mundo",
        description: "Explora destinos impresionantes con precios competitivos. Especialistas en la Costa, Eje Cafetero, gestión de pasaporte y experiencias personalizadas.",
        images: [
            {
                url: "/images/sara.jpg",
                width: 1200,
                height: 630,
                alt: "Viaja con Sara - Paquetes Turísticos a Colombia",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Viaja con Sara | Paquetes Turísticos a Colombia y el Mundo",
        description: "Paquetes turísticos a la Costa, Eje Cafetero y más. Asesoría 24/7 y gestión de pasaporte. ¡Tu viaje soñado comienza aquí!",
        images: ["/images/sara.jpg"],
    },

    alternates: {
        canonical: "https://www.viajaconsara.com/",
    },

    metadataBase: new URL("https://www.viajaconsara.com"),
    applicationName: "Viaja con Sara",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className={`antialiased`}>
                {children}
            </body>
        </html>
    );
}