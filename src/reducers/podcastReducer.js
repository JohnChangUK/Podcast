import constants from '../constants';

var initialState = {
    all: null,
    selected: null
};

// Reducers are pieces of data to be saved in the Store
export default (state = initialState, action) => {
    let updated = Object.assign({}, state);

    switch(action.type) {
        case constants.PODCASTS_RECEIVED:
            // console.log('PODCASTS_RECEIVED: ' + JSON.stringify(action.podcasts));
            updated['all'] = action.podcasts;

            return updated;

        case constants.PODCAST_SELECTED:
        // console.log('PODCAST_SELECTED: ' + JSON.stringify(action.podcast));
        if (updated.selected != null) {
            if (updated.selected.collectionId == action.podcast.collectionId)
                return state;
        }

        updated['selected'] = action.podcast;
        return updated;

        default:
            return state;
    }
};