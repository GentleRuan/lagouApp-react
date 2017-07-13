
import React ,{Component} from "react";
import Header from "../components/Header";
import Custom from "../components/Custom";
import JobText from "../components/JobText";
import {Link,IndexLink,browserHistory}  from 'react-router';
import './Home.css';
import './Details.css';

class Details extends Component {
	constructor(){
		super();
		this.Return = this.Return.bind(this);
	}

	render(){
		return(
			<div className="Details">
				<Header Return={this.Return} left={false} right={false} title={"职位详情"}/>
				<Custom custom={"校园项目拓展经理"} log={"未收藏"}/>
				<JobText />
				<div className="footer">投个简历</div>
		  	</div>
		)
	}

	Return(){
		var url = `/`;
	    browserHistory.push(url);
	}

}

export default Details