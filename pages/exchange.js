function Exchange({ data }) {
  return (
    <div className='p-3 bg-blue-50'>
      <div className='flex flex-col-reverse xl:flex-row justify-start gap-5'>
        <div className='overflow-x-auto relative flex-1'>
          <table className='w-full text-base text-left text-gray-500'>
            <thead className='text-base text-gray-700 uppercase bg-gray-50 '>
              <tr>
                <th scope='col' className='py-3 px-6'>
                  Name
                </th>
                <th scope='col' className='py-3 px-6'>
                  Price
                </th>
                <th scope='col' className='py-3 px-6'>
                  Market Cap
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((props, id) => (
                <tr className='bg-white border-b' key={id}>
                  <th className='py-4 px-6 flex gap-3'>
                    <img
                      className='h-5 w-5'
                      src={props.image}
                      alt={props.name}
                    />{' '}
                    {props.name}
                  </th>
                  <td className='py-4 px-6'>{props.current_price}</td>
                  <td className='py-4 px-6'>{props.market_cap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='max-w-sm max-h-64 xl:sticky bg-white xl:top-20 p-3 rounded-lg shadow-lg'>
          <p className='text-2xl my-3'>Convert</p>
          <div>
            <input
              className='text-lg w-full py-3 px-3 outline-none rounded-lg bg-blue-50 mb-3'
              placeholder='currency'
              type='number'
            />
            <input
              className='text-lg w-full py-3 px-3 outline-none rounded-lg bg-blue-50 mb-3'
              placeholder='In USD'
              type='number'
              readOnly
            />
          </div>

          <button className='bg-blue-500 w-full py-2 text-white rounded-md'>
            Convert Now
          </button>
        </div>
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
      revalidate: 600,
    },
  }
}

Exchange.displayName = 'Exchange'
export default Exchange
