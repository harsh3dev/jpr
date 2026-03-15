import CTAButton from './CTAButton';

interface PropertyCarePlanProps {
  title: string;
  duration: string;
  services: string[];
  featured?: boolean;
}

export default function PropertyCarePlan({ title, duration, services, featured }: PropertyCarePlanProps) {
  return (
    <div
      className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
        featured
          ? 'bg-green-700 text-white shadow-2xl ring-4 ring-green-400/40'
          : 'bg-white text-gray-900 shadow-md hover:shadow-xl'
      }`}
    >
      {featured && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-400 text-green-900 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
          Most Popular
        </span>
      )}
      <div className={`text-sm font-semibold uppercase tracking-widest mb-2 ${featured ? 'text-green-200' : 'text-green-600'}`}>
        {duration}
      </div>
      <h3 className="text-2xl font-bold mb-6">{title}</h3>
      <ul className="space-y-3 flex-1 mb-8">
        {services.map((service) => (
          <li key={service} className="flex items-start gap-3">
            <span className={`mt-1 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-xs ${featured ? 'bg-green-400 text-green-900' : 'bg-green-100 text-green-700'}`}>
              ✓
            </span>
            <span className={`text-sm ${featured ? 'text-green-50' : 'text-gray-700'}`}>{service}</span>
          </li>
        ))}
      </ul>
      <CTAButton
        text="Request Consultation"
        href="/contact"
        variant={featured ? 'secondary' : 'primary'}
        className="w-full justify-center"
      />
    </div>
  );
}
