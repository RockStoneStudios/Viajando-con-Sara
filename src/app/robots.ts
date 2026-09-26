import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://www.viajaconsara.com";

    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: [
                    "/api/",           // Bloquea rutas de API
                    "/admin/",         // Bloquea panel de admin (si lo tienes)
                    "/_next/",         // Bloquea archivos internos de Next.js
                    "/private/",       // Bloquea rutas privadas
                ],
            },
            {
                userAgent: "GPTBot",   // Bloquea a ChatGPT de rastrear tu contenido
                disallow: "/",
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl,
    };
}