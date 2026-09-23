function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:min-h-[calc(100vh-72px)] md:items-center md:py-16">

        {/* Hero Content */}
        <div className="w-full text-center md:w-1/2 md:text-left">

          <p className="mb-5 text-sm font-bold tracking-[0.3em] text-pink-500">
            WELCOME TO DEVSTACK
          </p>

          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-900 md:text-6xl">
            Build Your Ideal
            <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-500 md:mx-0 md:text-lg">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <button className="rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90">
              Explore Technologies
              <span className="ml-3">→</span>
            </button>

            <button className="rounded-lg border border-gray-200 bg-white px-8 py-3 text-sm font-medium text-slate-500 transition hover:bg-gray-50">
              Learn More
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-10 flex w-full justify-center md:mt-0 md:w-1/2">
          <img
            src="/banner-stack.png"
            alt="Development stack illustration"
            className="w-full max-w-[430px] object-contain"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;