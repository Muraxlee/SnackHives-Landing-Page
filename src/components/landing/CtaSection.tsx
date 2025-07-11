import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ScrollAnimate from './ScrollAnimate';

export default function CtaSection() {
  return (
    <section id="contact" className="bg-primary py-20 text-primary-foreground">
      <div className="container text-center">
        <ScrollAnimate>
          <h2 className="font-headline text-5xl tracking-wider md:text-6xl">
            Ready to Upgrade Your Snacking?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Let's get a SnackHives machine to your location. Contact us today for a free
            consultation and placement.
          </p>
          <Button
            size="lg"
            className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </ScrollAnimate>
      </div>
    </section>
  );
}
