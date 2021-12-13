import fetch from 'node-fetch';

class playerAPI {
    constructor() {
        const playerAPIURL = 'https://data.nba.net/10s/prod/v1/2021/players.json';
        
    }

    getAPIBody() {
        return this.connectToAPI();
    }

    connectToAPI() {
        fetch(playerAPIURL)
            .then(response => { return response.json() })
            .then(responseBody => {
                return responseBody;
            })
    }
}