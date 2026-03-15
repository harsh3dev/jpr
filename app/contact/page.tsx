import type { Metadata } from 'next';
import { CONTACT_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact | Team JPR',
  description: 'Get in touch with Team JPR for a free consultation on property care services.',
};

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-green-700 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-green-200 text-xl">
            Ready to get started? Reach out and we'll get back to you quickly.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Get in Touch</h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              Whether you need a one-time cleanup or a full-season property care plan, we're here to help. Reach us directly via phone or email.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm text-center hover:shadow-md transition-shadow">
              <span className="text-4xl mb-4">✉️</span>
              <div className="font-semibold text-gray-900 mb-2 text-lg">Email</div>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-green-600 hover:text-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
              >
                {CONTACT_INFO.email}
              </a>
            </div>

            {CONTACT_INFO.phones.map((phone, index) => (
              <div key={phone} className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm text-center hover:shadow-md transition-shadow">
                <span className="text-4xl mb-4">📞</span>
                <div className="font-semibold text-gray-900 mb-2 text-lg">Phone {index + 1}</div>
                <a
                  href={`tel:${phone.replace(/\s|\(|\)|-/g, '')}`}
                  className="text-green-600 hover:text-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
                >
                  {phone}
                </a>
              </div>
            ))}

            <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm text-center hover:shadow-md transition-shadow">
              <span className="text-4xl mb-4">🕐</span>
              <div className="font-semibold text-gray-900 mb-2 text-lg">Hours</div>
              <p className="text-gray-600 text-sm">Mon – Sat: 7am – 7pm</p>
              <p className="text-gray-600 text-sm">Sun: By appointment</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
