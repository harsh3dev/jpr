import Link from 'next/link';
import { CONTACT_INFO, NAV_ITEMS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-3xl transition-transform group-hover:scale-110 duration-300">🌿</span>
              <span className="text-2xl font-extrabold text-white tracking-tight">Team JPR</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Professional property care services for residential and commercial clients. Serving the community with pride and dedication.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_ITEMS.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-accent transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-sm text-gray-400 hover:text-accent transition-colors duration-200 flex items-center gap-3 group"
                >
                  <span className="p-2 bg-white/5 rounded-full group-hover:bg-accent/10 transition-colors">✉️</span>
                  {CONTACT_INFO.email}
                </a>
              </li>
              {CONTACT_INFO.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s|\(|\)|-/g, '')}`}
                    className="text-sm text-gray-400 hover:text-accent transition-colors duration-200 flex items-center gap-3 group"
                  >
                    <span className="p-2 bg-white/5 rounded-full group-hover:bg-accent/10 transition-colors">📞</span>
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Team JPR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
