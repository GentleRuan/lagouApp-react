
import React , {Component} from "react";
import './Custom.css';

class Custom extends Component {

	constructor(){
		super();
	}

	render(){
		return(
			<div className="Custom">
				<span>{this.props.custom}</span>
				<a href="/Login">{this.props.log}</a>
			</div>
		)
	}
}

export default Custom;