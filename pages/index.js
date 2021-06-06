/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import useSetStateWithLocalStorage from '../hooks/useSetStateWithLocalStorage'
import ToggleList from '../components/ToggleList'
import Toggle from '../components/Toggle'
import combineStats from '../utilities/combineStats'
import getData from '../utilities/getData'
import BarChart from '../components/BarChart'
import Header from '../components/Header'
import Title from '../components/Title'
import Container from '../components/Container'
import Section from '../components/Section'
import SubTitle from '../components/SubTitle'
import Button from '../components/Button'

export async function getStaticProps() {
  const data = getData()

  return { props: { data } }
}

export default function Home(props) {
  const { data } = props

  const xAccessor = (d) => d.shots
  const yAccessor = (d) => d.player_name

  const description =
    'A chart to show which players had the most shots in the knockout stages of the 2018 World Cup Finals'

  // set state for filters
  const [areAllFiltersOn, setAreAllFiltersOn] = useState(
    'areAllFiltersOn',
    true,
  )
  const [filteredData, setFilteredData] = useState(data)
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
      data.filter(
        (stat) =>
          (stat.match_round === 'round of 16' && filterLastSixteen) ||
          (stat.match_round === 'quarter-finals' && filterQuarterFinals) ||
          (stat.match_round === 'semi-finals' && filterSemiFinals) ||
          (stat.match_round === 'play-off' && filterPlayOff) ||
          (stat.match_round === 'final' && filterFinal),
      ),
    )
  }, [
    data,
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
        <meta charset="utf-8" />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300;700&family=Open+Sans:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header>
        <Title />
      </Header>
      <main>
        <Container>
          <Section>
            <SubTitle>{description}</SubTitle>
            <header>filters:</header>
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
            <Button onClick={handleShowAll} disabled={areAllFiltersOn}>
              show all rounds
            </Button>
          </Section>
          <Section>
            <BarChart
              data={combineStats(filteredData)}
              xAccessor={xAccessor}
              yAccessor={yAccessor}
            />
          </Section>
        </Container>
      </main>
    </div>
  )
}
