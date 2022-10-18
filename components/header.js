import { useRef } from 'react'
import Link from 'next/link'
import { TbMenu } from 'react-icons/tb'
// import MediaQuery from 'react-responsive'
import { FaRegNewspaper } from 'react-icons/fa'
import { MdHome, MdCached, MdTrendingUp, MdLeaderboard } from 'react-icons/md'

function Header() {
  const ShowNav = useRef(null)
  const ToggleNav = () => {
    ShowNav.current.classList.toggle('hidden')
  }

  function SideLink({ href, text, icon }) {
    return (
      <Link href={href} className='w-full text-center'>
        <a
          className='text-gray-700 hover:bg-[#D5E6FB] hover:text-[#0060FF] rounded-md px-6 py-2 capitalize font-normal text-xl flex gap-4 transition-all duration-300'
          onClick={ToggleNav}
        >
          <span className='pt-[5px]'>{icon}</span> {text}
        </a>
      </Link>
    )
  }
  return (
    <>
      <header className='bg-blue-50 border-b-[0.5px] border-black-100 shadow-sm py-3 top-0 sticky w-full z-50'>
        <nav className='container flex px-2 sm:px-0 sm:mx-auto'>
          <Link href='/'>
            <div className='logo flex-1 text-2xl font-black flex gap-1'>
              <span className='pt-[5px]'>
                <MdLeaderboard />
              </span>
              CoinBase
            </div>
          </Link>
          <button
            className='md:hidden text-2xl outline-none'
            onClick={ToggleNav}
          >
            <TbMenu />
          </button>
        </nav>
      </header>

      {/* side bar */}
      <div
        className='bg-slate-50 hidden md:block h-full w-[80%] sm:w-[60%] md:w-1/4 lg:w-[20%] fixed z-40 top-0 left-0  shadow-lg  border-r-[0.5px] border-gray-100'
        ref={ShowNav}
      >
        <div className='overflow-x-hidden pt-24 px-4 space-y-4 flex flex-col'>
          <SideLink href='/' text='home' icon={<MdHome />} />
          <SideLink href='/exchange' text='exchange' icon={<MdCached />} />
          <SideLink href='/trending' text='trending' icon={<MdTrendingUp />} />
          <SideLink href='/news' text='news' icon={<FaRegNewspaper />} />
        </div>
      </div>
    </>
  )
}
Header.displayName = 'Header'
export default Header
