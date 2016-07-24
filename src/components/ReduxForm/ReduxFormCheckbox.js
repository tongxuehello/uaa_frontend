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
				<label className="checkbox-inline" key={index}>
					<input
						type="checkbox"
						checked={reduxFormProp.value.indexOf(value) >= 0}
						onChange={
							event => {
								const index = reduxFormProp.value.indexOf(value);
								if(index < 0) { // wasn't selected
									if(event.target.checked) { // was checked
										reduxFormProp.onChange(reduxFormProp.value.concat(value));
									}
								} else {
									if(!event.target.checked) { // was unchecked
										console.log("index",index);
										const copy = [...reduxFormProp.value]; // make copy to not mutate value
										copy.splice(index, 1); // remove item at index
										reduxFormProp.onChange(copy);
									}
								}
							}
						}
					/> {text}
				</label>
			)
			}
			</div>
		);
	}
}

