import { Link } from "react-router-dom"
import Container from "../ui/Container";
import { asteroiDevImagotype } from '../../utils/images';

export default function Footer() {
  return (
    <footer className="border-t rounded-t-2xl bg-asdev-night py-2">
      <Container>
        <div className="font-bold text-lg py-3">
          <Link to="/">
            <img src={asteroiDevImagotype} alt="Asteroidev Logo" className='h-8' />
          </Link>
        </div>

        <div className="py-6 text-center text-sm text-asdev-white border-t-1 border-asdev-white">
          {`© AsteroiDev. All rights reserved, ${new Date().getFullYear()}.`}
        </div>
      </Container>
    </footer>
  )
}