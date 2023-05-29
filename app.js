const express = require('express');
const paymentController = require('./stripe');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!');
})

// Stripe Webhooks
app.post('/webhook-checkout', express.raw({ type: 'application/json' }), paymentController.webhookCheckout);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})