const stripe = require('stripe')('sk_test_51MTl1WSF5Rxcu5EtUMIJqkP5RUyiiaKBrhRSlfzh7zERmZ3w2cFBIo7kkruQcRV4Z4pLy52Vg7VASiay3yuTq2A200P5EfLiJe');

// Create Session solution---------------------------
exports.getCheckoutSession = async (req, res, next) => {
    let session
    try {
        // 2) Create a Checkout Session
        session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            success_url: `${req.protocol}://${req.get('host')}`,
            // success_url: `${req.protocol}://${req.get('host')}/my-payment/?products=${req.params.productId}&user=${req.user.id}&price=${product.price}`,
            cancel_url: `${req.protocol}://${req.get('host')}/cancel`,
            mode: 'payment',
            // customer: req.user.id,
            customer: 'cus_NcwxWksTGHcjZu',
            phone_number_collection: {
                "enabled": true
            },
            // client_reference_id: cart.items[0].product,
            line_items: [
                {
                    price_data: {
                        currency: 'INR',
                        product_data: {
                            name: 'Reguller-Tea',
                            description: 'This is a test product reguller-tea',
                        },
                        unit_amount: 10 * 100,
                    },
                    quantity: 1
                }
            ]
        })
    } catch (error) {
    //    return res.status(400).json({
    //         // status: 'fails',
    //         // error
    //         console
    //     })
    console.log(console.log(error))
    }

    // 3) Create a Session as Response
    res.status(200).json({
        status: 'success',
        session
    })
};