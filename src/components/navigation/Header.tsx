import { Link, NavLink } from "react-router-dom";
import { CircleChevronDown, CircleX } from "lucide-react";
import Container from "../ui/Container";
import { asteroiDevIsotype } from '../../utils/images';
import { useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import NavItem from "./NavItem";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  useClickOutside(menuRef, () => setMenuOpen(false))

  return (
    <header className="border-b bg-asdev-night z-50">
      <Container>
        <div className="flex items-center justify-between py-3 relative">

          <div className="font-bold text-lg">
            <Link to="/">
              <img src={asteroiDevIsotype} alt="Asteroidev Logo" className='w-16 h-16' />
            </Link>
          </div>

          <nav className="hidden md:flex gap-8 text-asdev-white">
            <NavItem to="/" exact>Home</NavItem>
            <NavItem to="/services" exact>Services</NavItem>
            <NavItem to="/members" exact>Members</NavItem>
            {/* <NavItem to="/contact" exact>Contact</NavItem> */}
          </nav>

          <button
            className="md:hidden z-50 text-asdev-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <CircleX size={26} /> : <CircleChevronDown size={26} />}
          </button>

          <div
            ref={menuRef}
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
              <NavLink className="" to="/" onClick={() => setMenuOpen(!menuOpen)}>Home</NavLink>
              <NavLink className="" to="/services" onClick={() => setMenuOpen(!menuOpen)}>Services</NavLink>
              <NavLink className="" to="/members" onClick={() => setMenuOpen(!menuOpen)}>Members</NavLink>
              {/* <NavLink className="" to="/contact" onClick={() => setMenuOpen(!menuOpen)}>Contact</NavLink> */}
            </nav>
          </div>

        </div>
      </Container>
    </header>
  )
}