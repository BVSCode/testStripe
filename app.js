const express = require('express');
const paymentController = require('./stripe');
const checkoutSessionController = require('./stripCheckout');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('payment successful!');
});

app.get('/cancel', (req, res) => {
  res.send('payment fails');
})

// Stripe Webhooks
app.get('/create-checkout-session', checkoutSessionController.getCheckoutSession);

app.post('/webhook-checkout', express.raw({ type: 'application/json' }), paymentController.webhookCheckout);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})