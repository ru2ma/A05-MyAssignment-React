import { useState } from "react"

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {isMenuOpen && (
            <div className="absolute left-0 top-full w-full bg-white px-6 py-4 md:hidden">
                <div className="flex flex-col gap-4 text-gray-600">
                <a href="#">Home</a>
                <a href="#">Technologies</a>
                <a href="#">Projects</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
      </div>
    )}
        {/* Mobile Menu Button */}
        <button
            className="text-2xl md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                ☰
        </button>

        <img
        src={`${import.meta.env.BASE_URL}logo-text.png`}
        // alt="Dev Stack"
        className="h-9 w-auto object-contain"
        />

        {/* Navigation Links */}
        <div className="hidden gap-8 text-sm font-medium text-gray-600 md:flex">
          <a href="#" className="text-gray-900">
            Home
          </a>

          <a href="#">Technologies</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        {/* Authentication */}
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium text-gray-700">
            Sign In
          </button>

          <button className="rounded-full bg-pink-500 px-5 py-2.5 text-sm font-semibold text-white">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar