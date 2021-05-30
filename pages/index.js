import React from 'react'
import Head from 'next/head'
import useSWR from 'swr'
import fetcher from '../utilities/fetcher'

export default function Home() {
  const { data, error } = useSWR('/api/test/', fetcher)

  return (
    <div className="container">
      <Head>
        <title>Footy Viz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Footy Viz</h1>
        {error && <p>{error.message}</p>}
        {!data && !error && <p>Loading...</p>}
        {data && <p>Status: {data.status}</p>}
      </main>
    </div>
  )
}
