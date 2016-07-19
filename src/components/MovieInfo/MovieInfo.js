import React, {Component, PropTypes} from 'react';
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

	static defaultProps = {
		"channelName": "电影",
		"movieName": "夜孔雀",
		"rate" : {
			"real" : null,
			"estimate" : 5
		},
		"rank" : [{
				"index_type": 'money_index',
				"title" : "吸金指数",
				"A" : {
					"title" : "当日排序",
					"rank_num" : 170,
					"rank_list" : [{
							"index_type" : "money_index",
							"stat_type" : "statistic_time",
							"date_type" : "day_1",
							"qipu_id" : 203326001,
							"rank_num" : 5,
							"name" : "请回答1988",
							"index_data" : 6171,
							"rank_list" : null
						}, {
							"index_type" : "money_index",
							"stat_type" : "statistic_time",
							"date_type" : "day_1",
							"qipu_id" : 203556701,
							"rank_num" : 6,
							"name" : "我的朋友陈白露小姐",
							"index_data" : 5245,
							"rank_list" : null
						}, {
							"index_type" : "money_index",
							"stat_type" : "statistic_time",
							"date_type" : "day_1",
							"qipu_id" : 504121600,
							"rank_num" : 7,
							"name" : "夜孔雀",
							"index_data" : 5212,
							"rank_list" : null
						}, {
							"index_type" : "money_index",
							"stat_type" : "statistic_time",
							"date_type" : "day_1",
							"qipu_id" : 504381900,
							"rank_num" : 8,
							"name" : "我的极品女神",
							"index_data" : 5212,
							"rank_list" : null
						}, {
							"index_type" : "money_index",
							"stat_type" : "statistic_time",
							"date_type" : "day_1",
							"qipu_id" : 370885800,
							"rank_num" : 9,
							"name" : "速度与激情7",
							"index_data" : 4935,
							"rank_list" : null
						}
					]
				},
				"B" : {
					"title" : "上线后30日累计",
					"index_data" : 94752,
					"rank_num" : 128
				},
				"C" : {
					"title" : "历史累计",
					"index_data" : 94752,
					"rank_num" : 169
				}
			}, {
				"index_type": 'money_amount',
				"title" : "吸金金额",
				"A" : {
					"title" : "当日排序",
					"rank_num" : 6,
					"rank_list" : [{
							"index_type" : "money_amount",
							"stat_type" : "statistic_time",
							"date_type" : "day_1",
							"qipu_id" : 507646700,
							"rank_num" : 4,
							"name" : "绝色之战",
							"index_data" : 19413082,
							"rank_list" : null
						}, {
							"index_type" : "money_amount",
							"stat_type" : "statistic_time",
							"date_type" : "day_1",
							"qipu_id" : 203326001,
							"rank_num" : 5,
							"name" : "请回答1988",
							"index_data" : 11276343,
							"rank_list" : null
						}, {
							"index_type" : "money_amount",
							"stat_type" : "statistic_time",
							"date_type" : "day_1",
							"qipu_id" : 504121600,
							"rank_num" : 6,
							"name" : "夜孔雀",
							"index_data" : 10496752,
							"rank_list" : null
						}, {
							"index_type" : "money_amount",
							"stat_type" : "statistic_time",
							"date_type" : "day_1",
							"qipu_id" : 504381900,
							"rank_num" : 7,
							"name" : "我的极品女神",
							"index_data" : 9990061,
							"rank_list" : null
						}, {
							"index_type" : "money_amount",
							"stat_type" : "statistic_time",
							"date_type" : "day_1",
							"qipu_id" : 203556701,
							"rank_num" : 8,
							"name" : "我的朋友陈白露小姐",
							"index_data" : 9886403,
							"rank_list" : null
						}
					]
				},
				"B" : {
					"title" : "上线后30日累计",
					"index_data" : 1920000,
					"rank_num" : 118
				},
				"C" : {
					"title" : "历史累计",
					"index_data" : 1920000,
					"rank_num" : 170
				}
			}, {
				"index_type": 'all_index',
				"title" : "热门指数",
				"A" : {
					"title" : "当日排序",
					"rank_num" : 6,
					"rank_list" : [{
							"index_type" : "all_index",
							"stat_type" : "statistic_time",
							"date_type" : "day_1",
							"qipu_id" : 496447100,
							"rank_num" : 4,
							"name" : "乌龙特工",
							"index_data" : 625357,
							"rank_list" : null
						}, {
							"index_type" : "all_index",
							"stat_type" : "statistic_time",
							"date_type" : "day_1",
							"qipu_id" : 496729700,
							"rank_num" : 5,
							"name" : "仙医神厨",
							"index_data" : 402978,
							"rank_list" : null
						}, {
							"index_type" : "all_index",
							"stat_type" : "statistic_time",
							"date_type" : "day_1",
							"qipu_id" : 504121600,
							"rank_num" : 6,
							"name" : "夜孔雀",
							"index_data" : 374152,
							"rank_list" : null
						}, {
							"index_type" : "all_index",
							"stat_type" : "statistic_time",
							"date_type" : "day_1",
							"qipu_id" : 504381900,
							"rank_num" : 7,
							"name" : "我的极品女神",
							"index_data" : 337101,
							"rank_list" : null
						}, {
							"index_type" : "all_index",
							"stat_type" : "statistic_time",
							"date_type" : "day_1",
							"qipu_id" : 203556701,
							"rank_num" : 8,
							"name" : "我的朋友陈白露小姐",
							"index_data" : 299788,
							"rank_list" : null
						}
					]
				},
				"B" : {
					"title" : "上线后30日累计",
					"index_data" : 8431078,
					"rank_num" : 60
				},
				"C" : {
					"title" : "历史累计",
					"index_data" : 8431078,
					"rank_num" : 106
				}
			}, {
				"index_type": 'view_rate',
				"title" : "观看率",
				"A" : {
					"title" : "当日排序",
					"rank_num" : 9,
					"rank_list" : [{
							"index_type" : "view_rate",
							"stat_type" : "statistic_time",
							"date_type" : "day_1",
							"qipu_id" : 433800200,
							"rank_num" : 7,
							"name" : "不可思异",
							"index_data" : 108,
							"rank_list" : null
						}, {
							"index_type" : "view_rate",
							"stat_type" : "statistic_time",
							"date_type" : "day_1",
							"qipu_id" : 496729700,
							"rank_num" : 8,
							"name" : "仙医神厨",
							"index_data" : 86,
							"rank_list" : null
						}, {
							"index_type" : "view_rate",
							"stat_type" : "statistic_time",
							"date_type" : "day_1",
							"qipu_id" : 504121600,
							"rank_num" : 9,
							"name" : "夜孔雀",
							"index_data" : 86,
							"rank_list" : null
						}, {
							"index_type" : "view_rate",
							"stat_type" : "statistic_time",
							"date_type" : "day_1",
							"qipu_id" : 472057900,
							"rank_num" : 10,
							"name" : "美人鱼",
							"index_data" : 83,
							"rank_list" : null
						}, {
							"index_type" : "view_rate",
							"stat_type" : "statistic_time",
							"date_type" : "day_1",
							"qipu_id" : 460457900,
							"rank_num" : 11,
							"name" : "澳门风云3",
							"index_data" : 68,
							"rank_list" : null
						}
					]
				},
				"B" : {
					"title" : "上线后7日累计",
					"index_data" : null,
					"rank_num" : null
				},
				"C" : {
					"title" : "上线后30日累计",
					"index_data" : 98,
					"rank_num" : 4
				}
			}
		]
	};

	
	render() {
		
		return (
			<Panel className="uaaPannel">
				<div className="pannelTitle">{this.props.channelName}: {this.props.movieName}</div>
				<div className="row" style={{marginLeft:0}}>
					<div className="col-md-6">
						<RankInfo {...this.props.rank[0]}/>
					</div>
					<div className="col-md-6">
						<RankInfo {...this.props.rank[1]}/>
					</div>
				</div>
				
				<div className="row" style={{marginLeft:0}}>
					<div className="col-md-6">
						<RankInfo {...this.props.rank[2]}/>
					</div>
					<div className="col-md-6">
						<RankInfo {...this.props.rank[3]}/>
					</div>
				</div>
			</Panel>
		);
	}
}

