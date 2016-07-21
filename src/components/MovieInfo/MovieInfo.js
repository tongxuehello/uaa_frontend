import React, {Component, PropTypes} from 'react';
import moment from 'moment';
import RankInfo from './RankInfo';
import { Panel } from 'react-bootstrap';

export default class MovieInfo extends Component {

	/*
	static propTypes = {
		title: PropTypes.string,
		A: React.PropTypes.shape({
			title: React.PropTypes.string,
			rank_num: React.PropTypes.string,
			rank_list: React.PropTypes.array,
		}),
		B: React.PropTypes.shape({
			title: React.PropTypes.string,
			index_data: React.PropTypes.string,
			rank_num: React.PropTypes.string
		}),
		C: React.PropTypes.shape({
			title: React.PropTypes.string,
			index_data: React.PropTypes.string,
			rank_num: React.PropTypes.string
		})
	}
	*/

	static defaultProps = {}


	render() {
		
		const {qipu_id,infoData,isFetching,lastUpdated,basicInfo} = this.props;
		let retJsx;
		if(isFetching){
			retJsx = '加载中...';
		}else{
			retJsx = 
				<div key={qipu_id}>
					<div className="pannelTitle" style={{display:'inline-block',paddingRight:'10px'}}>电影: {basicInfo.title} </div>
					<label className="label label-primary" style={{marginRight:'10px'}}>上线时间：{moment(basicInfo.start_dt).format('YYYY-MM-DD')}</label>
					<label className="label label-primary">{"qipu_id：" + qipu_id + " 更新时间：" + moment(lastUpdated).format('YYYY-MM-DD')}</label>
					<br/>
					<div className="row" style={{marginLeft:0}}>
						<div className="col-md-6">
							<RankInfo {...infoData.rank[0]}/>
						</div>
						<div className="col-md-6">
							<RankInfo {...infoData.rank[1]}/>
						</div>
					</div>
					
					<div className="row" style={{marginLeft:0}}>
						<div className="col-md-6">
							<RankInfo {...infoData.rank[2]}/>
						</div>
						<div className="col-md-6">
							<RankInfo {...infoData.rank[3]}/>
						</div>
					</div>
				</div>
		}
		return (
			<Panel className="uaaPannel">
				{retJsx}
			</Panel>
		);
	}
}

