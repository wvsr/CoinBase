import Image from 'next/image'
import { BiTrendingUp, BiTrendingDown } from 'react-icons/bi'
export function index({ data }) {
  return (
    <div className='p-3'>
      <div className='w-full overflow-x-scroll'>
        <table className='w-full text-base text-left text-gray-500 '>
          <thead className='text-base text-gray-700 uppercase bg-gray-50 '>
            <tr>
              <th scope='col' className='py-3 px-6'>
                Name
              </th>
              <th scope='col' className='py-3 px-6'>
                Price in USD
              </th>
              <th scope='col' className='py-3 px-6'>
                price change in 24h %
              </th>
              <th scope='col' className='py-3 px-6'>
                valuation
              </th>
              <th scope='col' className='py-3 px-6'>
                volume
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((props, id) => (
              <tr className='bg-white border-b' key={id}>
                <th className='py-4 px-6 flex gap-3'>
                  <Image
                    width={23}
                    height={20}
                    src={props.image}
                    alt={props.name}
                  />{' '}
                  {props.name}
                </th>
                <td className='py-4 px-6'>{props.current_price}</td>
                <td className='py-4 px-6 '>
                  <div
                    className={`flex gap-2 w-auto max-w-fit rounded-full px-3 py-1.5 ${
                      props.price_change_percentage_24h < 0
                        ? 'bg-red-200 text-red-700'
                        : 'bg-green-200 text-green-700'
                    }`}
                  >
                    <span className='pt-[7px]'>
                      {props.price_change_percentage_24h < 0 ? (
                        <BiTrendingDown />
                      ) : (
                        <BiTrendingUp />
                      )}
                    </span>
                    {props.price_change_percentage_24h}
                  </div>
                </td>
                <td className='py-4 px-6'>{props.market_cap}</td>
                <td className='py-4 px-6'>{props.total_volume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc &per_page=50'
  )
  const data = await res.json()
  return {
    props: {
      data,
    },
    revalidate: 600,
  }
}
export default index
