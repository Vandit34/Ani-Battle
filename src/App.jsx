import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GiCrossedBones, GiBroadsword } from 'react-icons/gi'
import BattleArena from "./Battle.jsx"
function App () {
  const [currentPage, setCurrentPage] = useState('battle')
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  // console.log(isSideBarOpen);

  const changePage = page => {
    setCurrentPage(page)
    // setIsSideBarOpen(false)
  }
  const barfunc1 = () => {
    setIsSideBarOpen(true)
    // console.log(isSideBarOpen)
  }
  const barfunc2 = () => {
    setIsSideBarOpen(false)
    // console.log(isSideBarOpen)
  }

  return (
    <>
      <div>
        {/* Creating a UI which  change the state depending upon options clicked */}
        <section>
          {currentPage === 'home' && (
            <>
              <div className='homeBg'>
                {/* Hero Section */}
                <div className='text-center'>
                  <h1 className='text-6xl font-extrabold mb-6 pt-10 tracking-wider text-[#004AAD] drop-shadow-md'>
                    Ani-Battle
                  </h1>
                  <p className='text-lg text-[#2C8ED6] mb-10 font-medium'>
                    Step into the ultimate arena where your favorite anime
                    characters clash in epic battles.
                  </p>
                </div>

                {/* Features Section */}
                <div className='mt-16 flex flex-col md:flex-row justify-center gap-8'>
                  <div className='bg-white bg-opacity-90 p-6 rounded-xl shadow-xl w-80 text-center hover:scale-105 transition-transform duration-300'>
                    <h2 className='text-2xl font-semibold text-[#004AAD] mb-4'>
                      Choose Your Fighter
                    </h2>
                    <p className='text-sm text-[#2C8ED6]'>
                      Pick from a roster of legendary anime warriors with unique
                      abilities.
                    </p>
                  </div>
                  <div className='bg-white bg-opacity-90 p-6 rounded-xl shadow-xl w-80 text-center hover:scale-105 transition-transform duration-300'>
                    <h2 className='text-2xl font-semibold text-[#004AAD] mb-4'>
                      Strategize & Conquer
                    </h2>
                    <p className='text-sm text-[#2C8ED6]'>
                      Use special attacks, defend wisely, and outsmart your
                      opponent in turn-based gameplay.
                    </p>
                  </div>
                  <div className='bg-white bg-opacity-90 p-6 rounded-xl shadow-xl w-80 text-center hover:scale-105 transition-transform duration-300'>
                    <h2 className='text-2xl font-semibold text-[#004AAD] mb-4'>
                      Battle Logs
                    </h2>
                    <p className='text-sm text-[#2C8ED6]'>
                      Keep track of each move and relive the thrill with
                      detailed battle logs.
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
          {currentPage === 'battle' && (
            <>
              <div className='battleBg'>
              <BattleArena/>

              </div>
            </>
          )}
        </section>
        {/* Navbar with options and toggle feature is there */}
        <GiHamburgerMenu className='menuBar' onClick={barfunc1} />
        <div
          className={` absolute top-0 right-0 h-screen bg-red-500 transition-transform duration-500 ${
            isSideBarOpen ? 'translate-x-0 w-[20%]' : 'translate-x-10 w-[0%]'
          }`}
        >
          <GiCrossedBones
            onClick={barfunc2}
            className='absolute top-4 right-4 text-white cursor-pointer'
          />
          <ul
            className={`flex flex-col items-center mt-5 transition-opacity duration-100 ${
              isSideBarOpen ? 'opacity-100' : 'opacity-0 '
            }`}
          >
            <li className='pt-4 text-[1.1rem] cursor-pointer'>Home</li>
            <li className='pt-4 text-[1.1rem] cursor-pointer'>Battle</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
