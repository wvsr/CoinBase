function trending({ data }) {
  const TrendingCard = ({ price, symbol, thumb, slug }) => {
    return (
      <div className='w-full md:max-w-xs bg-white shadow-xl rounded-xl py-8 px-6'>
        <img src={thumb} alt='' />
        <p class='text-2xl mt-3 font-bold text-gray-800'>
          Battle Infinity
          <span className='uppercase text-base text-gray-600'> / {symbol}</span>
        </p>
        <p className='text-4xl font-bold mt-3'>
          $ {price?.toString().slice(0, 5)}
        </p>
      </div>
    )
  }
  data = data?.coins
  return (
    <div className='bg-blue-50 min-h-screen p-3'>
      <h2 className='text-4xl py-4 font-bold'>Trending</h2>
      <div className='flex flex-wrap gap-4'>
        {data.map((data, id) => (
          <TrendingCard
            key={id}
            price={data.item.price_btc}
            symbol={data.item.symbol}
            slug={data.item.slug}
            thumb={data.item.small}
          />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://api.coingecko.com/api/v3/search/trending')
  const data = await res.json()
  return {
    props: {
      data,
    },
    revalidate: 60 * 60 * 6,
  }
}

export default trending
