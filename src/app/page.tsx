import Benefits from "./components/Benefits";
import CTA from "./components/CTA";
import FeaturedDestinations from "./components/FeaturedDestinations";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MoreOffers from "./components/MoreOffers";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Products from "./components/Products";
import Reviews from "./components/Reviews";
import ScrollingOffers from "./components/ScrollingOffers";
import Social from "./components/Social";
import Superheader from "./components/Superheader";

export default function Home() {
    return (
        <div className="">
            {/* <Superheader /> */}
            <Navbar />
            <Hero />
            <Benefits />
            <FeaturedDestinations />
            <Offers />
            <MoreOffers />
            <ScrollingOffers />
            <Products />
            <Reviews />
            <Social />
            <CTA />
            <Footer />
            <a
                href="https://wa.me/573004526484"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-colors duration-300"
                title="Chatea con nosotros en WhatsApp"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                >
                    <path d="M20.52 3.48A11.8 11.8 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.18 1.6 6.02L0 24l6.25-1.64A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12c0-3.19-1.24-6.18-3.48-8.52zM12 21.8a9.8 9.8 0 0 1-5.01-1.38l-.36-.21l-3.7.97l.99-3.6l-.23-.37A9.78 9.78 0 0 1 2.2 12c0-5.4 4.39-9.8 9.8-9.8c2.62 0 5.08 1.02 6.93 2.87A9.78 9.78 0 0 1 21.8 12c0 5.4-4.39 9.8-9.8 9.8zm5.04-7.63c-.28-.14-1.65-.82-1.9-.91c-.26-.1-.45-.14-.64.14c-.19.28-.73.91-.9 1.1c-.17.19-.34.21-.62.07c-.28-.14-1.17-.43-2.22-1.37c-.82-.73-1.37-1.63-1.53-1.91c-.16-.28-.02-.43.12-.57c.13-.13.28-.34.42-.51c.14-.17.19-.28.28-.47c.09-.19.05-.35-.02-.5c-.07-.14-.64-1.54-.88-2.12c-.23-.56-.47-.49-.64-.5l-.55-.01c-.19 0-.5.07-.76.35c-.26.28-1 1-1 2.43c0 1.43 1.02 2.81 1.16 3.01c.14.19 2.02 3.09 4.89 4.33c.68.29 1.2.46 1.61.58c.68.22 1.3.19 1.79.11c.55-.08 1.65-.67 1.89-1.31c.23-.65.23-1.2.16-1.31c-.07-.12-.26-.19-.55-.33z"/>
                </svg>
                </a>
                        </div>
    );
}
