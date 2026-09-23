function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* Main Footer */}
        <div className="grid gap-10 py-14 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-pink-500 to-purple-500 text-[10px] font-bold text-white">
                DS
              </div>

              <h2 className="text-base font-bold text-gray-900">
                Dev <span className="text-pink-500">Stack</span>
              </h2>
            </div>

            <p className="mt-4 max-w-sm text-xs leading-5 text-slate-400">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex gap-5 text-xs font-medium text-gray-600">
              <a href="#" className="hover:text-pink-500">
                GitHub
              </a>

              <a href="#" className="hover:text-pink-500">
                Twitter
              </a>

              <a href="#" className="hover:text-pink-500">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wide text-gray-800">
              Product
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-xs text-slate-400">
              <a href="#" className="hover:text-pink-500">
                Home
              </a>

              <a href="#" className="hover:text-pink-500">
                Technologies
              </a>

              <a href="#" className="hover:text-pink-500">
                Projects
              </a>
            </div>
          </div>

          {/* Company + Legal */}
          <div className="grid grid-cols-2 gap-8">

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wide text-gray-800">
                Company
              </h3>

              <div className="mt-4 flex flex-col gap-3 text-xs text-slate-400">
                <a href="#" className="hover:text-pink-500">
                  About
                </a>

                <a href="#" className="hover:text-pink-500">
                  Contact
                </a>

                <a href="#" className="hover:text-pink-500">
                  Careers
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wide text-gray-800">
                Legal
              </h3>

              <div className="mt-4 flex flex-col gap-3 text-xs text-slate-400">
                <a href="#" className="hover:text-pink-500">
                  Privacy Policy
                </a>

                <a href="#" className="hover:text-pink-500">
                  Terms of Service
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-4 border-t border-gray-100 py-6 text-xs text-slate-300 md:flex-row md:items-center md:justify-between">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-pink-500">
              Privacy
            </a>

            <a href="#" className="hover:text-pink-500">
              Terms
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;