'use client';

import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background gradient element */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-white dark:from-gray-900/20 dark:to-background -z-10" />
      
      {/* Grid lines */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-[5em] font-bold tracking-tight text-gray-900 dark:text-white">
              Advanced Clinical Research{' '}
              <span className="font-mono font-extrabold text-orange-500 relative">
                Software
                <span className="absolute -bottom-0 left-0 right-0 h-1 bg-orange-300 rounded-full"></span>
              </span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Transforming clinical research with intelligent software solutions built on machine learning, modular architecture, and integrated technology ecosystems.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button href="/solutions" size="lg">
                Explore Our Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative mx-auto lg:mr-0 w-full max-w-lg aspect-square">
              {/* Visual code representation */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 shadow-xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-8 bg-gray-200 dark:bg-gray-700 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                </div>
                <div className="pt-10 px-6 pb-6 font-mono text-md font-medium overflow-hidden">
                  <div className="text-orange-600 dark:text-purple-400">
                    <span className="text-yellow-600 dark:text-blue-400">class</span> ClinicalAnalytics {'{'}
                  </div>
                  <div className="pl-4 text-gray-700 dark:text-gray-300">
                    <span className="text-red-700 dark:text-blue-400">constructor</span>() {'{'}
                  </div>
                  <div className="pl-8 text-gray-700 dark:text-gray-300">
                    this.data = [];
                  </div>
                  <div className="pl-8 text-gray-700 dark:text-gray-300">
                    this.model = <span className="text-red-600 dark:text-purple-400">new</span> MLModel();
                  </div>
                  <div className="pl-4 text-gray-700 dark:text-gray-300">{'}'}</div>
                  <div className="mt-2 pl-4 text-gray-700 dark:text-gray-300">
                    <span className="text-red-600 dark:text-blue-400">async</span> analyzePatientData(patientId) {'{'}
                  </div>
                  <div className="pl-8 text-gray-700 dark:text-gray-300">
                    <span className="text-orange-600 dark:text-blue-400">const</span> data = <span className="text-yellow-600 dark:text-blue-400">await</span> this.fetchData(patientId);
                  </div>
                  <div className="pl-8 text-gray-700 dark:text-gray-300">
                    <span className="text-orange-600 dark:text-blue-400">return</span> this.model.predict(data);
                  </div>
                  <div className="pl-4 text-gray-700 dark:text-gray-300">{'}'}</div>
                  <div className="text-purple-600 dark:text-purple-400">{'}'}</div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-200 dark:bg-orange-900/30 rounded-full blur-2xl opacity-70"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-yellow-200 dark:bg-yellow-900/30 rounded-full blur-3xl opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}