"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="container grid items-center gap-8 py-20 md:grid-cols-2">
        <div className="flex flex-col gap-6 text-center md:text-left">
          <h1 className="font-headline text-5xl tracking-wider md:text-7xl lg:text-8xl">
            Smart Snacking, <br />
            <span className="text-primary">Simplified.</span>
          </h1>
          <p className="mx-auto max-w-md text-lg text-muted-foreground md:mx-0">
            Discover SnackHives, the future of automated retail. Our intelligent vending machines
            bring premium snacks and drinks right where you need them.
          </p>
          <div className="flex justify-center gap-4 md:justify-start">
            <Button size="lg">
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
        <div className="relative flex h-[400px] items-center justify-center md:h-[600px]">
          <div
            className="absolute inset-0 transition-transform duration-300 ease-out"
            style={{ transform: `translateY(${scrollY * 0.1}px) scale(1.1)` }}
          >
            <Image
              src="https://placehold.co/600x600.png"
              alt="SnackHives Vending Machine"
              width={600}
              height={600}
              className="object-contain"
              data-ai-hint="vending machine"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
