import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import FormExample from './FormExample';
import WizardFormExample from './WizardForm/WizardFormExample';

import { Panel } from 'react-bootstrap';

@connect()
export default class ReduxForm extends Component {
	static propTypes = {
		
	}
	
	render() {
		return (
			<div className={'container'}>
			
				<Helmet title="表单示例：ReduxForm"/>
			
				<h2>基本表单</h2>
				
				<FormExample/>
				
				<h2>分页表单</h2>
				
				<WizardFormExample/>

			</div>
		);
	}
}

