import * as d3 from 'd3'
import PropTypes from 'prop-types'
import styles from './BarChart.module.scss'
import Bar from '../Bar'
import Chart from '../Chart'
import dimensions from '../../utilities/dimensions'
import Axis from '../Axis'

const BarChart = (props) => {
  const { data, xAccessor, yAccessor } = props
  // determine scales

  const xScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, xAccessor)])
    .range([0, dimensions.boundedWidth])

  const yScale = d3
    .scaleBand()
    .domain(d3.range(data.length))
    .range([dimensions.boundedHeight, 0])

  // determine axis generators

  const xAxisGenerator = d3.axisTop(xScale).ticks(d3.max(data, xAccessor))

  const yAxisGenerator = d3
    .axisLeft(yScale)
    .tickFormat((i) => data[i].player_name)
    .tickSizeOuter(0)

  return (
    <div className={styles.barchart}>
      <Chart dimensions={dimensions}>
        {data.map((d, i) => (
          <Bar
            key={yAccessor(d)}
            x="0"
            y={yScale(i)}
            width={xScale(xAccessor(d))}
            height={yScale.bandwidth()}
          />
        ))}
        <Axis dimensions={dimensions} generator={xAxisGenerator} />
        <Axis dimensions={dimensions} generator={yAxisGenerator} />
      </Chart>
    </div>
  )
}

BarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  xAccessor: PropTypes.func.isRequired,
}

export default BarChart
