
import React , {Component} from "react";
import Header from "../components/Header";
import Custom from "../components/Custom";
import JobList from "../components/JobList";
import Footer from "../components/Footer";

var list = [];
class Home extends Component {

	constructor(){
		super();
		this.state = {
			lists:[],
			pages:1,
			loginState:true
		}
		this.loadMsgs = this.loadMsgs.bind(this);
	}

	componentWillMount(){
        let userName = localStorage.getItem("user");
        if(userName){
        	this.setState({
        		loginState:false
        	})
        }
        var t=this.state.pages;
		var url="https://m.lagou.com/listmore.json?pageSize=15&pageNo="+ t ;		
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
		})
    }

	render(){
		return(
			<div className="Home">
				<Header left={true} right={true} title={"拉勾网"}/>
				<Custom custom={"10秒钟定制职位"} log={this.state.loginState 
													   ? "去登录" 
													   : "去编辑"}/>
				<JobList lists={this.state.lists} loadMsg={this.loadMsgs} />
				<div className="more" onClick={this.loadMsgs}>加载更多</div>
				<Footer />
			</div>
		)
	}

	loadMsgs(){
		var t = this.state.pages + 1;
		var url = "https://m.lagou.com/listmore.json?pageSize=15&pageNo="+ t ;		
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
				pages:_this.state.pages + 1
			});
		})
	}
}

export default Home;