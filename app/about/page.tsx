import type { Metadata } from 'next';
import Image from 'next/image';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'About | Team JPR',
  description: 'Learn about Team JPR — our story, values, and commitment to professional property care.',
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-green-700 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-4">About Team JPR</h1>
          <p className="text-green-200 text-xl">
            A local team dedicated to keeping your property in top shape, every season.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-team.png"
                alt="Team JPR at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Our Story</span>
              <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-6">
                Built on Hard Work and Community
              </h2>
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                Team JPR was founded with a simple mission: provide reliable, high-quality property care that homeowners and businesses can count on. We started small, with a commitment to showing up on time and doing the job right.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Today, we serve dozens of clients across the region, offering everything from winter snow removal to full-season lawn and garden maintenance. Every property we care for gets the same attention to detail as if it were our own.
              </p>
              <CTAButton text="Get in Touch" href="/contact" size="lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Our Values</span>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-2">What Drives Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🤝', title: 'Reliability', desc: 'We show up when we say we will, every time.' },
              { icon: '💪', title: 'Quality', desc: 'We don\'t cut corners. Every job is done right.' },
              { icon: '🌱', title: 'Sustainability', desc: 'We use eco-conscious practices wherever possible.' },
              { icon: '❤️', title: 'Community', desc: 'We\'re proud to serve the neighborhoods we live in.' },
            ].map((value) => (
              <div key={value.title} className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-700 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Work With Us?</h2>
          <p className="text-green-200 text-lg mb-8">
            Reach out today and let's talk about how we can help with your property.
          </p>
          <CTAButton text="Request Consultation" href="/contact" variant="secondary" size="lg" />
        </div>
      </section>
    </>
  );
}
