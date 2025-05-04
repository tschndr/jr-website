import Image from 'next/image';
import Button from '../ui/Button';

export default function TechHighlight() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-300/30 dark:bg-yellow-900/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-orange-300/30 dark:bg-orange-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="aspect-video relative rounded-lg overflow-hidden shadow-xl border border-gray-200 dark:border-gray-800">
              <Image
                src="https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Advanced technology visualization"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Leveraging Advanced Technology
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our software solutions incorporate cutting-edge technologies to address the most complex challenges in clinical research. By combining machine learning with modular architecture, we create adaptive systems that evolve with your research needs.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 dark:bg-green-900/30 flex items-center justify-center mt-1">
                  <svg className="h-4 w-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-md font-medium">Optimized Workflows</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Streamline clinical processes with automated data handling and analysis.</p>
                </div>
              </div>
              
              <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 dark:bg-green-900/30 flex items-center justify-center mt-1">
                  <svg className="h-4 w-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-md font-medium">Real-time Analytics</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Monitor trial progress and patient data with instant visualization tools.</p>
                </div>
              </div>
              
              <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 dark:bg-green-900/30 flex items-center justify-center mt-1">
                  <svg className="h-4 w-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-md font-medium">Interoperable Systems</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Seamlessly integrate with existing healthcare infrastructure and EHR systems.</p>
                </div>
              </div>
            </div>
            
            <Button href="/technology" variant="primary">
              Learn About Our Tech Stack
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}