import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { asyncConnect } from 'redux-async-connect';
import { MovieInfo } from '../../components';
import { fetchMovieInfo } from '../../redux/modules/movieInfo'

@connect( 
	//mapStateToProps
	state => {
		const { ret_qipu_id, isFetching, infoData, lastUpdated, basicInfo } = state.movieInfo
		return {
			ret_qipu_id,
			isFetching,
			infoData,
			lastUpdated,
			basicInfo
		}
	},
	//mapDispatchToProps
	dispatch => ({
		...bindActionCreators({
			fetchMovieInfo
		},dispatch)
	})
)
export default class MovieInfoContainer extends Component {
	static propTypes = {
		//qipu_id: PropTypes.string,
		//ret_qipu_id: PropTypes.string,
		basicInfo: PropTypes.object,
		//movieInfoPromise: PropTypes.object,
		isFetching: PropTypes.bool,
		infoData: PropTypes.object,
		lastUpdated: PropTypes.number
	}
	
	componentDidMount() {
		const { fetchMovieInfo,movieInfoPromise,qipu_id } = this.props
		fetchMovieInfo(movieInfoPromise, qipu_id)
	}
	
	shouldComponentUpdate = (nextProps, nextState)=>{
		return nextProps.ret_qipu_id === this.props.qipu_id
	}
	
	render() {
		return (
			<MovieInfo {...this.props} />
		);
	}
}

