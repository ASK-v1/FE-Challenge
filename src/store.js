import { combineReducers } from 'redux';

function data(
  state = {
    searching: '',
    mockData: [],
    prevUrl: '/',
  },
  action,
) {
  switch (action.type) {
    case 'SET_SEARCHING':
      return {
        ...state,
        searching: action.value,
      };
    case 'SET_DATA':
      return {
        ...state,
        mockData: action.data,
      };
    case 'PREV_URL':
      return {
        ...state,
        prevUrl: action.url,
      };
    default:
      return state;
  }
}

const dataApp = combineReducers({
  data,
});

export default dataApp;
