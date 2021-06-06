const getKnockoutRound = (string) => {
  // I don't want to mess around with dates so a simple switch statement will suffice here
  switch (string) {
    case '30/06/2018 17:00':
      return 'round of 16'
    case '30/06/2018 21:00':
      return 'round of 16'
    case '01/07/2018 17:00':
      return 'round of 16'
    case '01/07/2018 21:00':
      return 'round of 16'
    case '02/07/2018 17:00':
      return 'round of 16'
    case '02/07/2018 21:00':
      return 'round of 16'
    case '03/07/2018 17:00':
      return 'round of 16'
    case '03/07/2018 21:00':
      return 'round of 16'
    case '06/07/2018 17:00':
      return 'quarter-finals'
    case '06/07/2018 21:00':
      return 'quarter-finals'
    case '07/07/2018 17:00':
      return 'quarter-finals'
    case '07/07/2018 21:00':
      return 'quarter-finals'
    case '10/07/2018 21:00':
      return 'semi-finals'
    case '11/07/2018 21:00':
      return 'semi-finals'
    case '14/07/2018 17:00':
      return 'play off'
    case '15/07/2018 18:00':
      return 'final'
    default:
      return 'unknown'
  }
}

export default getKnockoutRound
