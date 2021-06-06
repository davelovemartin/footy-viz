/* eslint-disable camelcase */
const combineStats = (array) => {
  // create array from map produced from reducer that adds the shots per player
  const adder = Array.from(
    array.reduce(
      (accumulator, { player_id, shots }) =>
        accumulator.set(player_id, (accumulator.get(player_id) || 0) + shots),
      new Map(),
    ),
    ([player_id, shots]) => ({ player_id, shots }),
  )
  const newArray = []
  // loop through array and compbine with extra data
  adder.forEach((element) => {
    const initialData = array.find(
      (initialRecord) => initialRecord.player_id === element.player_id,
    )
    newArray.push({
      player_id: element.player_id,
      player_name: initialData.player_name,
      team_first_color: initialData.team_first_color,
      team_name: initialData.team_name,
      shots: element.shots,
    })
  })

  return newArray
}

export default combineStats
