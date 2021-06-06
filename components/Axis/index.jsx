import { useRef } from 'react'
import PropTypes from 'prop-types'
import * as d3 from 'd3'

const Axis = (props) => {
  const { generator } = props
  const ref = useRef()

  if (ref.current) {
    d3.select(ref.current).transition().call(generator)
  }

  return <g className="axis" ref={ref} />
}

Axis.propTypes = {
  generator: PropTypes.func.isRequired,
}

export default Axis
