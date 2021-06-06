import PropTypes from 'prop-types'

const Bar = (props) => {
  const { x, y, width, height, fill } = props

  return <rect x={x} y={y} width={width} height={height} fill={fill} />
}

Bar.propTypes = {
  x: PropTypes.string.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  fill: PropTypes.string.isRequired,
}

export default Bar
