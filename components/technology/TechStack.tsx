import { Server, Database, Code, Workflow } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import { cn } from '@/lib/utils';

const techCategories = [
  {
    title: 'Backend Technologies',
    icon: Server,
    color: 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/20',
    items: [
      { name: 'Python', level: 90 },
      { name: 'Node.js', level: 85 },
      { name: 'Django', level: 80 },
      { name: 'GraphQL', level: 75 },
    ],
  },
  {
    title: 'Data Infrastructure',
    icon: Database,
    color: 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/20',
    items: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'MongoDB', level: 85 },
      { name: 'ElasticSearch', level: 80 },
      { name: 'Redis', level: 85 },
    ],
  },
  {
    title: 'Frontend Development',
    icon: Code,
    color: 'text-purple-600 bg-purple-100 dark:text-purple-400 dark:bg-purple-900/20',
    items: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'D3.js', level: 80 },
    ],
  },
  {
    title: 'DevOps & Infrastructure',
    icon: Workflow,
    color: 'text-orange-600 bg-orange-100 dark:text-orange-400 dark:bg-orange-900/20',
    items: [
      { name: 'Docker', level: 90 },
      { name: 'Kubernetes', level: 85 },
      { name: 'CI/CD Pipelines', level: 85 },
      { name: 'AWS', level: 90 },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Our Technology Stack
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            We leverage a comprehensive suite of cutting-edge technologies to build powerful, scalable solutions for clinical research challenges. Our stack is constantly evolving to incorporate the latest innovations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {techCategories.map((category, index) => (
            <div 
              // key={category.title} 
              // direction={index % 2 === 0 ? 'left' : 'right'}
              // delay={index * 100}
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-full">
                <div className="flex items-center mb-6">
                  <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mr-4", category.color)}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-6">
                  {category.items.map((item) => (
                    <div key={item.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-muted-foreground">{item.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={cn("h-full rounded-full", 
                            index % 4 === 0 ? "bg-blue-500" : 
                            index % 4 === 1 ? "bg-green-500" : 
                            index % 4 === 2 ? "bg-purple-500" : 
                            "bg-orange-500"
                          )}
                          style={{ width: `${item.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}