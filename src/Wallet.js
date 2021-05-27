import React from 'react';

import {sendRequest} from './Api';

class Wallet extends React.Component {
	constructor(props) {
		super(props);
		this.prnt = props.parent;
        this.state = {
            money: "Loading..."
        };
	}

    async componentDidMount() {
		// Obtaining all the information
		try {
            this.prnt.authorization_string = btoa("testname1:12345678");
			
			console.log(this.parent);
            console.log("Sending request get me");
			let result = await sendRequest("user/getMe", {}, this.prnt.authorization_string, "GET");

			// User info
			this.user_id = result.user_id;
			this.wallet_id = result.wallet_id;

			// Wallet info
            console.log("Sending request wallet");
			let wallet_result = await sendRequest("wallet/" + this.wallet_id, {}, this.prnt.authorization_string, "GET");
			this.wallet_amount = wallet_result.balance;

			this.setState({"money": this.wallet_amount});

			// Budgets


		} catch (e) {
			alert(e);
		}
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <p>You have: {this.state.money} грн.</p>
            </div>
        )
    }
}

export default Wallet;