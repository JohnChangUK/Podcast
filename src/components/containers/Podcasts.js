import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';

class Podcasts extends Component {

  selectPodcast(podcast, event) {
    // console.log("selectPodcast: " + JSON.stringify(podcast));
    this.props.podcastSelected(podcast);
  }

  render() {
    const list = this.props.podcasts.all || [];

    return (
      <div>
        { list.map( (podcast, i) => {
            return (
                <div key={i} className="shop-banner animated fadeinup delay-2">
                  <a onClick={this.selectPodcast.bind(this, podcast)} href="#">
                    <img src={podcast.artworkUrl600} alt="" />
                    <div className="opacity-overlay valign-wrapper">
                      <div className="valign center width-100">
                        <p className="white-text">{podcast.collectionName}</p>
                      </div>
                    </div>
                  </a>
                </div>  
              );
          })
        }                            
      </div>
    );
  }
}

// We want to connect to the same data from store as Playlist
const stateToProps = (state) => {
  return {
    podcasts: state.podcast
  }
}

// We want to tell the redux store a podcast has been selected
const dispatchToProps = (dispatch) => {
  return {
    podcastSelected: (podcast) => dispatch(actions.podcastSelected(podcast))
  }
}

export default connect(stateToProps, dispatchToProps)(Podcasts);
