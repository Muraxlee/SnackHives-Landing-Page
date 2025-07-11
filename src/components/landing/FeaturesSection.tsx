import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cookie, Zap, Smartphone } from 'lucide-react';
import ScrollAnimate from './ScrollAnimate';

const features = [
  {
    icon: <Cookie className="h-10 w-10 text-accent" />,
    title: 'Curated Selections',
    description: 'A wide variety of premium, healthy, and classic snacks to satisfy any craving.',
    delay: 'delay-0',
  },
  {
    icon: <Zap className="h-10 w-10 text-accent" />,
    title: 'Effortless Payments',
    description: 'Seamless transactions with tap-to-pay, mobile wallets, and credit/debit cards.',
    delay: 'delay-200',
  },
  {
    icon: <Smartphone className="h-10 w-10 text-accent" />,
    title: 'Smart Inventory',
    description: 'Real-time monitoring ensures your favorite items are always in stock when you need them.',
    delay: 'delay-400',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-secondary/50 py-20">
      <div className="container">
        <ScrollAnimate>
          <div className="mb-12 text-center">
            <h2 className="font-headline text-5xl tracking-wider md:text-6xl">Why SnackHives?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              We're not just a vending machine. We're a technology-driven snack experience
              designed for modern spaces.
            </p>
          </div>
        </ScrollAnimate>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <ScrollAnimate key={index} delay={feature.delay}>
              <Card className="h-full text-center shadow-lg transition-shadow hover:shadow-xl">
                <CardHeader className="items-center">
                  <div className="mb-4 rounded-full bg-primary p-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="font-headline text-3xl tracking-wide">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}
