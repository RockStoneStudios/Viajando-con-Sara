import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.viajaconsara.com";

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0,
        },
        // Descomenta y edita estas líneas cuando tengas páginas individuales por destino
        // {
        //     url: `${baseUrl}/destinos/cartagena`,
        //     lastModified: new Date(),
        //     changeFrequency: "monthly",
        //     priority: 0.8,
        // },
        // {
        //     url: `${baseUrl}/destinos/covenas`,
        //     lastModified: new Date(),
        //     changeFrequency: "monthly",
        //     priority: 0.8,
        // },
        // {
        //     url: `${baseUrl}/destinos/eje-cafetero`,
        //     lastModified: new Date(),
        //     changeFrequency: "monthly",
        //     priority: 0.8,
        // },
        // {
        //     url: `${baseUrl}/servicios/pasaporte`,
        //     lastModified: new Date(),
        //     changeFrequency: "monthly",
        //     priority: 0.7,
        // },
    ];
}