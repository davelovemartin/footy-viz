const dimensions = {
  width: 900,
  height: 1200,
  margin: {
    top: 15,
    right: 15,
    bottom: 40,
    left: 60,
  },
}

dimensions.boundedWidth =
  dimensions.width - dimensions.margin.left - dimensions.margin.right
dimensions.boundedHeight =
  dimensions.height - dimensions.margin.top - dimensions.margin.bottom

export default dimensions
