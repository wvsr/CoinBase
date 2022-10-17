import Header from './header'
import Sidebar from './sidebar'

function layout({ children }) {
  return (
    <>
      <Header />
      <Sidebar />
      <main className='h-full md:ml-[25%] lg:ml-[20%]'>{children}</main>
    </>
  )
}

export default layout
