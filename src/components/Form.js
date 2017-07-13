
import React ,{Component} from "react";
import '../pages/Login.css';
import {Link,IndexLink,browserHistory}  from 'react-router';

class Form extends Component {
	constructor(){
		super();
		this.state = {
			eye : "glyphicon-eye-close",
			userName: "",
			place: "已注册用户名 / 邮箱",
			holder: "密码"
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleVal = this.handleVal.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	}

	render(){
		return(
			<div className="Form">
				<div>
					<input type="text" ref="inp" value={this.state.userName} placeholder={this.state.place} 
					onChange={this.handleVal}/>
				</div>
				<div className="password">
					<input type="password" placeholder={this.state.holder}/>
					<i onClick={this.handleChange} className={"glyphicon " + this.state.eye}></i>
				</div>
				<input className="login" onClick={this.handleLogin} type="Button" value="登 录"></input>
		  	</div>
		)
	}

	handleChange(){
		this.setState({
			eye : this.state.eye === "glyphicon-eye-close"
								 ?"glyphicon-eye-open"
								 :"glyphicon-eye-close"
		})
	}

	handleVal(){
		this.setState({
			userName:this.refs.inp.value
		})
	}

	handleLogin(){
		if(!this.state.userName.trim()){
			this.setState({
				place : "用户名不能为空！",
				holder : "密码输入不正确！"
			})
		}else{
			var userName = this.state.userName;
			localStorage.setItem("user", userName);
			var url = `/`;
	       	browserHistory.push(url); 
	    }
	}

}

export default Form