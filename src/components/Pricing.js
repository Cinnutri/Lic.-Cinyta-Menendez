import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import FirstPricing from "../../public/assets/pricing/90dias.png";
import SecondPricing from "../../public/assets/pricing/30D.png";
import ThirdPricing from "../../public/assets/pricing/VEGETARIANO.png";
import image30dias from "../../public/assets/pricing/image30dias.jpg";
import plateVeggie from "../../public/assets/pricing/platoComidaVeggie.jpg";
import Image from "next/image";

const Pricing = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const openModal1 = () => setIsOpen1(true);
  const closeModal1 = () => setIsOpen1(false);
  const openModal2 = () => setIsOpen2(true);
  const closeModal2 = () => setIsOpen2(false);
  const openModal3 = () => setIsOpen3(true);
  const closeModal3 = () => setIsOpen3(false);

  useEffect(() => {
    if (isOpen1 || isOpen2 || isOpen3) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen1, isOpen2, isOpen3]);

  return (
    <div className="flex items-center justify-center mt-12 gap-4 flex-col md:flex-row">
      {/* Pricing Card 1 */}
      <Card className="w-full max-w-[26rem] flex flex-col">
        <CardHeader floated={false} color="blue-gray">
          <Image src={FirstPricing} alt="Reto Fenix" />
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        </CardHeader>
        <CardBody className="flex-grow">
          <div className="mb-3 flex items-center justify-between">
            <Typography variant="h5" color="green" className="font-medium">
              PLAN 90 DÍAS
            </Typography>
            <Typography
              color="blue-gray"
              className="flex items-center gap-1.5 font-normal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-mt-0.5 h-5 w-5 text-yellow-700"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
              5.0
            </Typography>
          </div>
          <Typography color="gray">
            Cómo armar comidas correctamente balanceadas para que lo adaptes a
            tus gustos y tu estilo de vida sin pasar hambre ni sufrir. Adquirir
            hábitos sostenibles en el tiempo y cambiar tu relación con la
            comida.
          </Typography>
          <Typography
            variant="h1"
            color="black"
            className="mt-6 flex justify-center gap-1 text-7xl font-normal"
          >
            <span className="mt-2 text-4xl">$</span>29{" "}
            <span className="self-end text-4xl">/mo</span>
          </Typography>
        </CardBody>
        <CardFooter className="pt-3">
          <Button size="lg" color="green" fullWidth={true} onClick={openModal1}>
            Reserve
          </Button>
        </CardFooter>
      </Card>

      {/* Pricing Card 2 */}
      <Card className="w-full max-w-[26rem]  flex flex-col">
        <CardHeader floated={false} color="blue-gray">
          <Image src={SecondPricing} alt="Another Program" />
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        </CardHeader>
        <CardBody className="flex-grow">
          <div className="mb-3 flex items-center justify-between">
            <Typography variant="h5" color="green" className="font-medium">
              PLAN 30 DIAS
            </Typography>
            <Typography
              color="blue-gray"
              className="flex items-center gap-1.5 font-normal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-mt-0.5 h-5 w-5 text-yellow-700"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
              5.0
            </Typography>
          </div>
          <Typography color="gray">
            Recomposición corporal Diseñado para perder grasa y ganar masa
            muscular de manera efectiva centrándonos en la alimentación y el
            entrenamiento como también en el mindset para empezar a generar
            hábitos sostenibles en el tiempo. Educación integral para adquirir
            los conocimientos fundamentales para armar tus platos adaptada al
            objetico de ganar masa muscular y perder grasa haciendo énfasis en
            la ingesta calórica y la distribución de macronutrientes
          </Typography>
          <Typography
            variant="h1"
            color="black"
            className="mt-6 flex justify-center gap-1 text-7xl font-normal"
          >
            <span className="mt-2 text-4xl">$</span>39{" "}
            <span className="self-end text-4xl">/mo</span>
          </Typography>
        </CardBody>
        <CardFooter className="pt-3">
          <Button size="lg" color="green" fullWidth={true} onClick={openModal2}>
            Reserve
          </Button>
        </CardFooter>
      </Card>

      {/* Pricing Card 3 */}
      <Card className="w-full max-w-[26rem] flex flex-col">
        <CardHeader floated={false} color="blue-gray">
          <Image src={ThirdPricing} alt="Another Program" />
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        </CardHeader>
        <CardBody className="flex-grow">
          <div className="mb-3 flex items-center justify-between">
            <Typography variant="h5" color="green" className="font-medium">
              CONSULTA PERSONAL
            </Typography>
            <Typography
              color="blue-gray"
              className="flex items-center gap-1.5 font-normal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-mt-0.5 h-5 w-5 text-yellow-700"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
              5.0
            </Typography>
          </div>
          <Typography color="gray">
            Presencial o en línea, establecer días y horarios de agendas para
            organización.
          </Typography>
          <Typography
            variant="h1"
            color="black"
            className="mt-6 flex justify-center gap-1 text-7xl font-normal"
          >
            <span className="mt-2 text-4xl">$</span>39{" "}
            <span className="self-end text-4xl">/mo</span>
          </Typography>
        </CardBody>
        <CardFooter className="pt-3">
          <Button size="lg" color="green" fullWidth={true} onClick={openModal3}>
            Reserve
          </Button>
        </CardFooter>
      </Card>

      {/* Modal 1 */}
      {isOpen1 && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-white z-10 flex justify-between items-center mb-4 pb-2 border-b border-gray-200">
              <h3 className="text-2xl font-bold leading-6 text-green-400">
                PLAN 90 DIAS
              </h3>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={closeModal1}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-1">
                <div className="mt-4">
                  <h4 className="text-md font-medium text-gray-900">
                    Beneficios:
                  </h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                    <li>Pérdida de grasa y medidas</li>
                    <li>Reducción de inflamación y antojos</li>
                    <li>Mayor energía, concentración y salud</li>
                    <li>Mejor digestión</li>
                    <li>Reducción de estreñimiento</li>
                    <li>Aprendizaje para cambio de hábitos</li>
                    <li>
                      Técnicas para superar desafíos y mantener la motivación
                    </li>
                    <li>Nuevo mindset y relación con la comida</li>
                    <li>
                      Entrenar en casa o en el gym con una rutina adaptada a tus
                      necesidades
                    </li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="text-md font-medium text-gray-900">
                    ¿Qué incluye?
                  </h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                    <li>Recetas y orientaciones nutricionales</li>
                    <li>Rutinas para la casa o el gym</li>
                    <li>
                      Técnicas de mindset, adquisición de hábitos, técnicas de
                      relajación y cambio de relación con la comida
                    </li>
                    <li>1 llamada semanal grupal</li>
                    <li>Ingreso a la comunidad</li>
                  </ul>
                </div>
              </div>
              <div className="col-span-1">
                <div className="mt-4">
                  <h4 className="text-md font-medium text-gray-900">
                    Entregables:
                  </h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                    <li>
                      Video de bienvenida con formulario para recuento de datos,
                      medidas, fotos, etc.
                    </li>
                    <li>Guía de alimentación</li>
                    <li>Recetas</li>
                    <li>Rutinas</li>
                    <li>Técnicas mindset y psicología del cambio</li>
                  </ul>
                </div>
                <div className="flex justify-center mt-4">
                  <Image
                    src={image30dias}
                    alt="Another Program"
                    className="rounded-lg shadow-lg w-[400px]"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-evenly">
              <Button color="green" onClick={closeModal1}>
                Cerrar
              </Button>
              <Button
                color="green"
                onClick={() =>
                  (window.location.href =
                    "https://www.mercadopago.com.uy/checkout/v1/payment/redirect/e0224a1b-94dd-4a52-8ec2-b67f21cde504/payment-option-form/?source=link&preference-id=259592444-cf57d9d0-8f53-4eb8-94c9-a8fbeee46b2a&router-request-id=6ec2af8e-e86f-4f47-a3d3-048ce76957c7&initium=false&p=2d001c8f531c93c57ec3c943e3ee3acb#/")
                }
              >
                Reservar
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Modal 2 */}
      {isOpen2 && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-white z-10 flex justify-between items-center mb-4 pb-2 border-b border-gray-200">
              <h3 className="text-2xl font-bold leading-6 text-green-400">
                PLAN 30 DIAS
              </h3>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={closeModal2}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-1">
                <div className="mt-4">
                  <h4 className="text-md font-medium text-gray-900">
                    Beneficios:
                  </h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                    <li>Pérdida de grasa y reducción de medidas en 30 días</li>
                    <li>
                      Adquirir estrategias de cambio de hábitos y superar el
                      primer desafío
                    </li>
                    <li>Adquirir actitud mental positiva</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="text-md font-medium text-gray-900">
                    ¿Qué incluye?
                  </h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                    <li>Recetas y orientaciones nutricionales</li>
                    <li>Rutinas para la casa o el gym</li>
                    <li>
                      Técnicas de mindset, adquisición de hábitos, técnicas de
                      relajación y cambio de relación con la comida
                    </li>
                    <li>1 llamada grupal semanal</li>
                    <li>Ingreso a la comunidad</li>
                  </ul>
                </div>
              </div>
              <div className="col-span-1">
                <div className="mt-4">
                  <h4 className="text-md font-medium text-gray-900">
                    Entregables:
                  </h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                    <li>
                      Video de bienvenida con formulario para recuento de datos,
                      medidas, fotos, etc.
                    </li>
                    <li>Guía de alimentación</li>
                    <li>Recetas</li>
                    <li>Rutinas</li>
                    <li>Técnicas mindset y psicología del cambio</li>
                  </ul>
                </div>
                <div className="flex justify-center mt-4">
                  <Image
                    src={image30dias}
                    alt="Another Program"
                    className="rounded-lg shadow-lg w-[400px]"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-evenly">
              <Button color="green" onClick={closeModal2}>
                Cerrar
              </Button>
              <Button
                color="green"
                onClick={() =>
                  (window.location.href =
                    "https://www.mercadopago.com.uy/checkout/v1/payment/redirect/82fddf69-943b-4fc6-a2d4-29de668a3c3a/payment-option-form/?source=link&preference-id=259592444-6492f75b-6645-4ead-ae6d-ba6c0a21a47c&router-request-id=2297d25d-83be-4878-a4d6-a4f61a12460e&initium=false&p=2d001c8f531c93c57ec3c943e3ee3acb#/")
                }
              >
                Reservar
              </Button>
            </div>
          </div>
        </div>
      )}

      {isOpen3 && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-white z-10 flex justify-between items-center mb-4 pb-2 border-b border-gray-200">
              <h3 className="text-2xl font-bold leading-6 text-green-400">
                GUIA PARA EL VEGETARIANO
              </h3>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={closeModal3}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-1">
                <div className="mt-4">
                  <h4 className="text-md font-medium text-gray-900">
                    Beneficios:
                  </h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                    <li>
                      Aprender a calcular proteínas y nutrientes para equilibrar
                      platos
                    </li>
                    <li>Recetario</li>
                  </ul>
                </div>

                <div className="mt-4">
                  <h4 className="text-md font-medium text-gray-900">
                    ¿Qué incluye?
                  </h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                    <li>30 días de alimentación vegetariana</li>
                    <li>Recetas y orientaciones nutricionales</li>
                    <li>1 llamada grupal semanal</li>
                    <li>Ingreso a la comunidad</li>
                  </ul>
                </div>
              </div>
              <div className="col-span-1">
                <div className="mt-4">
                  <h4 className="text-md font-medium text-gray-900">
                    Entregables:
                  </h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                    <li>
                      Video de bienvenida con formulario para recuento de datos,
                      medidas, fotos, etc.
                    </li>
                    <li>Guía de alimentación</li>
                    <li>Recetas</li>
                  </ul>
                </div>
                <div className="flex justify-center mt-4">
                  <Image
                    src={plateVeggie}
                    alt="Another Program"
                    className="rounded-lg shadow-lg w-[400px]"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-evenly">
              <Button color="green" onClick={closeModal3}>
                Cerrar
              </Button>
              <Button
                color="green"
                onClick={() =>
                  (window.location.href =
                    "https://www.mercadopago.com.uy/checkout/v1/payment/redirect/0e6825b3-7e75-485c-b8a8-d68432b8bafa/payment-option-form/?source=link&preference-id=259592444-48c46221-635d-45b7-8b38-bc55692cd942&router-request-id=5af8728d-3bc2-40b4-a8ab-03cea0fb0730&initium=false&p=2d001c8f531c93c57ec3c943e3ee3acb#/")
                }
              >
                Reservar
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pricing;
