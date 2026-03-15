import CTAButton from './CTAButton';

interface PlanCardProps {
  title: string;
  services: string[];
  featured?: boolean;
  duration: string;
}

export default function PlanCard({ title, services, featured = false, duration }: PlanCardProps) {
  return (
    <div 
      className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 h-full ${
        featured 
          ? 'bg-primary text-white shadow-2xl scale-105 z-10' 
          : 'bg-white text-gray-900 shadow-lg hover:shadow-xl border border-gray-100'
      }`}
    >
      {featured && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold shadow-md uppercase tracking-wider">
          Most Popular
        </div>
      )}

      <div className="mb-8 text-center">
        <h3 className={`text-2xl font-bold mb-2 ${featured ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h3>
        <p className={`text-sm font-medium opacity-80 ${featured ? 'text-green-100' : 'text-gray-500'}`}>
          {duration} Comprehensive Care
        </p>
      </div>

      <ul className="space-y-4 mb-8 flex-1">
        {services.map((service) => (
          <li key={service} className="flex items-start gap-3">
            <span className={`mt-1 shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${featured ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'}`}>
              ✓
            </span>
            <span className={`text-sm ${featured ? 'text-green-50' : 'text-gray-600'}`}>
              {service}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-auto text-center">
        <CTAButton 
          text="Get a Quote" 
          href="/contact" 
          variant={featured ? 'secondary' : 'primary'} 
          className="w-full"
        />
      </div>
    </div>
  );
}
