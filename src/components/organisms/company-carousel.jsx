import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";
import { Card, CardContent } from "../atoms/card";
import companyCarousel from "../data/companyCarousel.json";
import Autoplay from "embla-carousel-autoplay";

const CompanyCarousel = () => {
  return (
    <Carousel
      plugins={[Autoplay({ delay: 2000 })]}
      opts={{ loop: true, autoplayTimeout: 10 }}
      className="w-full px-4 py-8"
    >
      <CarouselContent className="flex gap-4 sm:gap-10 items-center">
        {companyCarousel.map(({ name, id, path }) => (
          <CarouselItem key={id} className="md:basis-1/3 lg:basis-1/6">
            <Card className="w-20 sm:w-40">
              <CardContent className="flex aspect-square items-center justify-center p-2">
                <img src={path} alt={name} className="h-24 w-24" />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export { CompanyCarousel };
