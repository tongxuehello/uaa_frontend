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
		}
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

