const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
const paymentServices = require("../services/paymentServices")

const createCustomer = async (req, res) => {
    try {
        const { name, email } = req.body
        const customer = await stripe.customers.create({
            name, email
        })
        res.status(201).send(customer)
    } catch (error) {
        throw new Error("Error addCustomer: " + error.message);
    }
}

const getToken = async (req,res) => {
    try {
        const params = req.body;
        const cardToken = await paymentServices.getToken(params.cardDetails)
        return res.status(201).send({
            cardId: cardToken.card.id,
            cardToken: cardToken.id,
            cardType: cardToken.card.brand
          },
        );
    } catch (error) {
        throw new Error("Error getToken: " + error.message);
        
    }
}

const addCard = async (req, res) => {
    try {
        const {customer_id,cardToken} = req.body
        const card = await stripe.customers.createSource(customer_id, {
            source: `${cardToken}`
        });
        res.status(200).send({ card : card });
    } catch (error) {
        throw new Error("Error addCard: " + error.message);
    }
}

const createCharges = async (req, res) => {
    try {
        const createCharges = await stripe.charges.create({
            receipt_email : "test@gmail.com",
            amount : parseInt(req.body.amount) * 100 , // amount * 100
            currency : "INR",
            card : req.body.card_id,
            customer : req.body.customer_id
        })
        return res.status(200).send(createCharges)
    } catch (error) {
        throw new Error("Error createCharges: " + error.message);
    }
}

module.exports = {
    addCard, getToken, createCustomer, createCharges
} 