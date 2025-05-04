import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SolutionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  image: string;
  color: string;
  href: string;
  index: number;
}

export default function SolutionCard({
  title,
  description,
  icon,
  features,
  image,
  color,
  href,
  index,
}: SolutionCardProps) {
  return (
    <div className="group">
      <div 
        className={cn(
          "rounded-xl overflow-hidden shadow-lg transition-all duration-300 h-full border border-gray-200 dark:border-gray-800 group-hover:shadow-xl",
          "bg-white dark:bg-gray-800"
        )}
      >
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div 
            className={cn(
              "absolute inset-0 bg-gradient-to-br opacity-90",
              color
            )} 
          />
          <div className="absolute inset-0 p-6 flex flex-col justify-between">
            <div className="bg-white/90 dark:bg-gray-900/90 w-12 h-12 rounded-lg flex items-center justify-center">
              {icon}
            </div>
            <h3 className="text-white text-2xl font-bold">{title}</h3>
          </div>
        </div>
        
        <div className="p-6">
          <p className="text-muted-foreground mb-4">{description}</p>
          
          <ul className="space-y-2 mb-6">
            {features.map((feature) => (
              <li key={feature} className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          
          <Link 
            href={href} 
            id={`solution-${index}`}
            className="group flex items-center text-primary font-medium hover:underline"
          >
            Learn more
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}