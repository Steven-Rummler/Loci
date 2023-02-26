import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useQuery } from 'react-query'

const api = process.env.NEXT_PUBLIC_API_URL;
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Loci</title>
        <meta name="description" content="Putting thoughts in their place" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Loci</h1>
        <h2>Putting thoughts in their place</h2>
        <Loci />
      </main>
    </>
  )
}

function Loci() {
  const {data, isLoading, isError} = useQuery('loci', async () => {
    console.log(api);
    const result = await fetch(`${api}/loci`)
    return await result.json()
  })

  if (isLoading) return <p>Loading</p>;
  if (isError) return <p>Error</p>;
  if (!Array.isArray(data)) return <p>Bad Data</p>;

  return <>
  {data.map(document => <p key={document._id}>{JSON.stringify(document)}</p>)}
  </>
}
