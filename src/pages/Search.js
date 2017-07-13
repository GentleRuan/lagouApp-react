          
import React ,{Component} from "react";
import Header from "../components/Header";
import Seek from "../components/Seek";
import Cities from "../components/Cities";
import JobList from "../components/JobList";
import {Link,IndexLink,browserHistory}  from 'react-router';
import './Search.css';

var list = [];
class Search extends Component {
	constructor(){
		super();
		this.state={
			lists:[],
			pages:1,
			name:"more",
			cities:"全国",
			historyState:"none",
			status:"none",
			hist:"",
			city : ""
		}
		this.CityMsg = this.CityMsg.bind(this);
		this.loadMsgs = this.loadMsgs.bind(this);
		this.handleSeek = this.handleSeek.bind(this);
		this.cutCity = this.cutCity.bind(this);
		this.pushSeek = this.pushSeek.bind(this);
		this.Return = this.Return.bind(this);
	}

	componentWillMount(){
		var history = localStorage.getItem("seek");
		if(history){
			this.setState({
				historyState:"history",
				history:history
			});
		}
	}

	render(){
		return(
			<div className="Search">
			   <Header Return={this.Return} left={true} right={true} title={"拉勾网"}/> 
			   <Seek CityMsg={this.CityMsg} newCity={this.state.cities} hist={this.state.hist} handleSeek={this.handleSeek}/>
	            <div className={this.state.historyState} onClick={this.pushSeek}>
					{this.state.history}
	            </div>
		        <div className={this.state.status}>
		                将搜索地区和关键词设为定制条件
		        </div>
			   {this.state.city}
			   <JobList lists={this.state.lists} loadMsg={this.loadMsgs} />
			   <div className={this.state.name} onClick={this.loadMsgs}>加载更多</div>
		  	</div>
		)
	}

	CityMsg(){
		this.setState({ 
			city: this.state.city ? "" : <Cities cutCity={this.cutCity}/>
		})
	}

	cutCity(cities){
		this.setState({
			cities,
			city:""
		})
	}

	pushSeek(){
		this.handleSeek()
		this.loadMsgs()
	}

	Return(){
		var url = `/Search`;
	    browserHistory.push(url);
	}

	handleSeek(){
		var t = this.state.pages;
		var cities = this.state.cities;
		var positionName = localStorage.getItem("seek");
		var url="https://m.lagou.com/search.json?city="+ cities +"&positionName="+ positionName +"&pageNo=1&pageSize=15";		
		var _this=this;	

		fetch(url,{
		    method: "get"
		}).then(function(response) {

		    return response.text()

		}).then(function(datas) {

			var arr = _this.state.lists;
			var msg=JSON.parse(datas).content.data.page.result;

			msg.forEach(function(ele){
				ele.companyLogo = "//www.lgstatic.com/" + ele.companyLogo;
			});

			list = list.concat(msg)
			_this.setState({
				lists:list 
			});

			_this.setState({
				name: "morej",
				status: "will",
				historyState: "none"
			})

		})
	}

	loadMsgs(){
		var t = this.state.pages + 1;
		var cities = this.state.cities;
		var positionName = localStorage.getItem("seek");
		var url="https://m.lagou.com/search.json?city="+ cities +"&positionName="+ positionName +"&pageNo="+ t +"&pageSize=15";		
		var _this = this;	

		fetch(url,{
		    method: "get"
		}).then(function(response) {

		    return response.text()

		}).then(function(datas) {

			var arr = _this.state.lists;
			var msg=JSON.parse(datas).content.data.page.result;

			msg.forEach(function(ele){
				ele.companyLogo = "//www.lgstatic.com/" + ele.companyLogo;
			});

			list = list.concat(msg)
			_this.setState({
				lists:list,
				status: "will",
				historyState: "none",
				pages:_this.state.pages + 1
			});
		})
	}

}

export default Search