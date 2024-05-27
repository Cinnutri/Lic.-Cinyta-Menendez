import React, { useState } from "react";
import Image from "next/image";
import tesimonial01 from "@../assets/testimonial/testimonial-01.jpg";
import tesimonial02 from "@../assets/testimonial/testimonial-02.jpg";
import tesimonial03 from "@../assets/testimonial/testimonial-03.jpg";

const testimonials = [
  {
    text: "En marzo del 2023, me contacte con Cintya porque queria bajar de peso y se me estaba haciendo muy dificil lograrlo. Ella me armo un plan, en base a mis objetivos y actividades diarias, con el que estoy logrando ordenar mis hábitos alimenticios y cambiar mi calidad de vida. En este año de tratamiento he logrado bajar de peso, no solo por mi esfuerzo y compromiso, sino también, gracias al apoyo y guia de Cintya a nivel nutricional y personal",
    name: "Rosana Bentancourt",
    image: tesimonial01,
  },
  {
    text: "La primera vez llegué a ella con el objetivo de incrementar la performance en mi entrenamiento de Crossfit, y la diferencia fue muy notoria, tanto en rendimiento, como en los cambios en mi cuerpo, acompañados de pérdida de peso con ganancia de masa muscular. Años después acudí a ella con el objetivo de ponerme en forma luego de un largo periodo de inactividad. A razón de pocos meses logramos un notorio aumento de masa muscular con pérdida de grasa y reducción de peso. También tuve la oportunidad de realizar un curso de Nutrición Deportiva, donde ella fue la docente y pude corroborar tanto sus grandes conocimientos, como su vocación para transmitirlos.",
    name: "Alfredo Arias",
    image: tesimonial02,
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 2 >= testimonials.length ? 0 : prevIndex + 2
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? testimonials.length - (testimonials.length % 2 === 0 ? 2 : 1)
        : prevIndex - 2
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + 2
  );
  return (
    <div className="flex flex-col items-center justify-center bg-green-500 p-4">
      <div className="my-4">
        <p className="text-white text-4xl font-bold">
          Testimonios de nuestros clientes
        </p>
      </div>
      <div className="relative w-full flex items-center justify-center">
        <button
          onClick={handlePrev}
          className="absolute left-0 text-white font-bold"
        >
          Anterior
        </button>
        <div className="flex flex-row gap-x-8 mx-8 mb-4">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center max-w-[700px] min-h-[400px] justify-between"
            >
              <p className="text-white text-center">{testimonial.text}</p>
              <div className="mt-2 text-center">
                <p className="text-white font-bold">{testimonial.name}</p>
                <Image src={testimonial.image} alt={testimonial.name} />
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="absolute right-0 text-white font-bold"
        >
          Siguiente
        </button>
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
