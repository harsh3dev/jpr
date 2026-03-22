import Image from 'next/image';

export default function ServiceAreaMap() {
  return (
    <div>
      <h3 className="text-white font-semibold mb-4 text-lg">Service Areas</h3>
      <div className="relative w-full max-w-[280px]">
        <Image
          src="/images/service-area-map.png"
          alt="Service area map covering Niagara Region"
          width={480}
          height={400}
          className="w-full h-auto rounded-xl"
        />
      </div>
      <p className="text-gray-400 text-xs mt-3">Serving the Niagara Region</p>
    </div>
  );
}
