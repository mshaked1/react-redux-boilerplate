import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
// import { bindActionCreators } from 'redux';
import { action } from '../actions/actions';
import List from './PeopleList';
import Input from './PersonInput';

const Container = (props) => {
  const { list } = this.props;
  return (
    <div>
      <Input fetchData={this.props.actions.fetchData} />
      <List list={list} />
    </div>
  );
}

Container.propTypes = {
  fetchData: PropTypes.func.isRequred,
  list: PropTypes.array
};

function mapStateToProps(state) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch(action())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)