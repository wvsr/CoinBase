import { TbMenu } from 'react-icons/tb'

function header() {
  return (
    <header className='bg-blue-50 py-3 '>
      <nav className='container flex px-2 sm:px-0 sm:mx-auto'>
        <div className='logo flex-1 text-2xl'>CoinBase</div>
        <button className='md:hidden text-2xl'>
          <TbMenu />
        </button>
      </nav>
    </header>
  )
}

export default header
