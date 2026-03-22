import Image from 'next/image';
import Script from 'next/script';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import CTAButton from '@/components/CTAButton';
import PlanCard from '@/components/PlanCard';
import { SERVICES, PROPERTY_CARE_PLANS, MACHINERY_IMAGES } from '@/lib/constants';

const FAQ_DATA = [
  {
    q: 'What areas do you serve?',
    a: 'We serve the entire Niagara Region including St. Catharines, Niagara Falls, Welland, Fort Erie, Grimsby, Lincoln, Pelham, Thorold, Port Colborne, Wainfleet, West Lincoln, and Niagara-on-the-Lake.',
  },
  {
    q: 'What is included in the 12-month plan?',
    a: 'Our 12-month Full Property Care plan includes snow removal, deicing, salting, plowing, weekly lawn cutting and trimming, edging, fertilizer and weed treatment, over seeding, top dressing, fall leaf cleanup, tree inspection and care, soil enrichment, and additional planting options.',
  },
  {
    q: 'How quickly can you respond to snow removal calls?',
    a: 'We offer same-day service for snow removal. For clients on our winter plan, we proactively clear snow after every significant snowfall so you don\'t even have to call.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_DATA.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
};

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Team JPR',
  description: 'Professional property care services including lawn care, snow removal, garden care, and junk removal serving the Niagara Region.',
  url: 'https://teamjpr.ca',
  telephone: '+1-905-351-8545',
  email: 'teamjpr.ca@gmail.com',
  areaServed: 'Niagara Region, Ontario',
  sameAs: ['https://www.instagram.com/teamjpr.ca/'],
  serviceType: ['Snow Removal', 'Garden Care', 'Lawn Care', 'Junk Removal', 'Property Maintenance'],
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />

      <Hero />

      {/* About Us */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm uppercase tracking-widest mb-4">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                Your Trusted Property Care Partner in Niagara
              </h2>
              <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                <p>
                  Team JPR is a professional property care company proudly serving the Niagara Region, including St. Catharines, Niagara Falls, Welland, Fort Erie, Grimsby, Lincoln, Thorold, Pelham, and surrounding areas. We specialize in year-round lawn care, snow removal, garden maintenance, and junk removal for both residential and commercial clients.
                </p>
                <p>
                  Our mission is simple: deliver reliable, high-quality property maintenance at affordable prices. Whether you need your driveway cleared after a heavy snowfall, your lawn trimmed and edged to perfection, or seasonal cleanups to keep your property looking its best, Team JPR has you covered with flexible 4-month, 8-month, and 12-month service plans.
                </p>
                <p>
                  We take pride in using professional-grade equipment, providing prompt same-day service, and building lasting relationships with our clients across the Niagara Region. Fully insured and committed to customer satisfaction, Team JPR is the property care team you can count on every season.
                </p>
              </div>
              <div className="mt-8">
                <CTAButton text="Learn More About Us" href="/about" size="lg" className="shadow-xl shadow-primary/20" />
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-team.png"
                alt="Team JPR property care professionals"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-background relative overflow-hidden" id="services">
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

      {/* Tools & Machinery Section */}
      <section className="py-24 bg-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-primary-light font-semibold text-sm uppercase tracking-widest">Our Equipment</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6">Tools & Machinery</h2>
            <p className="text-gray-300 max-w-xl mx-auto text-lg leading-relaxed">
              We use professional-grade equipment to deliver the best results on every job, ensuring efficiency and quality.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {MACHINERY_IMAGES.map((item, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-2xl overflow-hidden group border border-white/10"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <CTAButton text="View All Equipment" href="/machinery" size="lg" variant="white" />
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

      {/* Testimonials */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm uppercase tracking-widest mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Hear from homeowners and businesses who trust Team JPR with their property care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Sarah M.',
                location: 'St. Catharines',
                text: 'Team JPR has been taking care of our lawn for over a year now. The results are amazing every single time. Highly recommend their garden care plan!',
                rating: 5,
              },
              {
                name: 'Michael R.',
                location: 'Niagara Falls',
                text: 'Their snow removal service is a lifesaver. They always show up early and do a thorough job. Our driveway and sidewalks are always perfectly cleared.',
                rating: 5,
              },
              {
                name: 'David & Lisa K.',
                location: 'Welland',
                text: 'We switched to the 12-month full property care plan and it has been the best decision. Professional, reliable, and our property has never looked better.',
                rating: 5,
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <span key={j} className="text-amber-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed flex-1 mb-6">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm uppercase tracking-widest mb-4">
              Simple Process
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              How It Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Getting started is easy. Three simple steps to a beautifully maintained property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-primary/20" />

            {[
              {
                step: '01',
                title: 'Contact Us',
                desc: 'Reach out via phone, email, or WhatsApp. Tell us what you need and we\'ll respond promptly.',
                icon: '📞',
              },
              {
                step: '02',
                title: 'Get a Free Quote',
                desc: 'We\'ll assess your property and provide a transparent, no-obligation estimate tailored to your needs.',
                icon: '📋',
              },
              {
                step: '03',
                title: 'We Get to Work',
                desc: 'Our team arrives on schedule with professional equipment and delivers outstanding results every time.',
                icon: '🚀',
              },
            ].map((item) => (
              <div key={item.step} className="text-center relative">
                <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 relative z-10">
                  <span className="text-5xl">{item.icon}</span>
                </div>
                <span className="inline-block text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full mb-3 uppercase tracking-widest">
                  Step {item.step}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm max-w-xs mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Got questions? We&apos;ve got answers. If you don&apos;t find what you need, feel free to contact us.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQ_DATA.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-left">
                  <span className="font-semibold text-gray-900 text-base pr-4">{faq.q}</span>
                  <span className="shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed text-sm">
                  {faq.a}
                </div>
              </details>
            ))}
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
