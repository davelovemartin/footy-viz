import React from 'react'
import Head from 'next/head'
import useSetStateWithLocalStorage from '../hooks/useSetStateWithLocalStorage'

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/test')
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }

  return { props: { data } }
}

export default function Home(props) {
  const [filter, setFilter] = useSetStateWithLocalStorage('filter', 'all')
  const { data, error } = props

  return (
    <div className="container">
      <Head>
        <title>Footy Viz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1 className="title">Footy Viz</h1>
        <p>Stats from the knockout stages of the 2018 World Cup.</p>
        {error && <p>{error.message}</p>}
        {!data && !error && <p>Loading...</p>}
        {data && <p>Status: {data.status}</p>}
      </header>
      <main>
        <section className="filters">
          <header>filters</header>
          <div>
            <button type="button" onClick={() => setFilter('round of 16')}>
              round of 16
            </button>
            <button type="button" onClick={() => setFilter('quarter-finals')}>
              quarter-finals
            </button>
            <button type="button" onClick={() => setFilter('semi-final')}>
              semi-final
            </button>
            <button type="button" onClick={() => setFilter('play off')}>
              play off
            </button>
            <button type="button" onClick={() => setFilter('final')}>
              final
            </button>
          </div>
          <button type="button" onClick={() => setFilter('all')}>
            show all rounds
          </button>
        </section>
        <section>
          <header>filter selected: {filter}</header>
        </section>
      </main>
    </div>
  )
}
