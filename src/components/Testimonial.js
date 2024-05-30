import React from "react";
import Image from "next/image";
import testimonialMatias from "@../assets/testimonial/testimonial-Matias.jpg"
import tesimonialFabricio from "@../assets/testimonial/testimonial-Fabricio.jpg";
import tesimonial03 from "@../assets/testimonial/testimonial-03.jpg";

const testimonials = [
  {
    text: "Cintya en lo personal fuiste una gran ayuda en mi mejora, tu gran trabajo se noto físicamente y en los entrenamientos ya que aumente kilos de músculo y con eso aumente los pesos que podía mover, Con tus consultas me sentí muy cómodo por tu amabilidad y la gran atención que me has dado. Con respecto a la dieta, se me hizo fácil de seguir por tus indicaciones y la ayuda que me has dado. Las mejoras se notan claramente en las fotos que has tomado en las consultas y el como día a día podría mejorar las cargas",
    name: "Matias de los Santos",
    image: testimonialMatias,
  },
  {
    text: "Mi experiencia con cintya a sido muy buena, es mi nutriciónista hace 4 años si mal no recuerdo, en las consultas siempre me he sentido muy cómodo y siempre a evacuado mis dudas sobre la alimentación. Yo acudí a ella porque quería bajar de peso y fue la mejor decisión que tomé, baje de peso rápidamente siguiendo el plan de alimentación que me pacto. Luego de que logramos bajar el peso que tenia que bajar, me cambio el plan para aumentar la masa muscular y la aumente mucho, ya que mi objetivo era competir en fisicoculturismo y así pude lograrlo gracias a los planes alimenticios qué me puso. Le estoy muy agradecido por la ayuda y el apoyo que me ha dado y me sigue brindando.",
    name: "Fabricio",
    image: tesimonialFabricio,
  },
  {
    text: "Acudimos a Cintya hace 3 años ya que necesitábamos orientación en nuestra alimentación. Yo concurrí con problemas gástricos y renales y mi esposa para un control y recomendación en su alimentación. Gracias a las indicaciones y orientación de Cintya, superé los problemas gástricos y renales con el paso del tiempo y pude alimentarme correctamente. Mi esposa consiguió la ayuda que buscaba en su orden de alimentación y lo más importante es que toda esa ayuda y guía es con método natural y totalmente saludable.",
    name: "Germán y Ana",
    image: tesimonial03,
  },
  {
    text: "Comencé el tratamiento con Cintya en junio de 2021, con un sobrepeso de más de 10kg y un porcentaje de masa muscular muy bajo, lo cual era un problema ya que practico triatlón. En diciembre del mismo año había bajado 13kg aumentado la masa muscular. Hoy en dia sigo con controles mensuales para mantenerme en peso, pero tambien, como apoyo cuando tengo competencias y necesito saber que y cuando comer. Mas alla de lograr los objetivos fisicos, me siento mejor a nivel personal y deportivo.",
    name: "Victoria Graña",
    image: tesimonial03,
  },
];

const Testimonial = () => {
  return (
    <div className="p-4 flex flex-col items-center  text-[#333] font-[sans-serif] shadow-custom">
      <div className="my-4">
        <p className="text-4xl font-bold text-center">
          Testimonios de nuestros clientes
        </p>
      </div>
      <div className="w-11/12 flex flex-col gap-y-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`
            flex gap-4 p-4 bg-green-500 rounded-md  text-[#333] font-[sans-serif] shadow-custom
            medium:flex-row medium:items-center medium:justify-between medium:h-[400px]
            xSmall:flex-col xSmall:items-center xSmall:justify-between
            `}
          >
            {index % 2 === 0 ? (
              <>
                <div className="flex flex-col items-center text-center medium:w-8/12 meium:h-full">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={300}
                    height={200}
                    className=""
                  />
                </div>
                <div className="flex flex-col items-center meium:h-full medium:w-4/6">
                  <p className="text-white font-bold text-center">{testimonial.name}</p>
                  <p className="text-white text-center">{testimonial.text}</p>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col items-center meium:h-full medium:w-4/6">
                  <p className="text-white font-bold text-center">{testimonial.name}</p>
                  <p className="text-white text-center">{testimonial.text}</p>
                </div>
                <div className="flex flex-col items-center text-center medium:w-8/12 meium:h-full">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={300}
                    height={200}
                    className=""
                  />
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

{
  /* <div className="flex flex-col items-center">
          <p className="text-white">
            En marzo del 2023, me contacte con Cintya porque queria bajar de
            peso y se me estaba haciendo muy dificil lograrlo. Ella me armo un
            plan, en base a mis objetivos y actividades diarias, con el que
            estoy logrando ordenar mis hábitos alimenticios y cambiar mi calidad
            de vida. En este año de tratamiento he logrado bajar de peso, no
            solo por mi esfuerzo y compromiso, sino también, gracias al apoyo y
            guia de Cintya a nivel nutricional y personal
          </p>
          <div>
            <p className="text-white font-bold">Rosana Bentancourt</p>
            <Image src={tesimonial01} />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-white">
            Comencé el tratamiento con Cintya en junio de 2021, con un sobrepeso
            de más de 10kg y un porcentaje de masa muscular muy bajo, lo cual
            era un problema ya que practico triatlón. En diciembre del mismo año
            había bajado 13kg aumentado la masa muscular. Hoy en dia sigo con
            controles mensuales para mantenerme en peso, pero tambien, como
            apoyo cuando tengo competencias y necesito saber que y cuando comer.
            Mas alla de lograr los objetivos fisicos, me siento mejor a nivel
            personal y deportivo.
          </p>
          <div>
            <p className="text-white font-bold">Victoria Graña</p>
            <Image src={tesimonial02} />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-white">
            Acudimos a Cintya hace 3 años ya que necesitábamos orientación en
            nuestra alimentación. Yo concurrí con problemas gástricos y renales
            y mi esposa para un control y recomendación en su alimentación.
            Gracias a las indicaciones y orientación de Cintya, superé los
            problemas gástricos y renales con el paso del tiempo y pude
            alimentarme correctamente. Mi esposa consiguió la ayuda que buscaba
            en su orden de alimentación y lo más importante es que toda esa
            ayuda y guía es con método natural y totalmente saludable.
          </p>
          <div>
            <p className="text-white font-bold">Germán y Ana</p>
            <Image src={tesimonial03} />
          </div>
        </div> */
}
