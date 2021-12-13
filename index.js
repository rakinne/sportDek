import fetch from 'node-fetch';
const url = 'https://data.nba.net/10s/prod/v1/2021/players.json'

fetch(url).then(res => {
    return res.json();
}).then(body => {
    const playerInfo = body.league.standard;
    const lengthStandardPlayerInfo = playerInfo.length;

    for (let player = 0; player < lengthStandardPlayerInfo; player++) {
        let firstName = playerInfo[player].firstName;
        let lastName = playerInfo[player].lastName;

        console.log(`First Name: ${firstName}`); 
        console.log(`Last Name: ${lastName}`);
        console.log("--------------------"); 
    }
});

