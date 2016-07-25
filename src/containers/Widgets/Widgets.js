import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import * as widgetActions from '../../redux/modules/widgets';
import {isLoaded, load as loadWidgets} from '../../redux/modules/widgets';
import {initializeWithKey} from 'redux-form';
import { asyncConnect } from 'redux-async-connect';
import { InfoBar, MovieInfo } from '../../components';

import MovieInfoContainer from './MovieInfoContainer';
import { CounterButton, GithubButton } from '../../components';
import RankInfo from '../../components/MovieInfo/RankInfo';
import { Panel } from 'react-bootstrap';

@asyncConnect([{
	deferred: true,
	promise: ({store: {dispatch, getState}}) => {
		if (!isLoaded(getState())) {
			return dispatch(loadWidgets());
		}
	}
}])
@connect( 
	//mapStateToProps
	/*
	state => {
		console.log("state: ",state);
		const { qipu_id } = state.widgets
		return {
			qipu_id
		}
	}
	*/
)
export default class Widgets extends Component {
	static propTypes = {
		//qipu_id: PropTypes.string
	}
	
	render() {
		const getMovieBasicInfoPromise = qipu_id => (
			fetch(`http://portal.uaa.qiyi.domain/analyzing/dianying/detail/info?qipu_id=${qipu_id}`,{
				mode: "cors"
			}).then(response=>(response.json()))
		);
		
		const styles = require('./Widgets.scss');
		console.log("=this.props",this.props)
		
		const { infoData,isFetching,lastUpdated } = this.props;
		
		const rankInfoExampleData = {
			"title" : "吸金指数",
			"index_type" : "money_index",
			"A" : {
				"title" : "当日排序",
				"rank_num" : 28,
				"rank_list" : [{
						"index_type" : "money_index",
						"stat_type" : "statistic_time",
						"date_type" : "day_1",
						"qipu_id" : 473252800,
						"rank_num" : 26,
						"name" : "疯狂动物城",
						"index_data" : 1073,
						"rank_list" : null
					}, {
						"index_type" : "money_index",
						"stat_type" : "statistic_time",
						"date_type" : "day_1",
						"qipu_id" : 244044600,
						"rank_num" : 27,
						"name" : "速度与激情5",
						"index_data" : 1060,
						"rank_list" : null
					}, {
						"index_type" : "money_index",
						"stat_type" : "statistic_time",
						"date_type" : "day_1",
						"qipu_id" : 453152200,
						"rank_num" : 28,
						"name" : "恶人报喜",
						"index_data" : 1049,
						"rank_list" : null
					}, {
						"index_type" : "money_index",
						"stat_type" : "statistic_time",
						"date_type" : "day_1",
						"qipu_id" : 477557900,
						"rank_num" : 29,
						"name" : "超能太监2黄金右手",
						"index_data" : 1003,
						"rank_list" : null
					}, {
						"index_type" : "money_index",
						"stat_type" : "statistic_time",
						"date_type" : "day_1",
						"qipu_id" : 474683200,
						"rank_num" : 30,
						"name" : "我的特工爷爷",
						"index_data" : 970,
						"rank_list" : null
					}
				]
			},
			"B" : {
				"title" : "上线后30日累计",
				"index_data" : 48582,
				"rank_num" : 210
			},
			"C" : {
				"title" : "历史累计",
				"index_data" : 73661,
				"rank_num" : 212
			}
		};
		
		return (
			<div className={styles.widgets + ' container'}>
				<h1>
					组件
					<button className={styles.refreshBtn + ' btn btn-success'}>
						<i/> {' '} Reload Widgets
					</button>
				</h1>

				<Helmet title="组件"/>

				<h2>电影信息子组件</h2>
				
				<Panel className="uaaPannel">
					<div className="row" style={{marginLeft:0}}>
						<div className="col-md-6">
							<RankInfo {...rankInfoExampleData}/>
						</div>
						<div className="col-md-6">
							
						</div>
					</div>
				</Panel>
				
				<h2>电影详情</h2>
				
				<MovieInfoContainer movieInfoPromise={getMovieBasicInfoPromise("496729700")} qipu_id="496729700"/>

				<MovieInfoContainer movieInfoPromise={getMovieBasicInfoPromise("453152200")} qipu_id="453152200"/>

				<Panel className="uaaPannel">
					<CounterButton multireducerKey="counter1"/>
					<CounterButton multireducerKey="counter2"/>
					<CounterButton multireducerKey="counter3"/>
				</Panel>

				<InfoBar/>

			</div>
		);
	}
}

