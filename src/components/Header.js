
import React ,{Component} from "react";
import {Link,IndexLink,browserHistory}  from 'react-router';
import './Header.css';

class Header extends Component {
	constructor(){
		super();
		this.handleReturn = this.handleReturn.bind(this);
	}

	render(){
		return(
			<div id="top">
				<span onClick={this.handleReturn} className={this.props.left?"":"glyphicon glyphicon-menu-left"}></span>
				{this.props.title}
				<Link to="/">
					<span className={this.props.right?"":"glyphicon glyphicon-home"}></span>
				</Link>
			</div>
		)
	}

	handleReturn(){
		this.props.Return();
	}

}

export default Header