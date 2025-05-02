import './App.css'

function App() {

  return (
    <>
      <div className='bg-asdev-night w-screen h-screen flex justify-center items-center'>
        <div className='flex flex-col items-center justify-center h-full'>
          <div className='flex gap-2 py-4'>
            <div className="w-20 h-8 border border-asdev-white bg-linear-to-r from-asdev-aqua via-asdev-violet to-asdev-purple text-asdev-white text-center">LGTR</div>
            <div className="w-20 h-8 border border-asdev-white bg-linear-45 from-asdev-aqua via-asdev-violet to-asdev-purple text-asdev-white text-center">LG45</div>
            <div className="w-20 h-8 border border-asdev-white bg-linear-to-r from-asdev-blue/85 to-asdev-night text-asdev-white text-center">DGTR</div>
            <div className="w-20 h-8 border border-asdev-white bg-linear-45 from-asdev-blue/85 to-asdev-night text-asdev-white text-center">DG45</div>
            <div className="w-8 h-8 border border-asdev-white bg-asdev-night text-asdev-white text-center">N</div>
            <div className="w-8 h-8 border border-asdev-white bg-asdev-nightSoft text-asdev-white text-center">NS</div>
            <div className="w-8 h-8 border border-asdev-white bg-asdev-blue text-asdev-white text-center">B</div>
            <div className="w-8 h-8 border border-asdev-white bg-asdev-aqua text-asdev-night text-center">A</div>
            <div className="w-8 h-8 border border-asdev-white bg-asdev-purple text-asdev-white text-center">P</div>
            <div className="w-8 h-8 border border-asdev-white bg-asdev-violet text-asdev-white text-center">V</div>
            <div className="w-8 h-8 border border-asdev-white bg-asdev-white text-asdev-night text-center">W</div>
            <div className="w-8 h-8 border border-asdev-white bg-asdev-gray-100 text-asdev-night text-center">G1</div>
            <div className="w-8 h-8 border border-asdev-white bg-asdev-gray-200 text-asdev-night text-center">G2</div>
            <div className="w-8 h-8 border border-asdev-white bg-asdev-gray-300 text-asdev-night text-center">G3</div>
            <div className="w-8 h-8 border border-asdev-white bg-asdev-gray-400 text-asdev-night text-center">G4</div>
            <div className="w-8 h-8 border border-asdev-white bg-asdev-gray-500 text-asdev-night text-center">G5</div>
            <div className="w-8 h-8 border border-asdev-white bg-asdev-gray-600 text-asdev-white text-center">G6</div>
            <div className="w-8 h-8 border border-asdev-white bg-asdev-gray-700 text-asdev-white text-center">G7</div>
            <div className="w-8 h-8 border border-asdev-white bg-asdev-gray-800 text-asdev-white text-center">G8</div>
            <div className="w-8 h-8 border border-asdev-white bg-asdev-gray-900 text-asdev-white text-center">G9</div>
          </div>
          <div>
            <p className='text-asdev-white font-poppins text-center'>Poppins: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p className='text-asdev-white font-lato font-light text-center'>Lato: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='flex flex-grow flex-col items-center justify-center'>
            <img src='./src/assets/asteroidev.svg' alt="Asteroidev Logo" className='w-20 h-20'/>
            <p className='text-3xl text-asdev-white font-poppins'>
              <b className='text-asdev-violet'>Asteroidev</b> Landing Page.
            </p>
            <p className='text-asdev-white text-md font-lato font-light'>
              For the best!
            </p>
          </div>
          <div className='mt-auto text-asdev-white text-sm py-2 font-lato italic'>
            Aurora 94 | Fortuna 19
          </div>
        </div>
      </div>
    </>
  )
}

export default App