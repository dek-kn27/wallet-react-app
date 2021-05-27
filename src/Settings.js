import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.prnt = props.parent;
        this.state = {
            "username": props.username,
            "password": props.password
        }
        this.onChangeInput = this.onChangeInput.bind(this);
        this.saveCreds = this.saveCreds.bind(this);
    }
    onChangeInput(event) {
        console.log(this.state);

        const name = event.target.name;
        this.setState({[name]: event.target.value});
    }
    saveCreds(e) {
        e.preventDefault();
        console.log("Before",this.state, this.state.username, this.state.password);
        this.prnt.prnt.setCreds(this.state.username, this.state.password);
    }
    render() {
        return (
            <div>
                Login: <input type="text" name="username" value={this.state.username} onChange={this.onChangeInput}/><br/>
                Password: <input type="text" name="password" value={this.state.password} onChange={this.onChangeInput}/><br/>
                <button onClick={this.saveCreds}>Save settings</button>
            </div>
        )
    }
}

class Settings extends React.Component {
	constructor(props) {
		super(props);
		this.prnt = props.parent;
	}
    render() {
        return (
            <div>
                <LoginForm parent={this} />
            </div>
        )
    }
}

export default Settings;