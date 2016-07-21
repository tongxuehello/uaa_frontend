import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import * as widgetActions from '../../redux/modules/widgets';
import {isLoaded, load as loadWidgets} from '../../redux/modules/widgets';
import {initializeWithKey} from 'redux-form';
import { WidgetForm } from '../../components';
import { asyncConnect } from 'redux-async-connect';
import { InfoBar, MovieInfo } from '../../components';
import MovieInfoContainer from './MovieInfoContainer';

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
		
		return (
			<div className={styles.widgets + ' container'}>
				<h1>
					组件
					<button className={styles.refreshBtn + ' btn btn-success'}>
						<i/> {' '} Reload Widgets
					</button>
				</h1>

				<Helmet title="组件"/>

				<h2>详情榜单</h2>
				
				<MovieInfoContainer movieInfoPromise={getMovieBasicInfoPromise("496729700")} qipu_id="496729700"/>
				
				<MovieInfoContainer movieInfoPromise={getMovieBasicInfoPromise("453152200")} qipu_id="453152200"/>
				
				<InfoBar/>
			</div>
		);
	}
}

