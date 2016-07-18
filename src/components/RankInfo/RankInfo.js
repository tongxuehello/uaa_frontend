import React, {Component, PropTypes} from 'react';

export default class RankInfo extends Component {

  render() {
	const rankInfoStyle = require('./RankInfo.scss');
    return (
		<div className={"row " + rankInfoStyle.rankInfo}>
			<div className={rankInfoStyle.leftWidthFix}>
				<div className={rankInfoStyle.tile +" "+ rankInfoStyle['tile-info']}>
					<div className={rankInfoStyle.rankNum}>500+</div>
					<div className={rankInfoStyle.rankText}>吸金指数<br/>当日排序</div>
				</div>
			</div>
			<div className={rankInfoStyle['right-width-auto']}>
				<div className="row">
					<div className="col-md-6">
						<div className="movie-num">未统计</div>
						<div className="grey">
							上线后30日累计
							<span className="no_text">No.500+</span>
						</div>
					</div>
					<div className="col-md-6">
						<div className="movie-num">1,094</div>
						<div className="grey">
							历史累计
							<span className="no_text">No.500+</span>
						</div>
					</div>
				</div>
				<div className="row margin-top-ajuest">
					<div className="col-md-12 movie-ranking">
						--
					</div>
				</div>
			</div>
		</div>
    );
  }
}

