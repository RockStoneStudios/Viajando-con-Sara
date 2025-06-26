import React from "react";
import SectionHeading from "./SectionHeading";
import PrimaryButton from "./PrimaryButton";
import icons from "../icons";

export default function CTA() {
    return (
        <section className="pb-20 bg-gradient-to-b from-yellow-200 to-yellow-300 from-60%">
            <div className="flex items-end justify-between">
                <div>
                    <img src="/images/cta-1.jpg" alt="" className="max-w-100 max-h-80 object-cover object-center" />
                </div>

                <div className="flex flex-col items-center text-center">
                    <SectionHeading>
                        Unete a nuestra  <span className="text-orange-600">Gran Aventura</span>
                    </SectionHeading>

                    <p className="max-w-2xl mb-4">
                       Viaja con Sara te lleva a los destinos más fascinantes, con itinerarios personalizados y atención dedicada en cada paso.
                        Vive la emoción de explorar playas paradisíacas, 
                       ciudades llenas de cultura y paisajes inolvidables. ¡Tu viaje soñado comienza aquí!"
                    </p>

                    <PrimaryButton>
                        <div className="flex items-center gap-x-2 fill-white">
                            Empezar
                            {icons.externalLink}
                        </div>
                    </PrimaryButton>
                </div>

                <div>
                    <img src="/images/cta-2.jpg" alt="" className="max-w-100 max-h-80 object-cover object-center" />
                </div>
            </div>
        </section>
    );
}
