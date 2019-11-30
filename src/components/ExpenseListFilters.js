import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import { connect } from 'react-redux';
import setTextFilter from '../actions/filters';

const ExpenseListFilters = props => (
  <div>
    <input
      type='text'
      value={props.filters.text}
      onChange={e => {
        props.dispatch(setTextFilter(e.target.value));
      }}
    />
  </div>
);

const MapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(MapStateToProps)(ExpenseListFilters);
