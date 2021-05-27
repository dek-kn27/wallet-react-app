import React from 'react';

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.prnt = props.parent;
		this.navigate = this.navigate.bind(this);
	}
	navigate(e) {
		e.preventDefault();

		this.prnt.navigateTo(e.target.getAttribute("href"));
	}
	render() {
		return (
			<div class="topbar">
				<div class="container">
					<div class="toleft">
						<div class="logo">
							<a href="/" onClick={this.navigate}>/</a>
						</div>
						<div class="filler"></div>
					</div>
					<div class="toright">
						<div class="filler"></div>
						<div class="navigation">
							<a href="/" onClick={this.navigate}> Home </a>
							{/* <a href="/budgets" onClick={this.navigate}> Budgets </a> */}
                            <a href="/wallet" onClick={this.navigate}> Wallet </a>
							<a href="/settings" onClick={this.navigate}> Settings </a>
						</div>
					</div>
					<div class="clearfix"></div>
				</div>
			</div>
		);
	}
};

export default Navbar;
