import { Link } from "react-router-dom"
import { CircleChevronDown, CircleX } from "lucide-react"
import Container from "../../components/ui/Container"
import { asteroidevLogo } from '../../utils/images';
import { useState } from "react";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="border-b bg-asdev-night">
      <Container>
        <div className="flex items-center justify-between py-3 relative">

          <div className="font-bold text-lg">
            <img src={asteroidevLogo} alt="Asteroidev Logo" className='w-16 h-16' />
          </div>

          <nav className="hidden md:flex gap-8 text-asdev-white">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/members">Members</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          <button
            className="md:hidden z-50 text-asdev-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <CircleX size={26} /> : <CircleChevronDown size={26} />}
          </button>

          <div
            className={`
              md:hidden absolute -right-1.5 top-5.5
              bg-asdev-violet py-3 pr-16 pl-4
              rounded-lg shadow-lg
              transition-all duration-300 ease-out transform
              ${menuOpen
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}
            `}
          >
            <nav className="flex flex-col gap-2 text-asdev-white">
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/members">Members</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>

        </div>
      </Container>
    </header>
  )
}