
import React ,{Component} from "react";
import Header from "../components/Header";
import Modules from "../components/Modules";
import {Link,IndexLink}  from 'react-router';
import './Mine.css';

class Mine extends Component {
	constructor(){
		super();
		this.state={
			user:"",
			login:"login",
			logo:"none"
		}
	}

	componentWillMount(){
		var user = localStorage.getItem("user");
		if(user){
			this.setState({
				user:user,
				login: "none",
				logo: "logo"
			});
		}
	}

	render(){
		return(
			<div className="Mine">
				<Header left={true} right={true} title={"拉勾网"}/>
				<button className={this.state.login}><Link to="/Login">登录 / 注册</Link></button>
				<div className={this.state.logo}>
					<img src="//www.lgstatic.com/images/myresume/default_headpic.png"></img>
					<div>{this.state.user}</div>
					<span>简历 <i className="glyphicon glyphicon-menu-right"></i></span>
				</div>
				<Modules />
			</div>
		)
	}
}

export default Mine