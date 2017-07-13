
import React ,{Component} from "react";
import '../pages/Search.css';

class Cities extends Component {
	constructor(){
		super();
		this.changeCity = this.changeCity.bind(this);
	}

	render(){
		return(
			<div className="Cities" onClick={this.changeCity}>
				<div className="cities-header">热门城市</div>
				<table className="cities-list">
					<tr>
						<td data-item="北京">北京</td>
						<td data-item="上海">上海</td>
						<td data-item="深圳">深圳</td>
					</tr>
					<tr>
						<td data-item="广州">广州</td>
						<td data-item="成都">成都</td>
						<td data-item="杭州">杭州</td>
					</tr>
				</table>
				<div className="cities-header">ABCDEF</div>
				<table className="cities-list">
					<tr>
						<td data-item="北京">北京</td>
						<td data-item="保定">保定</td>
						<td data-item="包头">包头</td>
					</tr>
					<tr>
						<td data-item="长春">长春</td>
						<td data-item="成都">成都</td>
						<td data-item="常德">常德</td>
					</tr>
					<tr>
						<td data-item="重庆">重庆</td>
						<td data-item="长沙">长沙</td>
						<td data-item="常州">常州</td>
					</tr>
					<tr>
						<td data-item="东莞">东莞</td>
						<td data-item="大连">大连</td>
						<td data-item="郴州">郴州</td>
					</tr>
					<tr>
						<td data-item="佛山">佛山</td>
						<td data-item="阜阳">阜阳</td>
						<td data-item="福州">福州</td>
					</tr>
				</table>	
				<div className="cities-header">GHIJ</div>
				<table className="cities-list">
					<tr>
						<td data-item="桂林">桂林</td>
						<td data-item="贵阳">贵阳</td>
						<td data-item="赣州">赣州</td>
					</tr>
					<tr>
						<td data-item="广州">广州</td>
						<td data-item="邯郸">邯郸</td>
						<td data-item="哈尔滨">哈尔滨</td>
					</tr>
					<tr>
						<td data-item="合肥">合肥</td>
						<td data-item="呼和浩特">呼和浩特</td>
						<td data-item="海口">海口</td>
					</tr>
					<tr>
						<td data-item="杭州">杭州</td>
						<td data-item="惠州">惠州</td>
						<td data-item="湖州">湖州</td>
					</tr>
					<tr>
						<td data-item="金华">金华</td>
						<td data-item="吉林">吉林</td>
						<td data-item="江门">江门</td>
					</tr>
					<tr>
						<td data-item="济南">济南</td>
						<td data-item="济宁">济宁</td>
						<td data-item="嘉兴">嘉兴</td>
					</tr>
				</table>	
				<div className="cities-header">KMLN</div>
				<table className="cities-list">
					<tr>
						<td data-item="开封">开封</td>
						<td data-item="昆明">昆明</td>
						<td data-item="廊坊">廊坊</td>
					</tr>
					<tr>
						<td data-item="拉萨">拉萨</td>
						<td data-item="洛阳">洛阳</td>
						<td data-item="临沂">临沂</td>
					</tr>
					<tr>
						<td data-item="兰州">兰州</td>
						<td data-item="柳州">柳州</td>
						<td data-item="茂名">茂名</td>
					</tr>
					<tr>
						<td data-item="绵阳">绵阳</td>
						<td data-item="梅州">梅州</td>
						<td data-item="宁波">宁波</td>
					</tr>
					<tr>
						<td data-item="南通">南通</td>
						<td data-item="南京">南京</td>
						<td data-item="南宁">南宁</td>
					</tr>
					<tr>
						<td data-item="南通">南通</td>
						<td data-item="南阳">南阳</td>
						<td></td>
					</tr>
				</table>	
				<div className="cities-header">OPQR</div>
				<table className="cities-list">
					<tr>
						<td data-item="莆田">莆田</td>
						<td data-item="青岛">青岛</td>
						<td data-item="秦皇岛">秦皇岛</td>
					</tr>
					<tr>
						<td data-item="清远">清远</td>
						<td data-item="泉州">泉州</td>
						<td></td>
					</tr>
				</table>	
				<div className="cities-header">STUV</div>
				<table className="cities-list">
					<tr>
						<td data-item="韶关">韶关</td>
						<td data-item="上海">上海</td>
						<td data-item="石家庄">石家庄</td>
					</tr>
					<tr>
						<td data-item="宿迁">宿迁</td>
						<td data-item="绍兴">绍兴</td>
						<td data-item="沈阳">沈阳</td>
					</tr>
					<tr>
						<td data-item="沈阳">沈阳</td>
						<td data-item="三亚">三亚</td>
						<td data-item="深圳">深圳</td>
					</tr>
					<tr>
						<td data-item="苏州">苏州</td>
						<td data-item="天津">天津</td>
						<td data-item="唐山">唐山</td>
					</tr>
					<tr>
						<td data-item="太原">太原</td>
						<td data-item="台州">台州</td>
						<td data-item="泰州">泰州</td>
					</tr>
				</table>	
				<div className="cities-header">WXYZ</div>
				<table className="cities-list">
					<tr>
						<td data-item="潍坊">潍坊</td>
						<td data-item="武汉">武汉</td>
						<td data-item="芜湖">芜湖</td>
					</tr>
					<tr>
						<td data-item="威海">威海</td>
						<td data-item="无锡">无锡</td>
						<td data-item="乌鲁木齐">乌鲁木齐</td>
					</tr>
					<tr>
						<td data-item="温州">温州</td>
						<td data-item="西安">西安</td>
						<td data-item="许昌">许昌</td>
					</tr>
					<tr>
						<td data-item="香港">香港</td>
						<td data-item="厦门">厦门</td>
						<td data-item="西宁">西宁</td>
					</tr>
					<tr>
						<td data-item="徐州">徐州</td>
						<td data-item="盐城">盐城</td>
						<td data-item="银川">银川</td>
					</tr>
					<tr>
						<td data-item="宜川">宜川</td>
						<td data-item="烟台">烟台</td>
						<td data-item="岳阳">岳阳</td>
					</tr>
					<tr>
						<td data-item="扬州">扬州</td>
						<td data-item="淄博">淄博</td>
						<td data-item="珠海">珠海</td>
					</tr>
					<tr>
						<td data-item="湛江">湛江</td>
						<td data-item="浙江">浙江</td>
						<td data-item="肇庆">肇庆</td>
					</tr>
					<tr>
						<td data-item="中山">中山</td>
						<td data-item="舟山">舟山</td>
						<td data-item="漳州">漳州</td>
					</tr>
					<tr>
						<td data-item="郑州">郑州</td>
						<td data-item="株洲">株洲</td>
						<td></td>
					</tr>
				</table>		
		  	</div>
		)
	}

	
	changeCity(e){
		if(e.target.nodeName === "TD"){
			var city = e.target.innerText;
			localStorage.setItem("city", city);
			this.props.cutCity(city);
		}
	}

}

export default Cities