
import React ,{Component} from "react";
import JobItem from "./JobItem";
import ajax from "./MyAjax";
import '../pages/Home.css';

class JobList extends Component {
	constructor(){
		super();
	}

	render(){
		var lists = this.props.lists.map(function(ele,idx){
			return (
					<JobItem key={idx} context={ele} />
				);
		})
		return (
			<ul className="JobList">
				{lists}
			</ul>
		)
	}
}

export default JobList