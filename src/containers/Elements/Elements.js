import React, { Component } from 'react';
import { Link } from 'react-router';
import { CounterButton, GithubButton } from '../../components';
import config from '../../config';
import Helmet from 'react-helmet';
import BootstrapButton from './BootstrapButton';

export default class Home extends Component {
  render() {
    const styles = require('./Elements.scss');
	
    return (
		<div className="container">
			<BootstrapButton/>
		</div>
    );
  }
}
