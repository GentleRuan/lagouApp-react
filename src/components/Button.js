
import React ,{Component} from "react";
import '../pages/Login.css';

class Button extends Component {
	constructor(){
		super();
	}

	render(){
		return(
			<div className="Button">
			   	<p>&nbsp;还没账号?</p>
			    <input className="register" type="Button" value="注 册"></input>
		  	</div>
		)
	}

}

export default Button