import { heroBgMobile } from '../utils/images';

export default function Hero() {
  return (
    <section className="relative h-64 w-full">

      <div className="absolute inset-0 bg-asdev-night rounded-b-2xl z-0"></div>

      <img
        src={heroBgMobile}
        alt="Hero"
        className="absolute w-full h-64 object-cover rounded-b-2xl z-10"
      />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6 text-white flex flex-col items-center">
          <p className="text-lg md:text-xl max-w-xl">
            Hello, welcome to
          </p>

          <h1 className="text-3xl md:text-6xl font-semibold text-center">
            The smarter way to <p className='font-bold'>level up</p>
          </h1>
        </div>
      </div>

    </section>
  )
}