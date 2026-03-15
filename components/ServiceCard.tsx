import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  features?: string[];
  href?: string;
}

export default function ServiceCard({ title, description, icon, features, href }: ServiceCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-8 flex flex-col border border-gray-100 overflow-hidden">
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      <div className="relative z-10">
        <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-4xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-6 flex-1 leading-relaxed text-base">
          {description}
        </p>
        
        {features && features.length > 0 && (
          <ul className="space-y-2 mb-8">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        )}
        
        {href && (
          <Link
            href={href}
            className="mt-auto inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary-dark transition-colors group-hover:translate-x-1 duration-300"
          >
            Learn more 
            <span className="text-lg">→</span>
          </Link>
        )}
      </div>
    </div>
  );
}
