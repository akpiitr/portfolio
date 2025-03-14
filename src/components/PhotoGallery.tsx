
import { useState, useEffect, useCallback } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

const images = [
  "/lovable-uploads/455eeda9-50c0-41f9-bc65-f0f0fec33711.png",
  "/lovable-uploads/5aa0d093-4144-4fe5-b3ce-b3a01c4e7c3d.png",
  "/lovable-uploads/a9c50160-4fa7-4120-bc68-edd26131942f.png",
  "/lovable-uploads/15deb0ce-8c96-4cbc-b0bf-7de4a35d245c.png",
  "/lovable-uploads/80a4b92e-b1bf-49d3-96c6-99ffb9476ac1.png",
  "/lovable-uploads/6893fcc4-c137-4de2-a10b-b73b17f769d5.png",
  "/lovable-uploads/23898547-52fc-4295-9b42-6d2ab0980cd7.png",
  "/lovable-uploads/2a27173a-0b5f-48d4-a2ba-b978e3ff552a.png",
  "/lovable-uploads/3768cd5d-35d4-471e-8e3a-932848accdcc.png",
  "/lovable-uploads/5cbfe9ed-536c-4c9d-a044-304c65214c8d.png",
  "/lovable-uploads/f89023cc-c7e8-49ec-95b6-b20a134aefb8.png",
  "/lovable-uploads/ea4569fb-c237-442a-a007-a38cd4e6e432.png",
  "/lovable-uploads/ad60b24c-a675-4d42-8a12-a4aac3d736e8.png",
  "/lovable-uploads/1dfc77e6-cd4a-44e0-ac95-9d242488f09d.png"
];

const PhotoGallery = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Handle autoplay
  useEffect(() => {
    if (!api) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);
    
    return () => clearInterval(interval);
  }, [api]);
  
  // Update current slide index when the carousel changes
  useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    
    api.on("select", onSelect);
    
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      <Carousel
        className="w-full h-full"
        setApi={setApi}
        opts={{
          loop: true,
          align: "center"
        }}
      >
        <CarouselContent className="h-full">
          {images.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative w-full h-full">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover object-center rounded-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
};

export default PhotoGallery;
