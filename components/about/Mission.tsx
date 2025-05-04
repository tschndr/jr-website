import AnimatedSection from '../ui/AnimatedSection';

export default function Mission() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1  gap-12 items-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Our Mission
            </h1>
            <div className="mt-1 space-y-6 text-lg text-muted-foreground">
              <p>
                At Jay Research, we're dedicated to transforming clinical research through innovative software solutions. We believe that technology should enhance human capability, not replace it.
              </p>
              <p>
                Our mission is to develop intelligent, intuitive software that empowers researchers, accelerates discovery, and ultimately improves patient outcomes. By combining advanced technology with deep clinical understanding, we create solutions that address the real-world challenges faced by research institutions.
              </p>
              <p>
                We're committed to maintaining the highest standards of quality, security, and ethical practice in everything we do. Our in-house development approach ensures complete control over our technology and allows us to provide tailored solutions that meet the unique needs of each client.
              </p>
            </div>
          
          
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-orange-50 dark:bg-orange-950/20 p-6 rounded-lg border border-orange-100 dark:border-orange-900/20">
                <h3 className="text-xl font-semibold mb-3">Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading provider of innovative software solutions for clinical research, enabling breakthrough discoveries that improve human health.
                </p>
              </div>
              
              <div className="bg-yellow-50 dark:bg-yellow-950/20 p-6 rounded-lg border border-yellow-100 dark:border-yellow-900/20">
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  Continuously pushing the boundaries of what's possible through research, experimentation, and creative problem-solving.
                </p>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg border border-blue-100 dark:border-blue-900/20">
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  Committing to the highest standards of quality in our code, our products, and our client relationships.
                </p>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-950/20 p-6 rounded-lg border border-purple-100 dark:border-purple-900/20">
                <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                <p className="text-muted-foreground">
                  Operating with transparency, honesty, and ethical standards in all aspects of our business.
                </p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}