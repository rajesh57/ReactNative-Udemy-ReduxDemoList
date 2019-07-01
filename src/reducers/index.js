
import {combineReducers} from 'redux';

import LibraryReducer from './LibraryReducer'

import SelectionReducer from './SelectionReducer';


// libraries reducer created and return an empty array
export default combineReducers ({
    libraries :LibraryReducer,
    selectedLibraryId : SelectionReducer

});

// store.getState() 
// console.log ("getting all the json values ")