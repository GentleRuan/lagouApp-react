
import React ,{Component} from "react";
import '../pages/Search.css';

class Seek extends Component {
	constructor(){
		super();
		this.state={
			value:""
		}
		this.handleCity = this.handleCity.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}

	render(){
		return(
			<div className="Seek">
			   	<div className="button" onClick={this.handleCity}>
			   		<span className="city">{this.props.newCity}</span>&nbsp;
			   		<i className="glyphicon glyphicon-menu-down"></i>
			   	</div>
			   	<div className="rinput">
			   		<input type="text" value={this.state.value} onChange={this.handleChange} placeholder="搜索职位或公司"/>
			   		<i onClick={this.handleSearch} className="glyphicon glyphicon-search"></i>
			   	</div>
		  	</div>
		)
	}

	handleCity(){
		this.props.CityMsg();
	}

	handleChange(e){
		this.setState({
			value: e.target.value
		})
	}

	handleSearch(){
		if(!this.state.value.trim()){
			return;
		}else{
			var value = this.state.value;
			localStorage.setItem("seek", value);
			this.props.handleSeek();
		}
	}

}

export default Seek