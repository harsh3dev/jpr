import type { Metadata } from 'next';
import Image from 'next/image';
import CTAButton from '@/components/CTAButton';
import { GALLERY_IMAGES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Gallery | Team JPR',
  description: 'Browse our portfolio of completed landscaping, snow removal, and property care projects.',
};

export default function GalleryPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-green-700 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-4">Our Work</h1>
          <p className="text-green-200 text-xl">
            A look at some of the properties we've transformed. Quality you can see.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_IMAGES.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading={index < 3 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Like What You See?</h2>
          <p className="text-gray-600 text-lg mb-8">
            Let's make your property look this good. Get in touch for a free consultation.
          </p>
          <CTAButton text="Request Consultation" href="/contact" size="lg" />
        </div>
      </section>
    </>
  );
}
