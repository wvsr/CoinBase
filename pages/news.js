export default function ({ data, id }) {
  return (
    <div className='p-3 bg-blue-50 '>
      <h2 className='text-4xl my-4'>Trending News</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        {data.map((props) => (
          <>
            {props?.image?.thumbnail?.contentUrl && (
              <a
                href={props?.url}
                target='_blank'
                className='max-w-sm space-y-2'
                key={id}
              >
                <img
                  src={props?.image?.thumbnail?.contentUrl}
                  className='w-full h-auto transform hover:scale-105 transition-transform duration-200'
                  alt=''
                />
                <h2 className='text-xl break-words hover:underline underline-offset-2'>
                  {props?.name}
                </h2>
              </a>
            )}
          </>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const options = {
    method: 'GET',
    headers: {
      'X-BingApis-SDK': 'true',
      'X-RapidAPI-Key': 'b7541e002fmshbedac2ddfd35148p117413jsn5d8184d91572',
      'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    },
  }

  const res = await fetch(
    'https://bing-news-search1.p.rapidapi.com/news/search?q=cryptocurrency&count=100&freshness=Day&textFormat=Raw&safeSearch=Off',
    options
  )
  const data = await res.json()
  return {
    props: {
      data: data.value,
    },
    revalidate: 14400,
  }
}
