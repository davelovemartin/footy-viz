const dimensions = {
  width: 900,
  height: 1200,
  margin: {
    top: 25,
    right: 15,
    bottom: 40,
    left: 100,
  },
}

dimensions.boundedWidth =
  dimensions.width - dimensions.margin.left - dimensions.margin.right
dimensions.boundedHeight =
  dimensions.height - dimensions.margin.top - dimensions.margin.bottom

export default dimensions
