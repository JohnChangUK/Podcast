import React, { Component } from 'react';
import { Search } from '../presentation';
import { APIClient } from '../../utils';
import { connect } from 'react-redux';
import actions from '../../actions';
import APlayer from 'aplayer';

class Playlist extends Component { 

  componentDidMount() {
      var ap1 = new APlayer({
      element: document.getElementById('player1'),
      narrow: false,
      autoplay: true,
      showlrc: false,
      mutex: true,
      theme: '#e6d0b2',
      preload: 'metadata',
      mode: 'circulation',
      music: [
          {
            title: 'Preparation',
            author: 'Hans Zimmer/Richard Harvey',
            url: 'http://devtest.qiniudn.com/Preparation.mp3',
            pic: 'http://devtest.qiniudn.com/Preparation.jpg'
          }
        ]
      });
      // ap1.on('play', function () {
      //     console.log('play');
      // });
      // ap1.on('play', function () {
      //     console.log('play play');
      // });
      // ap1.on('pause', function () {
      //     console.log('pause');
      // });
      // ap1.on('canplay', function () {
      //     console.log('canplay');
      // });
      // ap1.on('playing', function () {
      //     console.log('playing');
      // });
      // ap1.on('ended', function () {
      //     console.log('ended');
      // });
      // ap1.on('error', function () {
      //     console.log('error');
      // });
  }

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
                <div style={{paddingTop:64}} className="hero-header bg-shop animated fadeindown">        
                    <div className="p-20 animated fadeinup delay-1">
                    <div style={{background:'#fff'}} id='player1' className='aplayer'></div>
                    </div>
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
