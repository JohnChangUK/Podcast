import superagent from 'superagent';
import bluebird from 'bluebird';

module.exports = {

    get: (endpoint, params) => {
        return new Promise( (resolve, reject) => {          
            superagent
            .get(endpoint)
            .query(params)
            .set('Accept', 'application/json')
            .end((err, response) => {
                if (err) {
                    reject(err)
                    return;
                }
    // result gets passed in the body of the response
                resolve(response.body);
            });
        });     
    }
};