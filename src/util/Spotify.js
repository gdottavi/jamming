

const clientID = '04aaaa88d8fe4caf803ef51a1b0f6fc7';
const redirectUri = 'http://localhost:3000';
let accessToken; 

const Spotify = {

    getAccessToken() {
        if (accessToken){
            return accessToken;
        }

        //check for access token match
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/); 
        const expirationTimeMatch = window.location.href.match(/expires_in=([^&]*)/)

        if(accessTokenMatch && expirationTimeMatch){
            accessToken = accessTokenMatch[1];
            const expirationTime = Number(expirationTimeMatch[1]); 
            //clears params allowing grabbing a new access token when it expires
            window.setTimeout(() => accessToken = '', expirationTime *1000); 
            window.history.pushState('Access Token', null, '/'); 
        }
        else{
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accessUrl; 
        }

    }

}

export default Spotify; 