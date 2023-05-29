const stripe = require('stripe')('sk_test_51MTl1WSF5Rxcu5EtUMIJqkP5RUyiiaKBrhRSlfzh7zERmZ3w2cFBIo7kkruQcRV4Z4pLy52Vg7VASiay3yuTq2A200P5EfLiJe');


// this will execute only when the payment was successful
exports.webhookCheckout = (req, res, next) => {
    // const signature = req.headers['stripe-signature'];
    // const stripeWebHookSecret = 'we_1NBGrdSF5Rxcu5EtmbyuCYX6'
    // let event

    // try {
    //     event = stripe.webhooks.constructEvent(
    //         req.body,
    //         signature,
    //         stripeWebHookSecret
    //         // process.env.STRIPE_WEBHOOK_SECRET
    //     );

    // } catch (error) {
    //     return res.status(400).send(`Webhook error: ${error.message}`)
    // }

    // if (event.type === 'checkout.session.completed') {
    //     console.log(event.data.object);
    //     makePayment(event.data.object);
    // }

    // res.status(200).json({ recieved: true });


    const payload = {
        id: 'evt_test_webhook',
        object: 'event',
    };

    const payloadString = JSON.stringify(payload, null, 2);
    const secret = 'whsec_test_secret';

    const header = stripe.webhooks.generateTestHeaderString({
        payload: payloadString,
        secret,
    });

    const event = stripe.webhooks.constructEvent(payloadString, header, secret);

    // Do something with mocked signed event
    //   expect(event.id).to.equal(payload.id);
    console.log(event.id, payload.id);
};