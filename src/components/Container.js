import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchData } from '../actions/actions';
import List from './List';
import Input from './Input';

const Container = (props) => {
  const { list, isFetching, fetchData } = props;
  return (
    <div>
      <Input fetchData={fetchData} />
      <List list={list} isFetching={isFetching} />
    </div>
  );
}

Container.propTypes = {
  // fetchData: PropTypes.func.isRequred,
  list: PropTypes.array,
  isFetching: PropTypes.bool
};

function mapStateToProps(state) {
  return {
    list: state.list,
    isFetching: state.isFetching
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (city) => dispatch(fetchData(city))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)