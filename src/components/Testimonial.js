import React from "react";
import Image from "next/image";
import testimonialMatias from "@../assets/testimonial/testimonial-Matias.jpg";
import tesimonialFabricio from "@../assets/testimonial/testimonial-Fabricio.jpg";
import testimonialNatalia from "@../assets/testimonial/testimonial-Rubia.jpg";

const testimonials = [
  {
    text: "Cintya en lo personal fuiste una gran ayuda en mi mejora, tu gran trabajo se noto físicamente y en los entrenamientos ya que aumente kilos de músculo y con eso aumente los pesos que podía mover, Con tus consultas me sentí muy cómodo por tu amabilidad y la gran atención que me has dado. Con respecto a la dieta, se me hizo fácil de seguir por tus indicaciones y la ayuda que me has dado. Las mejoras se notan claramente en las fotos que has tomado en las consultas y el como día a día podría mejorar las cargas",
    name: "MATIAS DE LOS SANTOS",
    image: testimonialMatias,
  },
  {
    text: "Mi experiencia con cintya a sido muy buena, es mi nutriciónista hace 4 años si mal no recuerdo, en las consultas siempre me he sentido muy cómodo y siempre a evacuado mis dudas sobre la alimentación. Yo acudí a ella porque quería bajar de peso y fue la mejor decisión que tomé, baje de peso rápidamente siguiendo el plan de alimentación que me pacto. Luego de que logramos bajar el peso que tenia que bajar, me cambio el plan para aumentar la masa muscular y la aumente mucho, ya que mi objetivo era competir en fisicoculturismo y así pude lograrlo gracias a los planes alimenticios qué me puso. Le estoy muy agradecido por la ayuda y el apoyo que me ha dado y me sigue brindando.",
    name: "FABRICIO",
    image: tesimonialFabricio,
  },
  {
    text: "Quería contarte que venimos súper bien con el plan, al hacerlo en pareja se nos hizo más fácil, las sugerencias de comida nos parecen re sencillas de hacer y con poca elaboración que es lo que más estábamos buscando en nuestro caso por un tema de tiempos, venimos re contentos con los cambios y eso que nos damos nuestros permitidos a veces, empezamos hace poco pero ya lo re notamos, las fotos hablan por si solas y nosotros nos sentimos mucho mejor en cuanto a salud y cambios de habitos, poder tomar consciencia de lo que comemos es algo que nos ayudó a cambiar la mentalidad. Te queremos agradecer pila Por el apoyo y la motivación y esto recién empieza. Gracias gracias!",
    name: "NATALIA PENA",
    image: testimonialNatalia,
  },
];

const Testimonial = () => {
  return (
    <div className="p-4 flex flex-col items-center">
      <div className="my-6">
        <p className="font-bold text-center font-serif text-2xl large:text-5xl large:mt-10 large:mb-20">
          TESTIMONIOS DE NUESTROS CLIENTES
        </p>
      </div>
      <div className="flex flex-col items-center gap-y-8 xSmall:w-full medium:w-10/12 xLarge:w-8/12">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`
            flex gap-4 p-4 rounded-md  text-[#333] font-[sans-serif] shadow-custom
            xLarge:flex-row xLarge:items-center xLarge:justify-between xLarge:mb-10
            large:flex-row large:items-center large:justify-between large:mb-10 large:w-[54rem]
            xSmall:flex-col xSmall:items-center xSmall:justify-between
            `}
          >
            {index % 2 === 0 ? (
              <>
                <div className="flex flex-col items-center flex-wrap content-center">
                  <div>
                    <p className="font-bold text-center mb-8 text-[#4CA649] font-serif xSmall:text-3xl medium:text-4xl xLarge:text-5xl">
                      {testimonial.name}
                    </p>
                  </div>
                  <div
                    className="
                  flex 
                  xSmall:flex-col items-center
                  large:flex-row large:items-start
                  xLarge:flex-row xLarge:items-start
                  "
                  >
                    <div className="xSmall:mb-6 large:w-10/12 xLarge:w-8/12">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="rounded-md"
                      />
                    </div>
                    <div className="xSmall:w-full large:w-4/6 xLarge:h-full xLarge:w-4/6">
                      <p
                        className="
                      text-center font-roboto font-light text-black
                      large:text-lg large:px-8
                      xLarge:px-8 xLarge:text-lg
                      "
                      >
                        {testimonial.text}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col items-center flex-wrap content-center">
                  <div>
                    <p className="font-bold text-center mb-8 text-[#4CA649] font-serif xSmall:text-3xl medium:text-4xl xLarge:text-5xl">
                      {testimonial.name}
                    </p>
                  </div>
                  <div
                    className="
                    flex 
                    xSmall:flex-col items-center
                    large:flex-row large:items-center large:justify-center
                    "
                  >
                    <div className="xSmall:w-full large:w-4/6 xLarge:h-full xLarge:w-4/6">
                      <p
                        className="
                      text-center font-roboto font-light text-black
                      large:text-lg  large:px-8
                      xLarge:px-8 xLarge:text-lg
                      "
                      >
                        {testimonial.text}
                      </p>
                    </div>
                    <div className="xSmall:mb-6 large:w-10/12 xLarge:w-8/12">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
