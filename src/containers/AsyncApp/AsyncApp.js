import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { selectSubreddit, fetchPostsIfNeeded, invalidateSubreddit } from '../../redux/modules/asyncApp'
import { Picker, Posts } from '../../components';


@connect( 
	//mapStateToProps
	state => {
		const { selectedSubreddit, postsBySubreddit } = state
		const {
			isFetching,
			lastUpdated,
			items: posts
		} = postsBySubreddit[selectedSubreddit] || {
			isFetching: true,
			items: []
		}

		return {
			selectedSubreddit,
			posts,
			isFetching,
			lastUpdated
		}
	},
	//mapDispatchToProps
	dispatch => ({
		...bindActionCreators({
			selectSubreddit,
			fetchPostsIfNeeded,
			invalidateSubreddit
		},dispatch)
	})
)
export default class AsyncApp extends Component {
	
	constructor(props) {
		super(props)
	}

	static propTypes = {
		selectedSubreddit: PropTypes.string.isRequired,
		posts: PropTypes.array.isRequired,
		isFetching: PropTypes.bool.isRequired,
		lastUpdated: PropTypes.number
	}

	componentDidMount() {
		const { selectedSubreddit,fetchPostsIfNeeded } = this.props
		fetchPostsIfNeeded(selectedSubreddit)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
			const { selectedSubreddit } = nextProps
			console.log("componentWillReceiveProps","fetchPostsIfNeeded",selectedSubreddit);
			fetchPostsIfNeeded(selectedSubreddit)
		}
	}

	render () {
		const {
			selectedSubreddit, posts, isFetching, lastUpdated,
			selectSubreddit,
			fetchPostsIfNeeded,
			invalidateSubreddit
		} = this.props

		const handleChange = (nextSubreddit) => {
			selectSubreddit(nextSubreddit)
		}

		const handleRefreshClick = (e) => {
			e.preventDefault()
			invalidateSubreddit(selectedSubreddit)
			fetchPostsIfNeeded(selectedSubreddit)
		}

		return (
			<div>
				<Picker value={selectedSubreddit}
						onChange={handleChange}
						options={[ 'reactjs', 'frontend' ]} />
				<p>
				  {lastUpdated &&
					<span>
					  Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
					  {' '}
					</span>
				  }
				  {!isFetching &&
					<a href='#'
					   onClick={handleRefreshClick}>
					  Refresh
					</a>
				  }
				</p>
				{isFetching && posts.length === 0 &&
				  <h2>Loading...</h2>
				}
				{!isFetching && posts.length === 0 &&
				  <h2>Empty.</h2>
				}
				{posts.length > 0 &&
				  <div style={{ opacity: isFetching ? 0.5 : 1 }}>
					<Posts posts={posts} />
				  </div>
				}
			</div>
		)
	}
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
//export default connect(mapStateToProps)(AsyncApp)