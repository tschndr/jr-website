import { Activity, Database, Network, BookOpen } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import SolutionCard from './SolutionCard';

const solutions = [
  {
    title: 'Clinical Trial Management',
    description: 'Comprehensive software for planning, executing, and monitoring clinical trials with advanced analytics.',
    icon: <Activity className="h-5 w-5 text-primary" />,
    color: 'from-blue-600/70 to-blue-900/70',
    features: [
      'Participant recruitment and management',
      'Electronic data capture and validation',
      'Real-time monitoring dashboards',
      'Regulatory compliance tracking'
    ],
    image: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    href: '/solutions#clinical-trial'
  },
  {
    title: 'Predictive Analytics Tools',
    description: 'Machine learning models that forecast outcomes and identify patterns in complex clinical data.',
    icon: <Network className="h-5 w-5 text-primary" />,
    color: 'from-purple-600/70 to-purple-900/70',
    features: [
      'Patient outcome prediction',
      'Early risk identification',
      'Treatment response forecasting',
      'Visual data exploration tools'
    ],
    image: 'https://images.pexels.com/photos/7289738/pexels-photo-7289738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    href: '/solutions#predictive-analytics'
  },
  {
    title: 'EHR Integration System',
    description: 'Seamlessly connect research platforms with existing electronic health record systems for unified data access.',
    icon: <Database className="h-5 w-5 text-primary" />,
    color: 'from-orange-600/70 to-orange-900/70',
    features: [
      'Bidirectional EHR connectivity',
      'Automated data synchronization',
      'FHIR and HL7 compatibility',
      'Privacy-preserving data transfer'
    ],
    image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    href: '/solutions#ehr-integration'
  },
  {
    title: 'Academic Research Platform',
    description: 'Specialized tools for academic institutions conducting clinical and translational research.',
    icon: <BookOpen className="h-5 w-5 text-primary" />,
    color: 'from-green-600/70 to-green-900/70',
    features: [
      'Collaborative workspaces',
      'Publication tracking',
      'Grant management tools',
      'Inter-institutional data sharing'
    ],
    image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    href: '/solutions#academic-research'
  }
];

export default function SolutionsList() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Our Clinical Research Solutions
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            We've developed a suite of specialized software solutions to address the most challenging aspects of clinical research. Each solution can be deployed independently or as part of an integrated ecosystem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div>
              <SolutionCard
                title={solution.title}
                description={solution.description}
                icon={solution.icon}
                features={solution.features}
                image={solution.image}
                color={solution.color}
                href={solution.href}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}