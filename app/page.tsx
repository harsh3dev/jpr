import Image from 'next/image';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import CTAButton from '@/components/CTAButton';
import PlanCard from '@/components/PlanCard';
import { SERVICES, TOOLS, PROPERTY_CARE_PLANS } from '@/lib/constants';

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Services Overview */}
      <section className="py-24 bg-background relative overflow-hidden" id="services">
        <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-white to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm uppercase tracking-widest mb-4">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Comprehensive Property Care
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              From winter snow removal to summer lawn care, we keep your property looking its best all year round with professional precision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                href={`/services#${service.id}`}
              />
            ))}
          </div>
          
          <div className="text-center mt-16">
            <CTAButton text="View All Services & Plans" href="/services" size="lg" className="shadow-xl shadow-primary/20" />
          </div>
        </div>
      </section>

      {/* Property Care Plans */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              Our Plans
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Choose Your Care Level
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Flexible plans tailored to your property's needs throughout the seasons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-stretch">
            {PROPERTY_CARE_PLANS.map((plan) => (
              <PlanCard
                key={plan.id}
                title={plan.title}
                services={plan.services}
                featured={plan.featured}
                duration={plan.duration}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform translate-x-1/4" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-widest">Why Team JPR</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-6 leading-tight">
                  Trusted Property Care, <br/><span className="text-primary">Every Season</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We bring professional-grade equipment and years of experience to every job. Whether it's a fresh snowfall or an overgrown lawn, Team JPR handles it with care and precision.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: '⭐', label: 'Top Rated', desc: 'Trusted by hundreds of clients' },
                  { icon: '🛡️', label: 'Fully Insured', desc: 'Peace of mind guaranteed' },
                  { icon: '⚡', label: 'Fast Response', desc: 'Same-day service available' },
                  { icon: '🌱', label: 'Eco-Friendly', desc: 'Sustainable practices' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                    <span className="text-3xl bg-primary/10 p-2 rounded-lg">{item.icon}</span>
                    <div>
                      <div className="font-bold text-gray-900 text-base mb-1">{item.label}</div>
                      <div className="text-gray-500 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-4">
                <CTAButton text="Request Consultation" href="/contact" size="lg" />
              </div>
            </div>
            
            <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <Image
                src="/images/project-showcase.png"
                alt="Team JPR professional landscaping work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-sm font-medium uppercase tracking-wider mb-2">Project Showcase</p>
                <h3 className="text-2xl font-bold">Residential Garden Transformation</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-24 bg-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-primary-light font-semibold text-sm uppercase tracking-widest">Our Equipment</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6">Professional-Grade Tools</h2>
            <p className="text-gray-300 max-w-xl mx-auto text-lg leading-relaxed">
              We use industry-leading equipment to deliver the best results on every job, ensuring efficiency and quality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="bg-white/5 rounded-3xl p-10 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                <span className="text-4xl">❄️</span> Snow Removal Tools
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {TOOLS.snow.map((tool) => (
                  <li key={tool} className="flex items-center gap-3 text-gray-200">
                    <span className="w-2 h-2 rounded-full bg-accent shrink-0 shadow-[0_0_8px_rgba(244,162,97,0.6)]" />
                    <span className="font-medium">{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white/5 rounded-3xl p-10 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                <span className="text-4xl">🌿</span> Garden Care Tools
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {TOOLS.garden.map((tool) => (
                  <li key={tool} className="flex items-center gap-3 text-gray-200">
                    <span className="w-2 h-2 rounded-full bg-primary-light shrink-0 shadow-[0_0_8px_rgba(111,174,106,0.6)]" />
                    <span className="font-medium">{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-white text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-primary rounded-[2.5rem] p-12 md:p-16 shadow-2xl relative overflow-hidden">
             {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
            
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white relative z-10">Ready to Transform Your Property?</h2>
            <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto relative z-10">
              Contact us today for a free consultation and let's get started on making your property beautiful.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <CTAButton text="Request Consultation" href="/contact" size="lg" variant="white" />
              <CTAButton text="View Our Plans" href="/services" variant="outline-white" size="lg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
