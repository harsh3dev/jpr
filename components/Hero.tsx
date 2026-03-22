import Image from 'next/image';
import CTAButton from './CTAButton';
import { CONTACT_INFO } from '@/lib/constants';

interface HeroProps {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function Hero({
  headline = 'Professional Property Care Services',
  subheadline = 'Year-round lawn care, snow removal, and property maintenance for residential and commercial clients.',
  ctaText = 'Request Consultation',
  ctaHref = '/contact',
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with parallax effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/image.png"
          alt="Beautiful landscaped garden with modern home"
          fill
          priority
          className="object-cover object-center blur-[0.7px]"
          sizes="100vw"
        />
        {/* Gradient Overlay for better text readability and richness */}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/30 to-primary-dark/80" />
        {/* Subtle glowing effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0.2)_100%)] mix-blend-overlay pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium tracking-wide uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Serving Ontario with Pride
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight drop-shadow-lg mb-4">
            {headline}
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-100 max-w-2xl mx-auto leading-snug font-medium mb-10 text-shadow">
            {subheadline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-2">
            <CTAButton text={ctaText} href={ctaHref} size="lg" className="shadow-xl shadow-accent/20" />
            <CTAButton 
              text="View Our Services" 
              href="/services" 
              variant="secondary" 
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20" 
            />
          </div>
        </div>
      </div>

      {/* Contact Bar - replaces fade, acts as separator */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-primary-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-12 py-3 sm:py-4">
          <div className="flex items-center gap-4 sm:gap-12">
            {CONTACT_INFO.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/\s|\(|\)|-/g, '')}`}
                className="text-white text-base sm:text-2xl font-bold tracking-wide hover:text-accent transition-colors"
              >
                {phone}
              </a>
            ))}
          </div>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="text-white text-base sm:text-2xl font-bold tracking-wide hover:text-accent transition-colors"
          >
            {CONTACT_INFO.email}
          </a>
        </div>
      </div>
    </section>
  );
}
