import type { Metadata } from 'next';
import Image from 'next/image';
import ServiceCard from '@/components/ServiceCard';
import PropertyCarePlan from '@/components/PropertyCarePlan';
import CTAButton from '@/components/CTAButton';
import { SERVICES, PROPERTY_CARE_PLANS, TOOLS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Services | Team JPR',
  description: 'Explore our snow removal, garden care, and junk removal services and property care plans.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 bg-green-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=1920&q=80"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold mb-4">Our Services</h1>
          <p className="text-green-200 text-xl max-w-2xl mx-auto">
            Professional property care for every season. No pricing shown — contact us for a custom quote.
          </p>
        </div>
      </section>

      {/* Individual Services */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Services</span>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-2">What We Offer</h2>
          </div>

          {/* Snow Removal */}
          <div id="snow" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/snow-removal.png"
                alt="Snow removal service"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <span className="text-4xl mb-4 block">❄️</span>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Snow Removal</h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Keep your property safe and accessible all winter. Our team responds quickly to snowfall events to clear driveways, walkways, and parking areas.
              </p>
              <ul className="space-y-2 mb-8">
                {['Snow Plowing', 'Deicing', 'Sidewalk Cleaning', 'Salting'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <CTAButton text="Get a Quote" href="/contact" />
            </div>
          </div>

          {/* Garden Care */}
          <div id="garden" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
            <div className="order-2 lg:order-1">
              <span className="text-4xl mb-4 block">🌿</span>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Garden Care</h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                A lush, well-maintained lawn adds curb appeal and value to your property. Our garden care services keep everything looking pristine from spring through fall.
              </p>
              <ul className="space-y-2 mb-8">
                {['Weekly Lawn Cutting & Trimming', 'Edging', 'Fertilizer & Weed Treatment', 'Over Seeding', 'Top Dressing', 'Fall Leaf Cleanup'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <CTAButton text="Get a Quote" href="/contact" />
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl order-1 lg:order-2">
              <Image
                src="/images/garden-care.png"
                alt="Garden care service"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Junk Removal */}
          <div id="junk" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-mt-24">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/junk-removal.png"
                alt="Junk removal service"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <span className="text-4xl mb-4 block">🚛</span>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Junk Removal</h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Clear out clutter and debris from your property quickly and efficiently. We handle all types of waste removal so you don't have to.
              </p>
              <ul className="space-y-2 mb-8">
                {['Debris Removal', 'Property Cleanup', 'Waste Disposal', 'Haul Away'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <CTAButton text="Get a Quote" href="/contact" />
            </div>
          </div>
        </div>
      </section>

      {/* Property Care Plans */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Plans</span>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4">Property Care Plans</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Choose the plan that fits your needs. Contact us for custom pricing tailored to your property.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {PROPERTY_CARE_PLANS.map((plan) => (
              <PropertyCarePlan
                key={plan.id}
                title={plan.title}
                duration={plan.duration}
                services={plan.services}
                featured={plan.featured}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Equipment</span>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-2">Our Tools</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span>❄️</span> Snow Removal Equipment
              </h3>
              <ul className="grid grid-cols-2 gap-3">
                {TOOLS.snow.map((tool) => (
                  <li key={tool} className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span>🌿</span> Garden Care Equipment
              </h3>
              <ul className="grid grid-cols-2 gap-3">
                {TOOLS.garden.map((tool) => (
                  <li key={tool} className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
