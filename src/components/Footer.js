
import React ,{Component} from "react";
import '../pages/Home.css';

class Footer extends Component {
	constructor(){
		super();
	}

	render(){
		return(
			<div className="Footer">
			    <p>©2015 lagou.com, all right reserved </p>
			    <p>移动版 · 电脑版 · <a href="#top">回顶部</a></p>
		  	</div>
		)
	}

}

export default Footer