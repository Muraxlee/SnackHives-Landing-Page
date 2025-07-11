// src/components/landing/TestimonialsSection.tsx
'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { Star } from 'lucide-react';
import ScrollAnimate from './ScrollAnimate';

const testimonials = [
  {
    name: 'Sarah L.',
    role: 'Office Manager, TechCorp',
    quote: "SnackHives has been a game-changer for our office. The variety is fantastic, and the smart restocking means we never run out of our favorites. It's the perk our employees rave about most!",
    rating: 5,
  },
  {
    name: 'David Chen',
    role: 'Facilities Director, Innovate Inc.',
    quote: "The installation was seamless, and the machine itself is so modern and easy to use. Our lobby has never looked better, and it's a huge hit with both staff and visitors. Zero hassle, all reward.",
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'HR Lead, Creative Solutions',
    quote: "We were looking for a simple way to boost morale, and SnackHives delivered. The healthy options are great, and the team loves having quality snacks available 24/7. Highly recommend!",
    rating: 5,
  },
    {
    name: 'Michael B.',
    role: 'Gym Owner, Flex Fitness',
    quote: "Our members love grabbing a post-workout snack from the SnackHives machine. The smart inventory keeps up with demand for protein bars and healthy drinks perfectly. It's a fantastic addition.",
    rating: 5,
  },
    {
    name: 'Jessica T.',
    role: 'Co-working Space Manager',
    quote: "The sleek design fits perfectly in our modern space. It's an amenity that our members genuinely appreciate and use daily. The tap-to-pay is incredibly convenient.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
    const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  return (
    <section id="testimonials" className="py-24 bg-background/30">
      <div className="container">
        <ScrollAnimate>
          <div className="mb-16 text-center">
            <h2 className="font-headline text-5xl tracking-wider md:text-6xl">
              Loved by Our Partners
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
              See why businesses and organizations are choosing SnackHives to elevate their spaces.
            </p>
          </div>
        </ScrollAnimate>
        <ScrollAnimate delay="delay-200">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col justify-between shadow-lg hover:shadow-primary/20 hover:border-primary/50 transition-all duration-300 bg-card/50 border-border/50">
                      <CardContent className="p-6 flex flex-col gap-4 items-center text-center">
                        <div className="flex">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                            ))}
                        </div>
                        <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                        <div className="mt-4">
                            <p className="font-bold text-foreground">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </ScrollAnimate>
      </div>
    </section>
  );
}
