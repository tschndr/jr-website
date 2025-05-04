import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

export default function CallToAction() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-yellow-50 dark:from-gray-900 dark:to-gray-800 -z-10" />
      
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-yellow-200 dark:bg-orange-800/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-orange-300 dark:bg-yellow-800/20 rounded-full blur-3xl opacity-50" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Ready to Revolutionize Your Clinical Research?
          </h2>
          
          <p className="mt-6 text-lg md:text-xl text-muted-foreground">
            Partner with Jay Research to build advanced, tailored software solutions that meet the unique demands of your clinical research projects.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/solutions" size="lg">
              Explore Our Solutions
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}