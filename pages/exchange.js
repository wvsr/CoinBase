import { useState } from 'react'
import Image from 'next/image'
function Exchange({ data, curData }) {
  const [quantity, setQuantity] = useState(0)
  const [inusd, setInusd] = useState(null)
  const [selectValue, setSelectValue] = useState(0)
  const [curValue, setCurValue] = useState(0)

  function convertUsd() {
    console.log(curValue * quantity * selectValue)
    setInusd(selectValue * quantity * curValue)
  }

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
              {data.slice(0, 50).map((props, id) => (
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
                  <td className='py-4 px-6'>{props.market_cap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* calculator */}
        <div className='w-full md:max-w-sm max-h-80 xl:sticky bg-white xl:top-20 p-3 rounded-lg shadow-lg'>
          <p className='text-2xl my-3'>Convert</p>
          <div>
            <input
              className='text-lg w-full py-3 px-3 outline-none rounded-lg bg-blue-50 mb-3'
              placeholder='currency'
              type='number'
              onChange={(e) => setQuantity(e.target.value)}
            />
            <input
              className='text-lg w-full py-3 px-3 outline-none rounded-lg bg-blue-50 mb-3'
              placeholder='In USD'
              type='number'
              value={inusd}
              readOnly
            />
            <div className='flex gap-2'>
              {' '}
              <select
                name=''
                id=''
                className='text-lg w-full py-3 px-3 outline-none rounded-lg bg-blue-50 mb-3'
                onChange={(e) => setSelectValue(e.target.value)}
              >
                {data.map((props, id) => (
                  <option value={props.current_price} key={id}>
                    {props.name}
                  </option>
                ))}
              </select>
              <select
                name=''
                id=''
                className='text-lg w-full py-3 px-3 outline-none rounded-lg bg-blue-50 mb-3'
                onChange={(e) => setCurValue(e.target.value)}
              >
                {curData.map((props, id) => (
                  <option value={props[0]} key={id}>
                    {props[1]}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            className='bg-blue-500 w-full py-2 text-white rounded-md'
            onClick={convertUsd}
          >
            Convert Now
          </button>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const coinRes = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc &per_page=100'
  )
  const coinData = await coinRes.json()
  const curRes = await fetch(
    'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json'
  )
  const curData = await curRes.json()
  const curList = await fetch(
    'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json'
  )
  const curListRes = await curList.json()
  // console.log(
  //   Object.entries(curData.usd).map((e, i) => [e[1], curListRes[e[0]]])
  // )
  return {
    props: {
      data: coinData,
      curData: Object.entries(curData.usd).map((e) => [e[1], curListRes[e[0]]]),
    },
    revalidate: 600,
  }
}

Exchange.displayName = 'Exchange'
export default Exchange
