import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import useSetStateWithLocalStorage from '../hooks/useSetStateWithLocalStorage'
import ToggleList from '../components/ToggleList'
import Toggle from '../components/Toggle'

export async function getStaticProps() {
  // @todo: handle paths in different environments
  const res = await fetch('http://localhost:3000/api/test')
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }

  return { props: { data } }
}

export default function Home(props) {
  // set state for filters
  const [areAllFiltersOn, setAreAllFiltersOn] = useState(
    'areAllFiltersOn',
    true,
  )
  const [filterLastSixteen, setFilterLastSixteen] = useSetStateWithLocalStorage(
    'filterLastSixteen',
    true,
  )
  const [
    filterQuarterFinals,
    setFilterQuarterFinals,
  ] = useSetStateWithLocalStorage('filterQuarterFinals', true)
  const [filterSemiFinals, setFilterSemiFinals] = useSetStateWithLocalStorage(
    'filterSemiFinals',
    true,
  )
  const [filterPlayOff, setFilterPlayOff] = useSetStateWithLocalStorage(
    'filterPlayOff',
    true,
  )
  const [filterFinal, setFilterFinal] = useSetStateWithLocalStorage(
    'filterFinal',
    true,
  )

  // handle changes in filters

  useEffect(() => {
    if (
      filterLastSixteen &&
      filterQuarterFinals &&
      filterSemiFinals &&
      filterPlayOff &&
      filterFinal
    ) {
      setAreAllFiltersOn(true)
    } else {
      setAreAllFiltersOn(false)
    }
  }, [
    filterLastSixteen,
    filterQuarterFinals,
    filterSemiFinals,
    filterPlayOff,
    filterFinal,
  ])

  // pass data from api as props
  const { data, error } = props

  const handleShowAll = () => {
    setFilterLastSixteen(true)
    setFilterQuarterFinals(true)
    setFilterSemiFinals(true)
    setFilterPlayOff(true)
    setFilterFinal(true)
  }

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
          <ToggleList>
            <Toggle
              onClick={() => setFilterLastSixteen(!filterLastSixteen)}
              label="round of 16"
              isToggleOn={filterLastSixteen}
            />
            <Toggle
              onClick={() => setFilterQuarterFinals(!filterQuarterFinals)}
              label="quarter-finals"
              isToggleOn={filterQuarterFinals}
            />
            <Toggle
              onClick={() => setFilterSemiFinals(!filterSemiFinals)}
              label="semi-final"
              isToggleOn={filterSemiFinals}
            />
            <Toggle
              onClick={() => setFilterPlayOff(!filterPlayOff)}
              label="play off"
              isToggleOn={filterPlayOff}
            />
            <Toggle
              onClick={() => setFilterFinal(!filterFinal)}
              label="final"
              isToggleOn={filterFinal}
            />
          </ToggleList>
          <button
            type="button"
            onClick={handleShowAll}
            disabled={areAllFiltersOn}
          >
            show all rounds
          </button>
        </section>
      </main>
    </div>
  )
}
