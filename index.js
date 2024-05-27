const express = require('express')
const app = express()
const port = 3000

const nbaTeams = {
  lakers: { name: 'Los Angeles Lakers', championships: 17 },
  warriors: { name: 'Golden State Warriors', championships: 7 },
  bulls: { name: 'Chicago Bulls', championships: 6 },
  nets: { name: 'Brooklyn Nets', championships: 5 },
  pistons: { name: 'Detroit Pistons', championships: 3 },
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/teams', (req, res) => {
  res.json(nbaTeams)
})

app.get('/teams/:team', (req, res) => {
  const teamName = req.params.team.toLowerCase() // Capture the team parameter from the URL
  const teamInfo = nbaTeams[teamName]

  if (teamInfo) {
    res.json(teamInfo)
  } else {
    res.status(404).send('Team not found')
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

