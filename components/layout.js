import Header from './header'
import Head from 'next/head'
// import Sidebar from './sidebar'

function layout({ children }) {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Header />
      {/* <Sidebar /> */}
      <main className='h-full md:ml-[25%] lg:ml-[20%] '>{children}</main>
    </>
  )
}

export default layout
