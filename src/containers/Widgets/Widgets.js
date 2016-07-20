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
import { fetchMovieInfo } from '../../redux/modules/movieInfo'

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
	state => {
		console.log("state: ",state);
		const { isFetching, infoData, lastUpdated } = state.movieInfo
		return {
			isFetching,
			infoData,
			lastUpdated
		}
	},
	//mapDispatchToProps
	dispatch => ({
		...bindActionCreators({
			fetchMovieInfo
		},dispatch)
	})
)
export default class Widgets extends Component {
	static propTypes = {
		isFetching: PropTypes.bool,
		infoData: PropTypes.object,
		lastUpdated: PropTypes.number
	}
	
	componentDidMount() {
		const { fetchMovieInfo } = this.props
		console.log("this.props",this.props)
		fetchMovieInfo(507646700)
	}
	
	render() {
		const handleEdit = (widget) => {
			const {editStart} = this.props; // eslint-disable-line no-shadow
			return () => editStart(String(widget.id));
		};
		const {infoData} = this.props;
		const styles = require('./Widgets.scss');
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
				
				<MovieInfo {...infoData}/>
				
				<MovieInfo {...infoData}/>
				
				<MovieInfo {...infoData}/>
				
				<MovieInfo {...infoData}/>
				
				<InfoBar/>
			</div>
		);
	}
}

