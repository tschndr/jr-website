import Image from 'next/image';
import AnimatedSection from '../ui/AnimatedSection';
import { Brain, ChartBar, Network, LineChart } from 'lucide-react';
import code from '@/components/ui/assets/code.jpg'

const mlCapabilities = [
  {
    title: 'Predictive Analytics',
    description: 'Forecasting patient outcomes and trial results using historical data patterns.',
    icon: LineChart,
  },
  {
    title: 'Natural Language Processing',
    description: 'Extracting insights from unstructured clinical notes and research documentation.',
    icon: Brain,
  },
  {
    title: 'Computer Vision',
    description: 'Analyzing medical imaging and visual data for diagnostic assistance.',
    icon: Network,
  },
  {
    title: 'Statistical Modeling',
    description: 'Creating robust statistical models for clinical trial design and analysis.',
    icon: ChartBar,
  },
];

export default function MachineLearning() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Machine Learning Capabilities
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our advanced machine learning algorithms transform raw clinical data into actionable insights. By applying state-of-the-art techniques, we enable predictive analytics, pattern recognition, and automated data analysis that would be impossible with traditional methods.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {mlCapabilities.map((capability, index) => (
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 h-full">
                    <capability.icon className="h-8 w-8 text-primary mb-3" />
                    <h3 className="text-lg font-semibold mb-2">{capability.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {capability.description}
                    </p>
                  </div>
              ))}
            </div>
          
            <div className="relative rounded-xl overflow-hidden shadow-xl h-[500px] border border-gray-200 dark:border-gray-700">
              {/* Neural network visualization */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30">
                {/* This would be an SVG visualization of a neural network in a real implementation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={code}
                    alt="Machine Learning Visualization"
                    fill
                    className="object-cover opacity-90"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              
              {/* Overlay with text */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Deep Learning Models</h3>
                <p className="text-sm opacity-90">
                  Our custom neural networks are trained on extensive clinical datasets, enabling powerful predictive capabilities while maintaining patient privacy and data security.
                </p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}