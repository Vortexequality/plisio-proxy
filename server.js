const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/api/v1/operations/withdraw', async (req, res) => {
  try {
    const proxySecret = process.env.PLISIO_PROXY_SECRET
    if (proxySecret && req.headers['x-proxy-secret'] !== proxySecret) {
      return res.status(401).json({ status: 'error', message: 'Unauthorized' })
    }
    const params = new URLSearchParams(req.query)
    const url = `https://api.plisio.net/api/v1/operations/withdraw?${params}`
    const response = await fetch(url, { headers: { 'Accept': 'application/json' } })
    const data = await response.json()
    res.status(response.status).json(data)
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message })
  }
})

app.get('/health', (req, res) => res.json({ ok: true }))
app.listen(PORT, () => console.log(`Plisio proxy running on port ${PORT}`))
