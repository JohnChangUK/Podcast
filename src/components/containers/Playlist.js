import React, { Component } from 'react';
import { Search } from '../presentation';
import { APIClient } from '../../utils';
import { connect } from 'react-redux';
import actions from '../../actions';
import APlayer from 'aplayer';

class Playlist extends Component { 
  constructor() {
    super();
    this.state = {
      trackList: null,
      player: null
    };
  }

  componentDidMount() {

  }

  initializePlayer(list) {
    var ap1 = new APlayer({
    element: document.getElementById('player1'),
    narrow: false,
    autoplay: true,
    showlrc: false,
    mutex: true,
    theme: '#e6d0b2',
    preload: 'metadata',
    mode: 'circulation',
    music: list
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
    this.setState({
      trackList: list,
      player: ap1
    });
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
            console.log("ERROR" + JSON.stringify(response));
        });
    }

    componentDidUpdate() {
// this.props.podcasts refers to the stateToProps['podcasts'] key
// selected refers to the key initialState['selected'] in podcastReducer
      console.log('componentDidUpdate: ' + JSON.stringify(this.props.podcasts.selected));
      if (this.props.podcasts.selected == null)
        return;

      // grab the feedUrl from the JSON, then made request for RSS feed
    const feedUrl = this.props.podcasts.selected['feedUrl'];
    if (feedUrl == null)
      return;
// If the tracklist is not null, do not run the code after
    if (this.state.trackList != null) // tracks are already loaded
      return;

    console.log('FEED URL: ' + feedUrl);
    APIClient
    .get('/feed', {url: feedUrl})
    .then(response => {
      const podcast = response.podcast;
      const item = podcast.item;

      // {
      //   title: 'Preparation',
      //   author: 'Hans Zimmer/Richard Harvey',
      //   url: 'http://devtest.qiniudn.com/Preparation.mp3',
      //   pic: 'http://devtest.qiniudn.com/Preparation.jpg'
      // }
      let list = [];
      item.forEach((track, i) => {
        let trackInfo = {};
        trackInfo['title'] = 'Track '+ i;
        trackInfo['author'] = 'TEST';
        trackInfo['pic'] = 'http://devtest.qiniudn.com/Preparation.jpg';

        let enclosure = track.enclosure[0]['$'];
        trackInfo['url'] = enclosure['url'];
        list.push(trackInfo);
      });

      console.log(JSON.stringify(list));
      if (this.state.player == null){
        this.initializePlayer(list);
      }

//     console.log(JSON.stringify(podcast.item))
    })
    .catch(err => {
      console.log('ERROR: '+JSON.stringify(response));
    });
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

// stateToProps is how you take the global state and
// map it to React's component's property types
// that way you can reference them in React Components
const stateToProps = (state) => {
    return {
// state.podcast is referring to the store,
// the key podcast which refers to: podcastReducer
        podcasts: state.podcast
    }
}

// dispatch is how actions are fired
const dispatchToProps = (dispatch) => {
    return {
// when podcastsReceived gets fired, it goes into actions and get the type
// Then call the reducer and look the the case statement matching the action.type
        podcastsReceived: (podcasts) => dispatch(actions.podcastsReceived(podcasts))
    }
}

// Self executing file, therefore we have to reference the class component 'Playlist' at the end
export default connect(stateToProps, dispatchToProps)(Playlist);
