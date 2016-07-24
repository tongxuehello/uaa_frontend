import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import {reduxForm,getValues} from 'redux-form';
import {connect} from 'react-redux';
import {wizardFormConfig} from './WizardFormConfig.js';

@reduxForm(wizardFormConfig)
export default class ContactForm2 extends Component {
	render() {
		const {
			fields: {wordSelect},
			handleSubmit,
			resetForm,
			submitting
		} = this.props
			
		const options = {
			wordSelect : [{
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
			}]
		}
		console.log("wordSelect.value : ",wordSelect.value)
		return (
			<div>
				<h3>身份属性</h3>
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label>年龄</label>
						<select className="form-control"
							{...wordSelect}
							// required syntax for reset form to work
							// undefined will not change value to first empty option
							// when resetting
							value={wordSelect.value || 'all'}>
							{
								options.wordSelect.map(({value,text})=>
									<option key={value} value={value}>{text}</option>
								)
							}
						</select>
					</div>
					<div className="form-group">
						<div role="toolbar" className="btn-toolbar">
							<button type="button" className="btn btn-primary" onClick={this.props.previousPage} disabled={submitting}>
								上一步
							</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}
