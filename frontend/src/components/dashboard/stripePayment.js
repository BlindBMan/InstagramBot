import React from "react";
import {loadStripe} from "@stripe/stripe-js/pure";
import {axiosInstance} from "../../axiosAPI";
import jwt_decode from "jwt-decode";


const stripePromise = loadStripe('pk_test_51I6g4EAMDRvyRzjWCek6vlF8GhQKLQcAedSP85M8gopAJaqbvodL90JK6QAESGtzTa51V63uEtpDy81ralB1faU400gUEXFEyN')

export default function StripePayment() {
    const handleClick = async (event) => {
        const stripe = await stripePromise

        axiosInstance
            .post('/api/create_session/', {
                username: jwt_decode(localStorage.getItem('access_token'))['username']
            })
            .then(response => {
                console.log(response)
                stripe.redirectToCheckout({sessionId: response.data.id,})
            })
            .catch(err => {
                console.error(err)
            })
    }

    return (
        <div
            style={{
                marginTop: '40px'
            }}
        >
            <a
                className={'btn'}
                onClick={handleClick}
            >
                Checkout
            </a>
        </div>
    )
}