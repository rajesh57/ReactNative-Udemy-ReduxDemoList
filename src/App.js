

import React, {Component} from 'react';

import {View, Text } from 'react-native';

// Import Redux frameworks
/*
- Provider JSX component we can render it 
- Provider works together with Store 
- Purpose of Provider is transulate all the store data that we can use in the react side of application.
- its communicate with the React

-compose -  Redux Debugg lib for React native -Debugger.
**/
import { Provider} from 'react-redux';

import { createStore, compose } from 'redux';

import reducers from  './reducers'

import { Header} from './components/common';

import LibraryList from './components/LibraryList';

// Redux Debugger 
let composeEnhancers =  compose;

// Only develop mode enable debug.
if(__DEV__){
    composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    
}


class App extends  Component {

        render() {
        return (
            // Reducers passed to store.
            <Provider store = {createStore(reducers,composeEnhancers())}>
             <View> 
              <Header HeaderText = "RAJESH"/>
              <LibraryList/>
            </View>
            </Provider>
        );

    }
}

export default App;
