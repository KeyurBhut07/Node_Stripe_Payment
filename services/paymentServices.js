const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const getToken = async (cardDetails) => {
    try {
        return await stripe.tokens.create({
            card: {
                number: cardDetails.cardNumber,
                exp_month: cardDetails.exp_month,
                exp_year: cardDetails.exp_year,
                cvc: cardDetails.cvc,
                name: cardDetails.name,
            },
        })
    } catch (error) {
        throw new Error("Error getToken Services "+ error.message)
    }
}

module.exports = { getToken }