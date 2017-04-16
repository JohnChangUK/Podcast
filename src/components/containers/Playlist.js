import React, { Component } from 'react';
import { Search } from '../presentation';
import { APIClient } from '../../utils';
import { connect } from 'react-redux';
import actions from '../../actions';

class Playlist extends Component { 

    searchPodcasts(event) {
        if (event.keyCode != 13) 
            return;

        console.log(`searchPodcasts: ${event.target.value}`);
        const endpoint = '/search/' + event.target.value;

        APIClient
        .get(endpoint, null)
        .then(response => {
            // console.log(JSON.stringify(response));
            this.props.podcastsReceived(response.results);
        })
        .catch(err => {
            console.log("ERROR" + JSON.stringify(err));
        })
    }

    render() {
        return (
            <div>
                <div className="hero-header bg-shop animated fadeindown">
                    <h1 className="hero-title">Playlist</h1>
                </div>      

                <Search onSearch={this.searchPodcasts.bind(this)} />
            </div>      
        );
    }
}

// state.podcast is referring to the store,
// the key podcast which refers to: podcastReducer
const stateToProps = (state) => {
    return {
        podcasts: state.podcast
    }
}

const dispatchToProps = (dispatch) => {
    return {
        podcastsReceived: (podcasts) => dispatch(actions.podcastsReceived(podcasts))
    }
}

export default connect(stateToProps, dispatchToProps)(Playlist);
