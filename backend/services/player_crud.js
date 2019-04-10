import Player from '../models/Player';

const getAllPlayers = (req, res) => {
    console.log('hell snow');
    Player.find((err, players) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('what the heck');
            res.json(players);
        }
    })
};

const addPlayer = (req, res) => {

}

const updatePlayer = (req, res) => {

}

const deletePlayer = (req, res) => {

}

module.exports = {
    'getPlayers': getAllPlayers
}