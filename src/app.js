import validator from 'validator';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
//import {BrowserRouter, Route, Switch,NavLink, Link} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, removeExpensem, editExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { get } from 'https';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 10000 }));

store.dispatch(addExpense({ description: 'Gas bill' }));

store.dispatch(setTextFilter('Bill'));

const state = store.getState();

const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

//default component
ReactDOM.render(jsx, document.getElementById('app'));
