export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

/********************** reducer ***************************/

// 初始state：state.movieInfo.data
const initialState = {
	isFetching: true
};

var getRankData = function(json,index_type,stat_type,date_type,item_type) {
	var data = null;
	var index_data = json[index_type];
	if(index_data && index_data[stat_type] && index_data[stat_type][date_type] && index_data[stat_type][date_type][item_type]){
		data = index_data[stat_type][date_type][item_type];
	}
	return data;
}

const dealWithMovieInfoData = (rank_data) => {
	var rank_arr = [{
		title: "吸金指数",
		A: {
			title: "当日排序",
			rank_num: getRankData(rank_data,"money_index","statistic_time","day_1","rank_num"),
			rank_list: getRankData(rank_data,"money_index","statistic_time","day_1","rank_list"),
		},
		B: {
			title: "上线后30日累计",
			index_data: getRankData(rank_data,"money_index","online_time","day_30","index_data"),
			rank_num: getRankData(rank_data,"money_index","online_time","day_30","rank_num")
		},
		C: {
			title: "历史累计",
			index_data: getRankData(rank_data,"money_index","statistic_time","day_all","index_data"),
			rank_num: getRankData(rank_data,"money_index","statistic_time","day_all","rank_num")
		}
	},{
		title: "吸金金额",
		A: {
			title: "当日排序",
			rank_num: getRankData(rank_data,"money_amount","statistic_time","day_1","rank_num"),
			rank_list: getRankData(rank_data,"money_amount","statistic_time","day_1","rank_list"),
		},
		B: {
			title: "上线后30日累计",
			index_data: getRankData(rank_data,"money_amount","online_time","day_30","index_data"),
			rank_num: getRankData(rank_data,"money_amount","online_time","day_30","rank_num")
		},
		C: {
			title: "历史累计",
			index_data: getRankData(rank_data,"money_amount","statistic_time","day_all","index_data"),
			rank_num: getRankData(rank_data,"money_amount","statistic_time","day_all","rank_num")
		}
	},{
		title: "热门指数",
		A: {
			title: "当日排序",
			rank_num: getRankData(rank_data,"all_index","statistic_time","day_1","rank_num"),
			rank_list: getRankData(rank_data,"all_index","statistic_time","day_1","rank_list"),
		},
		B: {
			title: "上线后30日累计",
			index_data: getRankData(rank_data,"all_index","online_time","day_30","index_data"),
			rank_num: getRankData(rank_data,"all_index","online_time","day_30","rank_num")
		},
		C: {
			title: "历史累计",
			index_data: getRankData(rank_data,"all_index","statistic_time","day_all","index_data"),
			rank_num: getRankData(rank_data,"all_index","statistic_time","day_all","rank_num")
		}
	},{
		title: "观看率",
		A: {
			title: "当日排序",
			rank_num: getRankData(rank_data,"view_rate","statistic_time","day_1","rank_num"),
			rank_list: getRankData(rank_data,"view_rate","statistic_time","day_1","rank_list"),
		},
		B: {
			title: "上线后7日累计",
			index_data: getRankData(rank_data,"view_rate","online_time","day_7","index_data"),
			rank_num: getRankData(rank_data,"view_rate","online_time","day_7","rank_num")
		},
		C: {
			title: "上线后30日累计",
			index_data: getRankData(rank_data,"view_rate","online_time","day_30","index_data"),
			rank_num: getRankData(rank_data,"view_rate","online_time","day_30","rank_num")
		}
	}];
	return {
		"channelName": "电影",
		"movieName": "夜孔雀",
		"rate" : {
			"real" : null,
			"estimate" : 5
		},
		"rank" : rank_arr
		
	}
}

// reducer合并所有的action数据到state中
export default function reducer(state = initialState, action) {
	switch (action.type) {
	case REQUEST_POSTS:
		return {
			...state,
			isFetching: true
		}
	case RECEIVE_POSTS:
		return {
			...state,
			isFetching: false,
			infoData: dealWithMovieInfoData(action.posts),
			lastUpdated: action.receivedAt
		}
	default:
		return state;
	}
}


/********************** action creators ***************************/

// 引起页面变化的唯一途径dispatch action（同步、异步）

// 准备请求数据阶段
export function requestPosts(qipu_id) {
	return {
		type: REQUEST_POSTS,
		qipu_id
	}
}

// 接收数据
export function receivePosts(qipu_id, json) {
	return {
		type: RECEIVE_POSTS,
		qipu_id,
		posts: json.rank,
		receivedAt: Date.now()
	}
}

// 根据qipu_id获取movieInfo
export function fetchMovieInfo(qipu_id) {
	console.log("fetchPostsIfNeeded");
	return dispatch => {
		dispatch(requestPosts(qipu_id))
		return fetch(`http://portal.uaa.qiyi.domain/analyzing/dianying/detail/rank?qipu_id=${qipu_id}`,{
		//return fetch(`http://localhost:8080/detail/rank?qipu_id=${qipu_id}`,{
			mode: "cors"
		})
			.then(response => response.json())
			.then(json => dispatch(receivePosts(qipu_id, json)))
	}
}