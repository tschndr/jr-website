import { Brain, Layers, Code, FlaskConical } from 'lucide-react';
import { cn } from '@/lib/utils';

const expertiseAreas = [
  {
    title: 'Machine Learning',
    description: 'Implementing advanced ML algorithms for predictive analytics and data-driven insights in clinical research.',
    icon: Brain,
    color: 'bg-orange-100 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400',
  },
  {
    title: 'Modular Systems',
    description: 'Building flexible, component-based architectures that adapt to evolving research requirements.',
    icon: Layers,
    color: 'bg-gray-200 text-black-600 dark:bg-white-900/20 dark:text-yellow-400',
  },
  {
    title: 'Clinical Software',
    description: 'Developing specialized software solutions for clinical trials, patient monitoring, and healthcare analytics.',
    icon: FlaskConical,
    color: 'bg-yellow-100 text-yellow-600 dark:bg-blue-900/20 dark:text-blue-400',
  },
  {
    title: 'In-House Development',
    description: 'Complete control over research, engineering, and implementation with our dedicated internal team.',
    icon: Code,
    color: 'bg-red-100 text-red-600 dark:bg-purple-900/20 dark:text-purple-400',
  },
];

export default function Expertise() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Areas of Expertise</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our specialized knowledge and capabilities span across multiple domains in clinical research technology.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {expertiseAreas.map((area) => (
            <div key={area.title} className="h-full rounded-lg border border-gray-200 dark:border-gray-800 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className={cn("w-12 h-12 rounded-md flex items-center justify-center mb-4", area.color)}>
                <area.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
              <p className="text-muted-foreground">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}