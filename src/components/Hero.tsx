function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl items-center px-6 py-16">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-gray-900 md:text-6xl">
            Build Your Ideal
            <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-slate-500 md:text-lg">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <button className="rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90">
              Explore Technologies
            </button>

            <button className="rounded-lg border border-gray-200 bg-white px-8 py-3 text-sm font-medium text-slate-500 transition hover:bg-gray-50">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="hidden w-1/2 items-center justify-center md:flex">
          <img
            src="./banner-stack.png"
            alt="Development stack illustration"
            className="w-full max-w-[480px] object-contain"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;