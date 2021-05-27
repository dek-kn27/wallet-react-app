import React from 'react';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.prnt = props.parent;
	}
    render() {
        return (<div class="mainbar">
            <div class="block">
                <div class="block-heading">
                    <div class="block-heading-main">PlanSheet</div>
                </div>
                <div class="block-main">
                    <p>Plansheet is a tool for organizing your expenses and tracking family budget.</p>
                    <h3>What can you do with PlanSheet?</h3>
                    <ul>
                        <li>Have a personal wallet log to write down your expenses, incomes etc.</li>
                        <li>View statistics on your wallet log.</li>
                        <li>Create a budget plan to share with you family and collaborate on, as well as track expenses.</li>
                    </ul>
                </div>
            </div>
        </div>)
    }
}

export default Home;