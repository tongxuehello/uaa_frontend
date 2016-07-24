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
		index_type: "money_index",
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
		index_type: "money_amount",
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
		index_type: "all_index",
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
		index_type: "view_rate",
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
			ret_qipu_id: action.qipu_id,
			isFetching: false,
			infoData: dealWithMovieInfoData(action.posts),
			lastUpdated: action.receivedAt,
			basicInfo: action.basicInfo
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
export function receivePosts(qipu_id, basicInfo, json) {
	return {
		type: RECEIVE_POSTS,
		qipu_id,
		basicInfo: basicInfo.data,
		posts: json.rank,
		receivedAt: Date.now()
	}
}

const movieRankPromise = qipu_id => (
	fetch(`http://portal.uaa.qiyi.domain/analyzing/dianying/detail/rank?qipu_id=${qipu_id}`,{
		mode: "cors"
	}).then(response => response.json())
)
	
// 根据qipu_id获取movieInfo
export function fetchMovieInfo(movieInfoPromise, qipu_id) {
	return dispatch => {
		dispatch(requestPosts(qipu_id))
		console.log("根据qipu_id获取movieInfo");
		return Promise.all([movieInfoPromise,movieRankPromise(qipu_id)])
				.then(values => dispatch(receivePosts(qipu_id, values[0],values[1])))
	}
}