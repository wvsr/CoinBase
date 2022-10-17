import { MdHome, MdCached, MdTrendingUp } from 'react-icons/md'
import { FaRegNewspaper } from 'react-icons/fa'
import Link from 'next/link'

function sidebar() {
  function SideLink({ href, text, icon }) {
    return (
      <Link href={href} className='w-full text-center '>
        <a className='text-gray-700 hover:bg-[#D5E6FB] hover:text-[#0060FF] rounded-md px-6 py-2 capitalize font-normal text-xl flex gap-4'>
          <span className='pt-[5px]'>{icon}</span> {text}
        </a>
      </Link>
    )
  }
  return (
    <div className='h-full w-[80%] sm:w-[60%] md:w-1/4 lg:w-[20%] fixed z-40 top-0 left-0 overflow-x-hidden pt-24 px-10 space-y-4 flex flex-col shadow-lg  border-r-[0.5px] border-gray-100'>
      <SideLink href='/' text='home' icon={<MdHome />} />
      <SideLink href='/' text='exchange' icon={<MdCached />} />
      <SideLink href='/' text='trending' icon={<MdTrendingUp />} />
      <SideLink href='/' text='news' icon={<FaRegNewspaper />} />
    </div>
  )
}

export default sidebar
