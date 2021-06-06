/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import useSetStateWithLocalStorage from '../hooks/useSetStateWithLocalStorage'
import ToggleList from '../components/ToggleList'
import Toggle from '../components/Toggle'
import combineStats from '../utilities/combineStats'

export async function getStaticProps() {
  const fetchPlayers = await fetch(
    `${
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000'
        : process.env.URL
    }/api/players`,
  )
  const playerData = await fetchPlayers.json()

  return { props: { playerData } }
}

export default function Home(props) {
  const { playerData } = props

  // set state for filters
  const [areAllFiltersOn, setAreAllFiltersOn] = useState(
    'areAllFiltersOn',
    true,
  )
  const [filteredData, setFilteredData] = useState(playerData.stats)
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
    setFilteredData(
      playerData.stats.filter(
        (stat) =>
          (stat.match_round === 'round of 16' && filterLastSixteen) ||
          (stat.match_round === 'quarter-finals' && filterQuarterFinals) ||
          (stat.match_round === 'semi-finals' && filterSemiFinals) ||
          (stat.match_round === 'play-off' && filterPlayOff) ||
          (stat.match_round === 'final' && filterFinal),
      ),
    )
  }, [
    playerData,
    filterLastSixteen,
    filterQuarterFinals,
    filterSemiFinals,
    filterPlayOff,
    filterFinal,
  ])

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
              label="semi-finals"
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
        <section>
          {filteredData ? (
            <table>
              <tbody>
                {combineStats(filteredData).map((row) => (
                  <tr key={row.player_name + row.match_round}>
                    <td>{row.match_round}</td>
                    <td>{row.player_name}</td>
                    <td>{row.team_name}</td>
                    <td>{row.team_first_color}</td>
                    <td>{row.completed_passes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>loading</p>
          )}
        </section>
      </main>
    </div>
  )
}
