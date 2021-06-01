/* eslint-disable camelcase */
import rawData from '../../data/stat-data.json'
import matchData from '../../data/match-data.json'
import playerData from '../../data/player-data.json'
import teamData from '../../data/team-data.json'

import getKnockoutRound from '../../utilities/getKnockoutRound'

export default function handler(req, res) {
  // strip out unwanted fields
  const abridgedStats = rawData.map(
    ({
      minutes_played,
      team_possession_percentage,
      tackles,
      interceptions,
      pressures,
      passes,
      completed_passes,
      left_foot_passes,
      right_foot_passes,
      player_shots_faced,
      ...wantedFields
    }) => wantedFields,
  )

  // augment stats with data from match dataset by comparing:
  // - match_id to get match_date and get knockout round
  // - player_id to get player_name or player_known_name
  // - team_id to get team_name, team_first_color

  const stats = abridgedStats.map(
    ({ match_id, player_id, team_id, ...fields }) => {
      const matchRecord = matchData.find(
        (element) => element.match_id === match_id,
      )
      const playerRecord = playerData.find(
        (element) => element.player_id === player_id,
      )
      const teamRecord = teamData.find((element) => element.team_id === team_id)

      const match_round = getKnockoutRound(matchRecord.match_date)

      // return augmentedData
      return {
        match_round,
        player_name: playerRecord.player_known_name || playerRecord.player_name,
        team_name: teamRecord.team_name,
        team_first_color: teamRecord.team_first_color,
        ...fields,
      }
    },
  )
  console.log(stats)

  if (stats) {
    res.status(200).json({ stats })
  } else {
    res.status(404).json({ message: 'not found' })
  }
}
