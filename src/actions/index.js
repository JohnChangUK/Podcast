import constants from '../constants';

export default { 

    searchPodcasts: (params) => {
        console.log('searchPodcasts: ' + JSON.stringify(params))

    },

    podcastsReceived: (podcasts) => {
        return {
            type: constants.PODCASTS_RECEIVED,
            podcasts: podcasts
        };
    }
};