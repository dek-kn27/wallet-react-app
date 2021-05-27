import './App.css';
import './Wallet.css';

import Navbar from './Navbar';

import Home from './Home';
import Budgets from './Budgets';
import Wallet from './Wallet';
import Settings from './Settings';

import Budget from './Budget';

import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			"page": "/"
		}

		this.navigateTo = this.navigateTo.bind(this);
		this.setCreds = this.setCreds.bind(this);
	}
	setCreds(username, password) {
		console.log(username, password);
		this.setState({
			"username": username,
			"password": password
		});
		this.authorization_string = btoa("testname1:12345678");

		console.log("Set app creds", this.state.username, this.state.password);
	}
	navigateTo(link) {
		this.setState(
			{
				"page": link
			}
		);
	}
	render() {
		let page;
		console.log(this.state.page);
		switch (this.state.page) {
			case "/":
			page = <Home parent={this} />;
			break;
			case "/budget":
			page = <Budget parent={this} />;
			break;
			case "/wallet":
			page = <Wallet parent={this} />;
			break;
			case "/settings":
			page = <Settings parent={this} />;
			break;
			case "/budgets":
			page = <Budgets parent={this} />;
			break;
			default: break;
		}

		return (
			<div className="App">
				<Navbar parent={this} />
				<div className="main">
					<div className="container">
						{page}
					</div>
				</div>
			</div>
		)
	}
}

export default App;
