import React, {Component, PropTypes} from 'react';
export default class ReduxFormCheckbox extends Component {

	/*
	static propTypes = {
		checkboxOptions: PropTypes.array,
		reduxFormProp: React.PropTypes.shape({
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
		const {inputOptions, reduxFormProp} = this.props;
		return (
			<div>
			{
			inputOptions.map(({value,text},index) =>
				<label className="radio-inline" key={index}>
					<input
						type="radio"
						{...reduxFormProp}
						value={value}
						checked={reduxFormProp.value === value}
					/> {text}
				</label>
			)
			}
			</div>
		);
	}
}

