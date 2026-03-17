import { Link } from "react-router-dom"
import Container from "../ui/Container";
import { asteroiDevImagotype } from '../../utils/images';

export default function Footer() {
  return (
    <footer className="border-t rounded-t-2xl bg-asdev-night py-2">
      <Container>
        <div className="py-3 flex justify-between items-center">
          <Link to="/">
            <img src={asteroiDevImagotype} alt="Asteroidev Logo" className='h-8' />
          </Link>
          <p className="hidden text-asdev-white text-sm font-light py-2 md:block md:w-1/2">
            An online platform designed to boost your personal and professional skills with tailored learning, access to a supportive network, and opportunities that shape your future.
          </p>
        </div>

        <div className="py-6 text-center md:text-left text-sm text-asdev-white border-t-1 border-asdev-white">
          {`© AsteroiDev. All rights reserved, ${new Date().getFullYear()}.`}
        </div>
      </Container>
    </footer>
  )
}