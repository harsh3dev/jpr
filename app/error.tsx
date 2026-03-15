'use client';

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <div className="text-8xl mb-6">⚠️</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h2>
        <p className="text-gray-600 mb-8">We hit a snag. Please try again.</p>
        <button
          onClick={reset}
          className="px-7 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors focus:outline-none focus:ring-4 focus:ring-green-400/50"
        >
          Try Again
        </button>
      </div>
    </section>
  );
}
