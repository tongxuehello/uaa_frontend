import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import {reduxForm,getValues} from 'redux-form';
import {connect} from 'react-redux';
import {wizardFormConfig} from './WizardFormConfig.js';

@reduxForm(wizardFormConfig)
export default class ContactForm1 extends Component {
	render() {
		const {
			fields: { reportName, reportType, reportDiscription},
				handleSubmit,
				resetForm,
				submitting
			} = this.props
		return (
			<div>
				<h3>任务属性</h3>
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label>报告名称</label>
						<div>
							<input type="text" className="form-control" placeholder="请输入报告名称" {...reportName}/>
						</div>
					</div>
					<div className="form-group">
						<label>报告类型</label>
						<div>
							<label className="radio-inline">
								<input type="radio" {...reportType} value="temporary" checked={reportType.value === 'temporary'}/> 报告仅计算一次
							</label>
							<label className="radio-inline">
								<input type="radio" {...reportType} value="normal" checked={reportType.value === 'normal'}/> 报告每30天生成一次
							</label>
						</div>
					</div>
					<div className="form-group">
						<label>报告描述</label>
						<div>
							<input type="text" className="form-control" placeholder="请输入报告描述" {...reportDiscription}/>
						</div>
					</div>
					<div className="form-group">
						<div role="toolbar" className="btn-toolbar">
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
