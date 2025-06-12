const express = require('express')
const app = express()
const path = require('path')
app.use(express.json())

let lastNotif = { title: '', text: '', app: '' }

app.post('/api/powiadomienie', (req, res) => {
  lastNotif = req.body
  console.log('📲 Powiadomienie:', lastNotif)
  res.sendStatus(200)
})

app.get('/api/last', (req, res) => {
  res.json(lastNotif)
})

app.use(express.static(path.join(__dirname, '../public')))
app.listen(3000, () => console.log('🚀 Zegar działa na http://localhost:3000'))
