export type MonthlyDeal = {
    id: string;
    name: string;
    price: number;
    days: string;
    gradient: [string, string];
};

export const diasDeSol = {
    month: "Octubre",
    monthSubtitle: "Días de Sol",
    rnt: "174384",
    deals: [
        { id: "florida-tropical", name: "Florida Tropical", price: 155000, days: "Domingos y Festivos", gradient: ["#3b82f6", "#06b6d4"] },
        { id: "rio-claro",        name: "Río Claro",        price: 199000, days: "Domingos y Festivos", gradient: ["#10b981", "#059669"] },
        { id: "kanaloa",          name: "Kanaloa",          price: 129000, days: "Domingos y Festivos", gradient: ["#06b6d4", "#0891b2"] },
        { id: "paraiso-sta-fe",   name: "Paraíso Sta. Fe",  price: 139000, days: "Domingos y Festivos", gradient: ["#3b82f6", "#1d4ed8"] },
        { id: "jardin",           name: "Jardín",           price: 129000, days: "Domingos y Festivos", gradient: ["#84cc16", "#65a30d"] },
        { id: "el-molino",        name: "El Molino",        price: 129000, days: "Domingos y Festivos", gradient: ["#0ea5e9", "#0284c7"] },
        { id: "el-encanto",       name: "El Encanto",       price: 139000, days: "Domingos y Festivos", gradient: ["#14b8a6", "#0d9488"] },
        { id: "alejandria",       name: "Alejandría",       price: 139000, days: "Domingos",            gradient: ["#06b6d4", "#0369a1"] },
        { id: "cisneros",         name: "Cisneros",         price: 139000, days: "Domingos",            gradient: ["#f59e0b", "#d97706"] },
        { id: "ruta-lechera",     name: "Ruta Lechera",     price: 149000, days: "Domingos y Festivos", gradient: ["#84cc16", "#4d7c0f"] },
        { id: "santorini",        name: "Santorini",        price: 149000, days: "Domingos y Festivos", gradient: ["#3b82f6", "#1e40af"] },
        { id: "los-colores",      name: "Los Colores",      price: 140000, days: "Domingo 11",          gradient: ["#ec4899", "#be185d"] },
        { id: "villa-laura",      name: "Villa Laura",      price: 189000, days: "Domingo 11",          gradient: ["#3b82f6", "#0369a1"] },
        { id: "jerico",           name: "Jericó",           price: 149000, days: "Domingo 11",          gradient: ["#6366f1", "#4338ca"] },
        { id: "vuelta-oriente",   name: "Vuelta Oriente",   price: 139000, days: "Domingo 11",          gradient: ["#8b5cf6", "#6d28d9"] },
        { id: "termales-s-rosa",  name: "Termales S. Rosa", price: 219000, days: "Lunes 12",            gradient: ["#ef4444", "#b91c1c"] },
        { id: "guatape",          name: "Guatapé",          price: 129000, days: "Diarias",             gradient: ["#0ea5e9", "#1e40af"] },
        { id: "gaitero",          name: "Gaitero",          price: 125000, days: "Sábados y Domingos",  gradient: ["#14b8a6", "#0f766e"] },
        { id: "citytour-c13",     name: "CityTour y C. 13", price: 119000, days: "Diarias",             gradient: ["#f97316", "#c2410c"] },
        { id: "h-napoles",        name: "H. Nápoles",       price: 299000, days: "Miércoles a Domingos",gradient: ["#10b981", "#047857"] },
    ],
};