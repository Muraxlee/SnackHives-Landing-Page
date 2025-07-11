import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import ScrollAnimate from './ScrollAnimate';

const benefits = [
  'Boost employee morale and productivity.',
  'Modernize your office, lobby, or waiting area.',
  'Zero cost and hassle for your business.',
  '24/7 access to delicious snacks and drinks.',
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-20">
      <div className="container grid items-center gap-12 md:grid-cols-2">
        <ScrollAnimate>
          <Image
            src="https://placehold.co/800x600.png"
            alt="Happy people in an office breakroom"
            width={800}
            height={600}
            className="rounded-lg shadow-2xl"
            data-ai-hint="office breakroom"
          />
        </ScrollAnimate>
        <div className="flex flex-col gap-6">
          <ScrollAnimate>
            <h2 className="font-headline text-5xl tracking-wider md:text-6xl">
              A Sweet Deal For Your Space
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Elevate your environment with a SnackHives machine. It's a simple, powerful way to
              enhance any location.
            </p>
          </ScrollAnimate>
          <ul className="mt-4 space-y-4">
            {benefits.map((benefit, index) => (
              <ScrollAnimate key={index} delay={`delay-${index * 100}`}>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              </ScrollAnimate>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
