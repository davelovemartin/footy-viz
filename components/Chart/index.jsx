import PropTypes from 'prop-types'

const Chart = (props) => {
  const { dimensions, children } = props

  return (
    <svg width={dimensions.width} height={dimensions.height}>
      <g
        transform={`translate(${dimensions.margin.left}, ${dimensions.margin.top})`}
      >
        {children}
      </g>
    </svg>
  )
}

Chart.propTypes = {
  dimensions: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
    marginTop: PropTypes.number,
    marginRight: PropTypes.number,
    marginBottom: PropTypes.number,
    marginLeft: PropTypes.number,
  }),
}

Chart.defaultProps = { dimensions: {} }

export default Chart
