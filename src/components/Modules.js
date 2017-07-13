
import React ,{Component} from "react";
import '../pages/Mine.css';

class Modules extends Component {
	constructor(){
		super();
	}

	render(){
		return(
			<div className="Modules">
				<div>投递</div>
				<div>面试</div>
				<div>邀约</div>
				<div>收藏</div>
			</div>
		)
	}
}

export default Modules