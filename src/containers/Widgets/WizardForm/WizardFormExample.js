import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import {getValues} from 'redux-form';
import {connect} from 'react-redux';
import { asyncConnect } from 'redux-async-connect';
import { Panel } from 'react-bootstrap';
import WizardForm1 from './WizardForm1';
import WizardForm2 from './WizardForm2';
import WizardForm3 from './WizardForm3';

@connect((fullState)=>{
	if(fullState.form && fullState.form.wizard){
		const wizardFormValue = getValues(fullState.form.wizard);
		console.log(wizardFormValue)
		return {wizardFormValue};
	}
	return {
		wizardFormValue : {}
	};
})
export default class WizardFormExample extends Component {
	
	state = {
		page: 1
	}
	
	render() {
		const nextPage = () => {
			console.log("nextPage",this.state.page);
			this.setState({ page: this.state.page + 1 })
		}

		const previousPage = () => {
			this.setState({ page: this.state.page - 1 })
		}
		
		const { onSubmit,wizardFormValue } = this.props
		const { page } = this.state
		
		console.log("wizardFormValue",wizardFormValue)
		
		return (
			<div className="row">
				<div className="col-md-8">
					<Panel className="uaaPannel">
						{page === 1 && <WizardForm1 onSubmit={nextPage}/>}
						{page === 2 && <WizardForm2 previousPage={previousPage} onSubmit={nextPage}/>}
						{page === 3 && <WizardForm3 previousPage={previousPage} onSubmit={onSubmit}/>}
					</Panel>
				</div>
				<div className="col-md-4">
					<Panel className="uaaPannel">
					{
						Object.entries(wizardFormValue).map((item)=>
							item[1] && item[1]!="" && 
							<div key={item[0]} style={{marginBottom:'10px'}}>
								<label className="label label-default">{item[0]}</label> :
								{JSON.stringify(item[1])}
							</div>
						)
					}
					</Panel>
				</div>
			</div>
		)
	}
}
