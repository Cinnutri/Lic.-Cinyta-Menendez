import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import FirstPricing from "../../public/assets/pricing/retofenix.jpg";
import Image from "next/image";
const Pricing = () => {
  return (
    <div className="flex items-center justify-center mt-12 gap-4 flex-col md:flex-row">
      <Card className="w-full max-w-[26rem] shadow-lg">
        <CardHeader floated={false} color="blue-gray">
          <Image src={FirstPricing} />
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        </CardHeader>
        <CardBody>
          <div className="mb-3 flex items-center justify-between">
            <Typography variant="h5" color="green" className="font-medium">
              RETO FENIX
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
            El Reto Fénix es un programa integral de transformación física
            diseñado para aquellos que buscan alcanzar la recomposición
            corporal, es decir, perder grasa y ganar músculo.
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
          <Button size="lg" color="green" fullWidth={true}>
            Reserve
          </Button>
        </CardFooter>
      </Card>
      <Card className="w-full max-w-[26rem] shadow-lg">
        <CardHeader floated={false} color="blue-gray">
          <Image src={FirstPricing} />
          {/* <img src={FirstPricing} alt="ui/ux review check" /> */}
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        </CardHeader>
        <CardBody>
          <div className="mb-3 flex items-center justify-between">
            <Typography variant="h5" color="green" className="font-medium">
              RETO FENIX
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
            El Reto Fénix es un programa integral de transformación física
            diseñado para aquellos que buscan alcanzar la recomposición
            corporal, es decir, perder grasa y ganar músculo.
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
          <Button size="lg" color="green" fullWidth={true}>
            Reserve
          </Button>
        </CardFooter>
      </Card>
      <Card className="w-full max-w-[26rem] shadow-lg">
        <CardHeader floated={false} color="blue-gray">
          <Image src={FirstPricing} />
          {/* <img src={FirstPricing} alt="ui/ux review check" /> */}
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        </CardHeader>
        <CardBody>
          <div className="mb-3 flex items-center justify-between">
            <Typography variant="h5" color="green" className="font-medium">
              RETO FENIX
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
            El Reto Fénix es un programa integral de transformación física
            diseñado para aquellos que buscan alcanzar la recomposición
            corporal, es decir, perder grasa y ganar músculo.
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
          <Button size="lg" color="green" fullWidth={true}>
            Reserve
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Pricing;
