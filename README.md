# Node_Stripe_Payment

1. create-customer - name , email
2. get-token of Card  
     "cardDetails": {
        "name": "Test Card",
        "cardNumber": "4242424242424242",
        "cvc": "125",
        "exp_year": "34",
        "exp_month": "09"
    }

3. add-card
     {
   "customer_id" : "cus_OdOyngFuHwyQwa",
   "cardToken" : "tok_1Nq863Kmh6vjpSiPub8K6AlZ"
    }

4. create-charge
     {
    "card_id" : "card_1Nq863Kmh6vjpSiP14C5gyg5",
    "customer_id" : "cus_OdOyngFuHwyQwa",
    "amount" : 500
    }
