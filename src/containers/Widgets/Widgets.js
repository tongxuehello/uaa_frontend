import React, {Component, PropTypes} from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import * as widgetActions from '../../redux/modules/widgets';
import {isLoaded, load as loadWidgets} from '../../redux/modules/widgets';
import {initializeWithKey} from 'redux-form';
import { WidgetForm } from '../../components';
import { asyncConnect } from 'redux-async-connect';
import { InfoBar, RankInfo } from '../../components';
import { Panel } from 'react-bootstrap';

@asyncConnect([{
  deferred: true,
  promise: ({store: {dispatch, getState}}) => {
    if (!isLoaded(getState())) {
      return dispatch(loadWidgets());
    }
  }
}])
@connect(
  state => ({
    widgets: state.widgets.data,
    editing: state.widgets.editing,
    error: state.widgets.error,
    loading: state.widgets.loading
  }),
  {...widgetActions, initializeWithKey })
export default class Widgets extends Component {
  static propTypes = {
    widgets: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool,
    initializeWithKey: PropTypes.func.isRequired,
    editing: PropTypes.object.isRequired,
    load: PropTypes.func.isRequired,
    editStart: PropTypes.func.isRequired
  };

	render() {
		const handleEdit = (widget) => {
			const {editStart} = this.props; // eslint-disable-line no-shadow
			return () => editStart(String(widget.id));
		};
		const {widgets, error, editing, loading, load} = this.props;
		let refreshClassName = 'fa fa-refresh';
		if (loading) {
			refreshClassName += ' fa-spin';
		}
		const styles = require('./Widgets.scss');
		return (
			<div className={styles.widgets + ' container'}>
				<h1>
					组件
					<button className={styles.refreshBtn + ' btn btn-success'} onClick={load}>
						<i className={refreshClassName}/> {' '} Reload Widgets
					</button>
				</h1>

				<Helmet title="组件"/>

				<h2>详情榜单</h2>
				
				<Panel className={styles.uaaPannel}>
					<div className={styles.pannelTitle}>电视剧: 我的朋友陈白露小姐</div>
					<div className="row" style={{marginLeft:0}}>
						<div className="col-md-6">
							<RankInfo/>
						</div>
						<div className="col-md-6">
							<RankInfo/>
						</div>
					</div>
					
					<div className="row" style={{marginLeft:0}}>
						<div className="col-md-6">
							<RankInfo/>
						</div>
						<div className="col-md-6">
							<RankInfo/>
						</div>
					</div>
				</Panel>
				
				<InfoBar/>
			</div>
		);
	}
}

