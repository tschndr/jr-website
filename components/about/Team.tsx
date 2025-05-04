import Image from 'next/image';
import AnimatedSection from '../ui/AnimatedSection';
import image from '@/components/ui/assets/justin_portrait.webp'

export default function Team() {
  return (
    <section className="mb-11 p-3 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mt-4">Our Leadership</h2>
          <p className="mt-4 mb-10 text-lg text-muted-foreground">
            Meet the team behind Jay Research's innovative clinical software solutions.
          </p>
        
          <div className="mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="relative h-64 md:h-full">
                <Image
                  src={image}
                  alt="Dr. Jay Rodriguez"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              
              <div className="col-span-2 p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-2">Justin Schneider</h3>
                <p className="text-primary font-medium mb-6">Founder & Chief Technology Officer</p>
                
                <div className="prose dark:prose-invert">
                  <p className='mb-3'>
                    With over 15 years of experience in clinical research and software development, Dr. Rodriguez leads our technical vision and innovation strategy. After completing his Ph.D. in Biomedical Informatics at Stanford University, he worked with leading research institutions before founding Jay Research.
                  </p>
                  <p className='mb-3'>
                    Dr. Rodriguez combines deep domain expertise in clinical trials with exceptional technical knowledge. He oversees all software development and ensures that our solutions meet the highest standards of quality, security, and usability.
                  </p>
                  <p className='mb-3'>
                    Under his leadership, our team has developed groundbreaking solutions that have helped accelerate research timelines and improve data quality for dozens of clinical trials.
                  </p>
                </div>
                
                <div className="mt-6 flex space-x-4">
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    LinkedIn
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        
        {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: 'John Doe',
              role: 'Head of Machine Learning',
              image: 'https://images.pexels.com/photos/3799986/pexels-photo-3799986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              bio: 'Ph.D. in Computer Science specializing in machine learning for healthcare applications. Leads our ML research and development initiatives.'
            }
          ].map((member, index) => (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden h-full">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </div>
          ))}
        </div> */}

      </div>
    </section>
  );
}