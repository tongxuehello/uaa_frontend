import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import {reduxForm,getValues} from 'redux-form';
import {connect} from 'react-redux';
import { asyncConnect } from 'redux-async-connect';
import { Panel } from 'react-bootstrap';

@reduxForm({ // <----- THIS IS THE IMPORTANT PART!
	form: 'contact',                           // a unique name for this form
	fields: [ 'firstName', 'lastName', 'email', 'sex', 'favoriteColor', 'employed', 'notes' ], // all the fields in your form
	initialValues: {
		firstName: 'John',
		lastName: 'Doe',
		favoriteColor: '00ff00',
		notes: 'Born to write amazing Redux code.'
	}
})
export default class ContactForm extends Component {
	render() {
		const {
			fields: { firstName, lastName, email, sex, favoriteColor, employed, notes },
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
						<div>
						  <label>First Name</label>
						  <div>
							<input type="text" placeholder="First Name" {...firstName}/>
						  </div>
						</div>
						<div>
						  <label>Last Name</label>
						  <div>
							<input type="text" placeholder="Last Name" {...lastName}/>
						  </div>
						</div>
						<div>
						  <label>Email</label>
						  <div>
							<input type="email" placeholder="Email" {...email}/>
						  </div>
						</div>
						<div>
						  <label>Sex</label>
						  <div>
							<label>
							  <input type="radio" {...sex} value="male" checked={sex.value === 'male'}/> Male
							</label>
							<label>
							  <input type="radio" {...sex} value="female" checked={sex.value === 'female'}/> Female
							</label>
						  </div>
						</div>
						<div>
						  <label>Favorite Color</label>
						  <div>
							<select
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
						<div>
						  <label>
							<input type="checkbox" {...employed}/> Employed
						  </label>
						</div>
						<div>
						  <label>Notes</label>
						  <div>
							<textarea
							  {...notes}
							  // required for reset form to work (only on textarea's)
							  // see: https://github.com/facebook/react/issues/2533
							  value={notes.value || ''}/>
						  </div>
						</div>
						<div>
						  <button type="submit" disabled={submitting}>
							{submitting ? <i/> : <i/>} Submit
						  </button>
						  <button type="button" disabled={submitting} onClick={resetForm}>
							Clear Values
						  </button>
						</div>
					  </form>
				  </Panel>
				</div>
				<div className="col-md-4">
					<Panel className="uaaPannel">
					{
						Object.entries(this.props.fields).map((item)=>(item[1].value!="" && <div key={item[0]} style={{marginBottom:'10px'}}><label className="label label-default">{item[0]} : {item[1].value}</label></div>))
					}
					</Panel>
				</div>
			</div>
		)
	}
}
