
import React ,{Component} from "react";
import Form from "../components/Form";
import Button from "../components/Button";
import './Login.css';

class Login extends Component {
	constructor(){
		super();
	}

	render(){
		return(
			<div className="Login">
			    <Form />
			    <Button />
		  	</div>
		)
	}
}

export default Login