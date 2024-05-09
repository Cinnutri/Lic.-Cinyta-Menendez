import React from "react";
import TestimonialsSlider from "./TestimonialCard";
import TestimonialImg01 from "../../../public/assets/testimonials/testimonial-01.jpg";
import TestimonialImg02 from "@../assets/testimonials/testimonial-02.jpg";
import TestimonialImg03 from "@../assets/testimonials/testimonial-03.jpg";

const Testimonials = () => {
  const testimonialData = [
    {
      image: TestimonialImg01,
      category: "HOLA",
      title: "Lyft launching cross-platform service this week",
      description:
        "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story",
    },
    // Aquí puedes agregar más datos para otras cartas
    {
      image: TestimonialImg02,
      category: "SOY ",
      title: "EL PITO DEL PANCHO",
      description:
        "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story",
    },
    {
      image: TestimonialImg03,
      category: "NANO",
      title: "EL CULO DEL EZE",
      description:
        "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story",
    },
  ];
  return <TestimonialsSlider testimonialData={testimonialData} />;
};

export default Testimonials;
