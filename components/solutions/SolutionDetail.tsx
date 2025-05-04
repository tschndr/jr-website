import Image from 'next/image';
import AnimatedSection from '../ui/AnimatedSection';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

interface SolutionDetailProps {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  features: {
    title: string;
    description: string;
  }[];
  image: string;
  reversed?: boolean;
}

export default function SolutionDetail({
  id,
  title,
  description,
  benefits,
  features,
  image,
  reversed = false,
}: SolutionDetailProps) {
  return (
    <section id={id} className="py-16 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reversed ? 'lg:flex lg:flex-row-reverse' : ''}`}>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
            <p className="text-lg text-muted-foreground mb-6">{description}</p>
            
            <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
            <ul className="space-y-2 mb-8">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            
            <Button href="/contact" variant="primary">
              Request More Information
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div>
            <div className="relative rounded-xl overflow-hidden shadow-xl aspect-video">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-16 mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 h-full">
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}