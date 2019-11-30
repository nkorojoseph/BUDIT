import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//action generators or creators
const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeEXpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  expense: {
    id
  }
});

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

const sortByDate = (startDate, endDate) => ({
  type: 'SORT_BY_DATE',
  startDate,
  endDate
});

const sortByAmount = amount => ({
  type: 'SORT_BY_AMOUNT',
  amount
});

const expReducerDefaultState = [];

const expReducer = (state = expReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

// filter reducers and defaultState
const filterReducerDefaultState = {
  text: '',
  sortBy: 'data',
  startDate: undefined,
  endDate: undefined
};

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        startDate: action.startDate,
        endDate: action.endDate
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        amount: action.amount
      };
    default:
      return state;
  }
};

//combine reducers and Store
const stateStore = createStore(
  combineReducers({ expenses: expReducer, filters: filterReducer })
);

//
stateStore.subscribe(() => {
  console.log(stateStore.getState());
});

//dispatch the state
const expenseOne = stateStore.dispatch(
  addExpense({
    description: 'Rent',
    amount: 1000000000
  })
);

const expenseTwo = stateStore.dispatch(
  addExpense({
    description: 'Coffee',
    amount: 100000
  })
);

stateStore.dispatch(removeEXpense({ id: expenseOne.expense.id }));

stateStore.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

stateStore.dispatch(setTextFilter('rent'));

stateStore.dispatch(sortByDate('12-3-2019', '12-3-2019'));

stateStore.dispatch(sortByAmount(100000));

const demoState = {
  expenses: [
    {
      id: 'jisisosjosjsoj',
      description: 'January Rent',
      note: 'This is final payment for the address',
      amount: 5000000,
      createdAt: 0
    }
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
};

console.log(stateStore.getState());
