import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import {reduxForm,getValues} from 'redux-form';
import {connect} from 'react-redux';
import { asyncConnect } from 'redux-async-connect';
import { Panel } from 'react-bootstrap';

@reduxForm({ // <----- THIS IS THE IMPORTANT PART!
	form: 'contact',                           // a unique name for this form
	fields: [ 'reportName', 'reportType', 'reportDiscription', 'email', 'favoriteColor', 'employed', 'notes' ], // all the fields in your form
	initialValues: {
		reportName: '测试报告',
		reportType: 'normal',
		reportDiscription: '测试内容',
		favoriteColor: '00ff00',
		notes: 'Born to write amazing Redux code.'
	}
})
export default class ContactForm extends Component {
	render() {
		const {
			fields: { reportName, reportType, reportDiscription, email, favoriteColor, employed, notes },
				handleSubmit,
				resetForm,
				submitting
			} = this.props
		const setFormState = (data) => {
			console.log("setFormState",data);
			this.setState({...data});
		};
		return (
		<div className="row">
			<div className="col-md-8">
				<Panel className="uaaPannel">
					<form onSubmit={handleSubmit(data=>{setFormState(data)})}>
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
						  <label>Email</label>
						  <div>
							<input type="email" className="form-control" placeholder="Email" {...email}/>
						  </div>
						</div>

						<div className="form-group">
						  <label>Favorite Color</label>
						  <div>
							<select className="form-control" 
							  {...favoriteColor}
							  // required syntax for reset form to work
							  // undefined will not change value to first empty option
							  // when resetting
							  value={favoriteColor.value || ''}>
							  <option></option>
							  <option value="ff0000">Red</option>
							  <option value="00ff00">Green</option>
							  <option value="0000ff">Blue</option>
							</select>
						  </div>
						</div>
						<div className="form-group">
						  <label>
							<input type="checkbox" {...employed}/> Employed
						  </label>
						</div>
						<div className="form-group">
						  <label>Notes</label>
						  <div>
							<textarea className="form-control"
							  {...notes}
							  // required for reset form to work (only on textarea's)
							  // see: https://github.com/facebook/react/issues/2533
							  value={notes.value || ''}/>
						  </div>
						</div>
						<div className="form-group">
							<div role="toolbar" className="btn-toolbar">
							  <button type="submit" className="btn btn-primary" disabled={submitting}>
								{submitting ? <i/> : <i/>} Submit
							  </button>
							  <button type="button" className="btn btn-default" disabled={submitting} onClick={resetForm}>
								Clear Values
							  </button>
							</div>
						</div>
					  </form>
				  </Panel>
				</div>
				<div className="col-md-4">
					<Panel className="uaaPannel">
					{
						Object.entries(this.props.fields).map((item)=>
							item[1].value!="" && 
							<div key={item[0]} style={{marginBottom:'10px'}}>
								<label className="label label-default">{item[0]} : {item[1].value}</label>
							</div>
						)
					}
					</Panel>
				</div>
			</div>
		)
	}
}
