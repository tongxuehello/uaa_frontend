import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import {reduxForm,getValues} from 'redux-form';
import {connect} from 'react-redux';
import ReduxFormCheckbox from '../../../components/ReduxForm/ReduxFormCheckbox';
import ReduxFormRadio from '../../../components/ReduxForm/ReduxFormRadio';
import {wizardFormConfig} from './WizardFormConfig.js';

@reduxForm(wizardFormConfig)
export default class ContactForm2 extends Component {
	render() {
		const {
			fields: { reportName1, gender, age, region},
			handleSubmit,
			resetForm,
			submitting
		} = this.props
			
		const options = {
			gender : [{
				value: 'all',
				text: '所有'
			}, {
				value: 'male',
				text: '男'
			}, {
				value: 'female',
				text: '女'
			}],
			age : [{
				value: 'all',
				text: '所有'
			},{
				value: '-18',
				text: '18岁以下'
			},{
				value: '19-24',
				text: '19-24岁'
			},{
				value: '25-30',
				text: '25-30岁'
			},{
				value: '31-35',
				text: '31-35岁'
			},{
				value: '36-40',
				text: '36-40'
			},{
				value: '40+',
				text: '40岁以上'
			}],
			region : [{
				value: 'all',
				text: '所有'
			},{
				value: 'china',
				text: '国内'
			},{
				value: 'other',
				text: '国外'
			}]
		}
		return (
			<div>
				<h3>自然属性</h3>
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label>性别</label>
						<ReduxFormCheckbox inputOptions={options.gender} reduxFormProp={gender}/>
					</div>
					<div className="form-group">
						<label>年龄</label>
						<ReduxFormCheckbox inputOptions={options.age} reduxFormProp={age}/>
					</div>
					<div className="form-group">
						<label>地域</label>
						<ReduxFormRadio inputOptions={options.region} reduxFormProp={region}/>
					</div>
					<div className="form-group">
						<div role="toolbar" className="btn-toolbar">
							<button type="button" className="btn btn-primary" onClick={this.props.previousPage} disabled={submitting}>
								上一步
							</button>
							<button type="submit" className="btn btn-primary" disabled={submitting}>
								下一步
							</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}
