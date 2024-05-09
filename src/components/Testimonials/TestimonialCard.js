import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";

const TestimonialCard = ({ testimonialData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex justify-center">
      <div className="overflow-hidden w-full max-w-[48rem] relative h-64">
        {testimonialData.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute transform ${
              index === currentIndex ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300`}
          >
            <Card className="w-full flex-row">
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none"
              >
                <Image
                  src={testimonial.image}
                  alt="card-image"
                  className="h-48 w-full object-cover"
                />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h6"
                  color="gray"
                  className="mb-4 uppercase"
                >
                  {testimonial.category}
                </Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  {testimonial.title}
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                  {testimonial.description}
                </Typography>
                <a href="#" className="inline-block">
                  <Button variant="text" className="flex items-center gap-2">
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                </a>
              </CardBody>
            </Card>
          </div>
        ))}
        <div className="absolute inset-y-0 left-0 bottom-0 flex items-center justify-center w-12 bg-gray-200 bg-opacity-50 hover:bg-opacity-75 transition duration-300 cursor-pointer">
          <button onClick={handlePrev}>&lt;</button>
        </div>
        <div className="absolute inset-y-0 right-0 bottom-0 flex items-center justify-center w-12 bg-gray-200 bg-opacity-50 hover:bg-opacity-75 transition duration-300 cursor-pointer">
          <button onClick={handleNext}>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
