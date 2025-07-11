// src/components/landing/HeroSection.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import AnimatedText from './AnimatedText';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 z-0"></div>
      <div className="container grid items-center gap-8 py-20 md:grid-cols-2 z-10">
        <div className={cn(
            "flex flex-col gap-6 text-center md:text-left transition-all duration-1000",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
          <h1 className="font-headline text-6xl tracking-wider md:text-7xl lg:text-8xl">
            <AnimatedText text="Smart Snacking," inView={inView} />
            <span className="text-primary [text-shadow:0_0_15px_hsl(var(--primary))]">
              <AnimatedText text="Simplified." inView={inView} delay={2} />
            </span>
          </h1>
          <p className="mx-auto max-w-md text-lg text-muted-foreground md:mx-0">
            Discover SnackHives, the future of automated retail. Our intelligent vending machines
            bring premium snacks and drinks right where you need them.
          </p>
          <div className="flex justify-center gap-4 md:justify-start">
            <Button size="lg" className="bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.8)] transition-all hover:bg-primary/90 hover:shadow-[0_0_30px_hsl(var(--primary)/0.9)]">
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
            style={{ 
              transform: `translateY(${scrollY * 0.1}px) rotateY(${scrollY * 0.05}deg) scale(1.1)`,
              transformStyle: 'preserve-3d',
              perspective: '1000px',
            }}
          >
            <div className="absolute -inset-16 bg-primary/30 rounded-full blur-3xl opacity-40"></div>
            <Image
              src="/images/vendingmichin.png"
              alt="SnackHives Vending Machine"
              width={600}
              height={600}
              className={cn(
                "object-contain transition-all duration-1000 ease-out drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)]",
                inView ? "opacity-100 scale-100" : "opacity-0 scale-90"
              )}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
