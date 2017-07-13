
import React ,{Component} from "react";
import {Link,IndexLink}  from 'react-router';
import '../pages/Home.css';

class JobItem extends Component {
	constructor(){
		super();
	}

	render(){
		var {context} = this.props;
		return(
			<li className="JobItem" onClick={this.position}>
				<Link to="/Details" activeClassName="active">
					<img src={context.companyLogo}></img>
					<div className="item-desc">
						<h4 className="item-title">{context.companyName}</h4>
						<p className="item-info">
							<span className="item-pos">{context.positionName}</span>
							<span className="item-salary">{context.salary}</span>
						</p>
						<p className="item-time">{context.createTime}</p>
					</div>
				</Link>
			</li>
		)
	}

}

export default JobItem