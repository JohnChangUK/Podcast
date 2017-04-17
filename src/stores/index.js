import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { podcastReducer } from '../reducers';

var store;

export default {
// Creating the package of reducers
    initialize: () => {
        const reducers = combineReducers({
// the key podcast if how you reference podcastReducer in the entire application,
// which contains the data of podcasts
            podcast: podcastReducer
        });
// Initializing the store
        store = createStore(
            reducers,
            applyMiddleware(thunk) 
            );
        
        return store;
    },

    currentStore: () => {
        return store;
    }
};