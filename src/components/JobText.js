
import React , {Component} from "react";
import '../pages/Details.css';


class JobText extends Component {

	constructor(){
		super();
	}

	render(){
		return(
			<div className="JobText">
				<div className="one">
					<div>
						<span><i>￥</i> 8K-12K</span>
						<span><i className="glyphicon glyphicon-map-marker"></i> 广州</span>
						<span><i className="glyphicon glyphicon-time"></i> 全职</span>
						<span><i className="glyphicon glyphicon-hourglass"></i> 1-3年</span>
						<span><i className="glyphicon glyphicon-education"></i> 本科及以上</span>
					</div>
					<p>职位诱惑：丰厚薪酬、弹性工作、共享公司金融福利</p>
				</div>
				<div className="two">
					<img src="//www.lgstatic.com/i/image/M00/07/BD/Cgp3O1bOsJ6ASIvyAAA6KAo0Xpg760.png"/>
					<div>
                        <span>FDT金融创新工场</span>
                        <p>移动互联网 / 不需要融资 / 50-150人</p>
                    </div>
				</div>
				<div className="three">
					<div className="f">职位描述</div>
					<div className="r">
						<p>岗位职责:</p>
						<p>1、负责开展FDT金融人才培养计划的校园推广工作；</p>
						<p>2、负责组建校园团队及开拓推广渠道；</p>
						<p>3、负责组建校园团队及开拓推广渠道；</p>
						<p>4、负责线上线下校园推广方案的制定及落地执行</p>
					</div>
					<div className="i">
						<p>岗位要求:</p>
						<p>1、金融学类、经济学类专业本科以上学历，或对金融投资有浓厚兴趣及有一定的投资经验；</p>
						<p>2、有3年以上市场营销类工作经验，做过项目销售为佳；</p>
						<p>3、有校园推广经验，有当地211高校渠道资源者为佳；</p>
						<p>4、有团队组建以及管理经验，能带领校园团队完成校园推广工作，做好关系维护。</p>
						<p>5、形象气质佳，沟通能力强，有亲和力。</p>
					</div>
				</div>
				<div className="four">
					<div className="f">面试评价（0）</div>
					<p>暂无面试评价</p>
				</div>
			</div>
		)
	}
}

export default JobText;