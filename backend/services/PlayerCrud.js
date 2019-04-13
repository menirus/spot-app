import Player from '../models/Player';

// TODO: Denorm the name in player model to make the search efficient instead of doing regex search!
const getPlayerByName = (req, res) => {
    console.log(req.body, req.params);
    Player.findOne({'name': new RegExp('^' + req.params.name + '$','i') }, (err, player) => {
        if(err)
            console.log('Sorry bro, couldn\'t find the playa');
        else {
            res.json(player);
        }
    })
}

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
    let player = new Player(req.body);
    player.save()
        .then(player => {
            res.status(200).json({'player': 'Added succesfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
}

const updatePlayer = (req, res) => {
    Player.findOneAndUpdate({'name': new RegExp('^' + req.body.name + '$','i')}, req.body.newData, (err, player) => {
        if(err) res.send('Sorry, update failed for some reason');   
        res.json(player);

    })
}

const deletePlayer = (req, res) => {
    Player.findOneAndDelete({'name': new RegExp('^' + req.body.name + '$','i')}, (err, doc) => {
        if(err) res.send('Sorry, couldn\'t delete the playa!');
        res.send('Playa deleted succesfully bruv!');
    })
}

const deleteAllPlayers = (req, res) => {
    console.log('Deleting ah :(')
    Player.deleteMany({}, (err) => {
        if(err) 
            console.log(err)
        else
            res.send('Deleted all the players yo!');
    })
}

module.exports = {
    'getByName': getPlayerByName,
    'getPlayers': getAllPlayers,
    'addPlayer': addPlayer,
    'updatePlayer': updatePlayer,
    'deletePlayer': deletePlayer,
    'deleteAllPlayers': deleteAllPlayers
}