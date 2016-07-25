import React, { Component } from 'react';
import { Link } from 'react-router';
import config from '../../config';
import Helmet from 'react-helmet';

export default class Home extends Component {
	render() {
		const styles = require('./Home.scss');
		// require the logo image both from client and server
		const logoImage = require('../../../static/img/iqiyi-black.png');
		return (
			<div className={styles.home}>
				<Helmet title="Home"/>
				<div className={styles.masthead}>
					<div className="container">
					<div className={styles.logo}>
						<p>
							<img src={logoImage}/>
						</p>
					</div>
					<h1>{config.app.title}</h1>

					<h2>{config.app.description}</h2>
				</div>
			</div>

			<div className="container">
				<h2>基本元素</h2>
				该页面定义了常用的基本控件，使用了react-bootstrap组件，如：
				<ul>
					<li>基本按钮</li>
					<li>分页按钮</li>
				</ul>
				
				<h2>组件</h2>
				该页面定义了项目中所涉及的可以抽取出来的公共组件，由基本控件组合而成，如：
				<ul>
					<li>电影详情组件</li>
				</ul>
				
				<h2>表单</h2>
				该页面基于redux-form控件，模拟了项目中的表单使用情形，包含：
				<ul>
					<li>基本表单</li>
					<li>分页表单</li>
				</ul>
				
			</div>
		</div>
		);
	}
}
