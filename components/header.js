import { useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { TbMenu } from 'react-icons/tb'
import { FaRegNewspaper } from 'react-icons/fa'
import { MdHome, MdCached, MdTrendingUp, MdLeaderboard } from 'react-icons/md'

function Header() {
  const ShowNav = useRef(null)
  const ToggleNav = () => {
    ShowNav.current.classList.toggle('hidden')
  }

  const router = useRouter()

  function SideLink({ href, text, icon }) {
    return (
      <Link href={href} className='w-full text-center'>
        <a
          className={`text-gray-700 rounded-md px-6 py-2 capitalize text-xl flex gap-4 transition-all duration-300 hover:bg-slate-200 ${
            router.pathname == href ? 'bg-[#D5E6FB] text-[#0060FF]' : ''
          }`}
          onClick={ToggleNav}
        >
          <span className='pt-[5px]'>{icon}</span> {text}
        </a>
      </Link>
    )
  }

  return (
    <>
      <header className='bg-slate-100 border-b-[0.5px] border-black-100 shadow-sm py-2 top-0 sticky w-full z-50'>
        <nav className='container flex px-2 sm:px-0 sm:mx-auto items-center'>
          {/* Logo */}
          <div className='logo flex-1 text-2xl font-black'>
            <Link href='/'>
              <span className='flex items-center gap-2 max-w-fit cursor-pointer mx-3 my-1.5'>
                <MdLeaderboard />
                CoinBase
              </span>
            </Link>
          </div>
          <button
            className='md:hidden text-2xl outline-none mx-3 my-2'
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
        <div className='overflow-x-hidden pt-24 px-4 space-y-4 flex flex-col font-medium'>
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
