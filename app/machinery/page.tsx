import Image from 'next/image';
import { MACHINERY_IMAGES } from '@/lib/constants';
import CTAButton from '@/components/CTAButton';

export const metadata = {
  title: 'Tools & Machinery | Team JPR',
  description: 'Professional-grade tools and machinery used by Team JPR for lawn care, snow removal, and property maintenance.',
};

export default function MachineryPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative py-32 sm:py-40 bg-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-primary-light font-semibold text-sm uppercase tracking-widest">Our Equipment</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-4 mb-6">Tools & Machinery</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            We invest in professional-grade equipment to deliver the best results on every job. Here is a look at the tools that power our work.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {MACHINERY_IMAGES.map((item, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-2xl overflow-hidden group shadow-lg"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <CTAButton text="Request Consultation" href="/contact" size="lg" className="shadow-xl shadow-primary/20" />
          </div>
        </div>
      </section>
    </>
  );
}
