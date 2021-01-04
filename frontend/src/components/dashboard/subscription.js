import React, {Component} from "react";
import 'braintree-web'
import {axiosInstance} from '../../axiosAPI'
import DropIn from "braintree-web-drop-in-react";


export default class Subscription extends Component {
    instance;

    constructor(props) {
        super(props);
        this.state = {
            clientToken: null
        }
    }


    componentDidMount() {
        axiosInstance
            .get('/api/braintree_obtain/')
            .then(response => {
                this.setState({clientToken: response.data})
            })
            .catch(err => {
                console.error(err)
            })
    }

    async buy() {
        try {
            const {nonce} = await this.instance.requestPaymentMethod();
            const response = await axiosInstance.post(
                '/api/braintree_buy/',
                {nonce: nonce}
            )
            console.log(response.data.result)
            if (response.data.result === "success") {
                alert("Payment successful")
                this.props.onExpiryChange()
            } else {
                alert("Payment failed, contact staff")
            }
            window.location.href = '/login/'
        } catch (err) {
            console.error(err)
        }
    }

    render() {
        if (!this.state.clientToken) {
            return (
                <div>
                    <h1>Loading...</h1>
                </div>
            );
        } else {
            return (
                <div>
                    <DropIn
                        options={{
                            authorization: this.state.clientToken
                        }}
                        onInstance={(instance) => (this.instance = instance)}
                    />
                    <button onClick={this.buy.bind(this)}>Buy</button>
                </div>
            );
        }
    }
}
