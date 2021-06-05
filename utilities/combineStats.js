/* eslint-disable camelcase */
export default function combineStats(array) {
  const adder = Array.from(
    array.reduce(
      (accumulator, { player_id, completed_passes }) =>
        accumulator.set(
          player_id,
          (accumulator.get(player_id) || 0) + completed_passes,
        ),
      new Map(),
    ),
    ([player_id, completed_passes]) => ({ player_id, completed_passes }),
  )
  const newArray = []

  adder.forEach((element) => {
    const initialData = array.find(
      (initialRecord) => initialRecord.player_id === element.player_id,
    )
    newArray.push({
      player_id: element.player_id,
      player_name: initialData.player_name,
      team_first_color: initialData.team_first_color,
      team_name: initialData.team_name,
      completed_passes: element.completed_passes,
    })
  })

  return newArray
}
