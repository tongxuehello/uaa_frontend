import React, {Component, PropTypes} from 'react';
import numeral from 'numeral';

export default class RankInfo extends Component {

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
		const styles = require('./RankInfo.scss');

		const {index_type, title, A, B, C} = this.props; 
		
		const renderIndexData = ({index_data}) => {
			if(typeof(index_data)==='undefined' || index_data===null || isNaN(index_data)){
				return '未统计';
			}
			if(index_type=="money_amount"){
				let money = index_data/100;
				if(money>=1000000){
					return numeral(money/10000).format('0,0')+"万";
				}else{
					return numeral(money).format('0,0');
				}
			}else if(index_type=="view_rate"){
				return numeral(index_data/1000).format('0.00%');
			}
			return numeral(index_data).format('0,0');
		};
		
		const renderRankNum = (num) => {
			if(typeof(num)==='undefined' || num===null || isNaN(num)){
				return '未统计';
			}
			let numStyle = {
				right: '5px',
				fontSize : '24px',
				position:'relative'
			};
			if(num>500){
				return "500+";
			}
			if(num<100){
				Object.assign(numStyle,{
					top: '5px',
					fontSize: '32px',
				});
			}
			return <div style={numStyle}> {num} </div>;
		};
		
		return (
			<div className={"row " + styles.rankInfo}>
				<div className={styles.leftWidthFix}>
					<div className={styles.tile +" "+ styles['tile-info']}>
						<div className={styles.rankNum}> {renderRankNum(A.rank_num)} </div>
						<div className={styles.rankText}> {title} <br/> {A.title} </div>
					</div>
				</div>
				<div className={styles.rightWidthAuto}>
					<div className="row">
						<div className="col-md-6">
							<div className={styles.movieNum}> {renderIndexData(B)} </div>
							<div className="grey">
								{B.title}
								<span className={styles.rankNum}> {B.rank_num?"No."+B.rank_num:"未统计"} </span>
							</div>
						</div>
						<div className="col-md-6">
							<div className={styles.movieNum}> {renderIndexData(C)} </div>
							<div className="grey">
								{C.title}
								<span className={styles.rankNum}> {C.rank_num?"No."+C.rank_num:"未统计"} </span>
							</div>
						</div>
					</div>
					<div className="row margin-top-ajuest">
						<div className="col-md-12">
							<ul className={"pagination pagination-sm " + styles.movieRanking}>
							{
								A.rank_list.map((item)=>(
									<li className="" key={item.name}>
										<a href="${basePath}/detail.html?qipu_id=xxx" target="_self" className={styles.link}>{item.name}</a>
									</li>
								))
							}
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

