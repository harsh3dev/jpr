import Link from 'next/link';
import Image from 'next/image';
import { CONTACT_INFO, NAV_ITEMS } from '@/lib/constants';
import ServiceAreaMap from './ServiceAreaMap';

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/images/logo.jpg"
                alt="Team JPR Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-2xl font-extrabold text-white tracking-tight">Team JPR</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Professional property care services for residential and commercial clients. Serving the Niagara Region with pride and dedication.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/teamjpr.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E4405F]/20 transition-colors group"
                aria-label="Follow us on Instagram"
              >
                <svg viewBox="0 0 256 256" className="w-5 h-5 fill-gray-400 group-hover:fill-[#E4405F] transition-colors">
                  <path d="M160,128a32,32,0,1,1-32-32A32.03667,32.03667,0,0,1,160,128Zm68-44v88a56.06353,56.06353,0,0,1-56,56H84a56.06353,56.06353,0,0,1-56-56V84A56.06353,56.06353,0,0,1,84,28h88A56.06353,56.06353,0,0,1,228,84Zm-52,44a48,48,0,1,0-48,48A48.05436,48.05436,0,0,0,176,128Zm16-52a12,12,0,1,0-12,12A12,12,0,0,0,192,76Z" />
                </svg>
              </a>
              <a
                href={`https://wa.me/19053518545`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366]/20 transition-colors group"
                aria-label="Chat on WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-gray-400 group-hover:fill-[#25D366] transition-colors">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_ITEMS.slice(0, 6).map((item) => (
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
                  <span className="p-2 bg-white/5 rounded-full group-hover:bg-accent/10 transition-colors shrink-0">✉️</span>
                  {CONTACT_INFO.email}
                </a>
              </li>
              {CONTACT_INFO.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s|\(|\)|-/g, '')}`}
                    className="text-sm text-gray-400 hover:text-accent transition-colors duration-200 flex items-center gap-3 group"
                  >
                    <span className="p-2 bg-white/5 rounded-full group-hover:bg-accent/10 transition-colors shrink-0">📞</span>
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://www.instagram.com/teamjpr.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-accent transition-colors duration-200 flex items-center gap-3 group"
                >
                  <span className="p-2 bg-white/5 rounded-full group-hover:bg-accent/10 transition-colors shrink-0">
                    <svg viewBox="0 0 256 256" className="w-4 h-4 fill-gray-400 group-hover:fill-[#E4405F] transition-colors">
                      <path d="M160,128a32,32,0,1,1-32-32A32.03667,32.03667,0,0,1,160,128Zm68-44v88a56.06353,56.06353,0,0,1-56,56H84a56.06353,56.06353,0,0,1-56-56V84A56.06353,56.06353,0,0,1,84,28h88A56.06353,56.06353,0,0,1,228,84Zm-52,44a48,48,0,1,0-48,48A48.05436,48.05436,0,0,0,176,128Zm16-52a12,12,0,1,0-12,12A12,12,0,0,0,192,76Z" />
                    </svg>
                  </span>
                  @teamjpr.ca
                </a>
              </li>
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <ServiceAreaMap />
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Team JPR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
