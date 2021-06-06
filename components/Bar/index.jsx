import PropTypes from 'prop-types'
import styles from './Bar.module.scss'

const Bar = (props) => {
  const { x, y, width, height } = props

  return (
    <rect className={styles.bar} x={x} y={y} width={width} height={height} />
  )
}

Bar.propTypes = {
  x: PropTypes.string.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
}

export default Bar
