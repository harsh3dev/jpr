import CTAButton from '@/components/CTAButton';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <div className="text-8xl mb-6">🌿</div>
        <h1 className="text-6xl font-extrabold text-green-700 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Looks like this page got lost in the garden. Let's get you back on track.
        </p>
        <CTAButton text="Back to Home" href="/" size="lg" />
      </div>
    </section>
  );
}
