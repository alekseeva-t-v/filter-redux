import serviceReducer from './serviceReducer';
const redux = require('redux');

const store = redux.legacy_createStore(serviceReducer);

export default store;
