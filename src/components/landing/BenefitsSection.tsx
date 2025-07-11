import Image from 'next/image';
import { CheckCircle2, Award, Zap, Smile } from 'lucide-react';
import ScrollAnimate from './ScrollAnimate';
import Counter from './Counter';

const benefits = [
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: 'Premium Experience',
    description: 'Modernize your office, lobby, or waiting area with a sleek, high-tech vending solution.',
    metric: 40,
    suffix: '%',
    metricDescription: 'Increase in perceived workplace quality.',
  },
  {
    icon: <Smile className="h-8 w-8 text-primary" />,
    title: 'Boost Morale',
    description: 'Boost employee morale and productivity with 24/7 access to delicious snacks and drinks.',
    metric: 60,
    suffix: '%',
    metricDescription: 'Reported happiness increase.',
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Zero Hassle',
    description: 'Enjoy a fully-managed service at zero cost to your business. We handle everything.',
    metric: 100,
    suffix: '%',
    metricDescription: 'Hassle-free for you.',
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-24 bg-secondary/30">
      <div className="container">
        <ScrollAnimate className="text-center mb-16">
          <h2 className="font-headline text-5xl tracking-wider md:text-6xl">
            A Sweet Deal For Your Space
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Elevate your environment with a SnackHives machine. It's a simple, powerful way to
            enhance any location and show you care.
          </p>
        </ScrollAnimate>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <ScrollAnimate>
            <Image
              src="https://placehold.co/800x800.png"
              alt="Happy people in an office breakroom"
              width={800}
              height={800}
              className="rounded-xl shadow-2xl"
              data-ai-hint="office breakroom"
            />
          </ScrollAnimate>
          <div className="flex flex-col gap-8">
            {benefits.map((benefit, index) => (
              <ScrollAnimate key={index} delay={`delay-${index * 150}`}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">{benefit.icon}</div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-xl text-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground mt-1 mb-2">{benefit.description}</p>
                    <div className="flex items-baseline gap-2 font-headline tracking-wider text-primary">
                      <Counter end={benefit.metric} className="text-4xl" />
                      <span className="text-3xl">{benefit.suffix}</span>
                      <p className="text-sm font-body text-muted-foreground ml-2">{benefit.metricDescription}</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
