import AnimatedSection from '../ui/AnimatedSection';
import { Layers, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

export default function ModularSystem() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Modular Architecture
          </h2>
          <p className="text-lg text-muted-foreground">
            Our software is built using a flexible, component-based architecture that enables rapid customization and scalability. This approach allows us to quickly adapt to changing research requirements without compromising stability or performance.
          </p>
        
        <div className="relative">
          {/* Connecting lines */}
          <div className="absolute left-1/2 top-12 bottom-12 w-0.5 bg-gray-200 dark:bg-gray-700 hidden lg:block"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="flex flex-col lg:flex-row-reverse lg:items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center">
                  <Layers className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Core Platform</h3>
                  <p className="text-muted-foreground">
                    The foundation of our system provides essential services like security, authentication, data storage, and API infrastructure. This ensures a consistent, reliable base for all applications.
                  </p>
                </div>
              </div>
              <div className="relative lg:pl-16">
                <div className="absolute -left-6 top-6 w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-4 border-gray-200 dark:border-gray-700 hidden lg:flex items-center justify-center">
                  <ArrowRight className="h-6 w-6 text-gray-400" />
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h4 className="font-medium mb-2">Scalable Infrastructure</h4>
                  <p className="text-sm text-muted-foreground">
                    Our core platform scales effortlessly from small research projects to large multi-center trials without performance degradation.
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row-reverse lg:items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-full flex items-center justify-center">
                  <Layers className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Functional Modules</h3>
                  <p className="text-muted-foreground">
                    Specialized components for specific research functions, such as patient recruitment, data collection, statistical analysis, and reporting. Each module can be independently updated and improved.
                  </p>
                </div>
              </div>
              <div className="relative lg:pl-16">
                <div className="absolute -left-6 top-6 w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-4 border-gray-200 dark:border-gray-700 hidden lg:flex items-center justify-center">
                  <ArrowRight className="h-6 w-6 text-gray-400" />
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h4 className="font-medium mb-2">Mix and Match Capabilities</h4>
                  <p className="text-sm text-muted-foreground">
                    Select only the modules you need for your specific research context, creating a tailored solution without unnecessary complexity.
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row-reverse lg:items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                  <Layers className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Customization Layer</h3>
                  <p className="text-muted-foreground">
                    Institution-specific adaptations and workflows that tailor the system to your unique processes and requirements without affecting the underlying architecture.
                  </p>
                </div>
              </div>
              <div className="relative lg:pl-16">
                <div className="absolute -left-6 top-6 w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-4 border-gray-200 dark:border-gray-700 hidden lg:flex items-center justify-center">
                  <ArrowRight className="h-6 w-6 text-gray-400" />
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h4 className="font-medium mb-2">Future-Proof Design</h4>
                  <p className="text-sm text-muted-foreground">
                    As research needs evolve, new modules can be developed and integrated without disrupting existing functionality or requiring system-wide changes.
                  </p>
                </div>
              </div>
          </div>
        </div>
        
        <div className="mt-16 text-left">
          <Button href="/solutions" variant="primary">
            See Our Solutions in Action
          </Button>
        </div>
      </div>
    </section>
  );
}