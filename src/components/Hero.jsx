import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[90vh] pt-16 overflow-hidden bg-[#0b0e14]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/XuAg4PYWfzmy0iW1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-24 sm:py-32">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
              Hillsiani Research Hub
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/80 max-w-xl">
              Advancing technology, multicultural education, and empowerment at Markaz Knowledge City. Learn, build, and innovate for Industry 4.0 and beyond.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#programs" className="inline-flex items-center rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90">
                Explore Programs
              </a>
              <a href="#research" className="inline-flex items-center rounded-md bg-black/50 border border-white/20 text-white px-4 py-2 text-sm font-medium hover:bg-black/60">
                Start Research
              </a>
              <a href="#apply" className="inline-flex items-center rounded-md bg-indigo-600 text-white px-4 py-2 text-sm font-medium hover:bg-indigo-500">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0e14] via-transparent to-transparent" />
    </section>
  );
}
