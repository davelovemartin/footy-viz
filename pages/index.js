import React from 'react'
import Head from 'next/head'
import useSWR from 'swr'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

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
