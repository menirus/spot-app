import Player from '../models/Player';

// TODO: Denorm the name in player model to make the search efficient instead of doing regex search!
const getByName = (req, res) => {
    console.log(req.body, req.params);
    Player.findOne({'name': new RegExp('^' + req.params.name + '$','i') }, (err, player) => {
        if(err)
            console.log('Sorry bro, couldn\'t find the playa');
        else {
            res.json(player);
        }
    })
}

const getAll = (req, res) => {
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

const addOne = (req, res) => {
    let player = new Player(req.body);
    player.save()
        .then(player => {
            res.status(200).json({'player': 'Added succesfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
}

const update = (req, res) => {
    Player.findByIdAndUpdate(req.body._id, req.body, (err, player) => {
        console.log(err, player);
        if(err) res.send('Sorry, update failed for some reason');   
        res.json(player);
    })
}

const deleteOne = (req, res) => {
    Player.findByIdAndDelete(req.params.id, (err, doc) => {
        if(err) res.json({'msg': 'Sorry, couldn\'t delete the playa!'});
        res.json({'msg': 'Playa deleted succesfully bruv!'});
    })
}

const deleteAll = (req, res) => {
    console.log('Deleting ah :(')
    Player.deleteMany({}, (err) => {
        if(err) 
            console.log(err)
        else
            res.send('Deleted all the players yo!');
    })
}

module.exports = {
    'getByName': getByName,
    'getAll': getAll,
    'addOne': addOne,
    'update': update,
    'deleteOne': deleteOne,
    'deleteAll': deleteAll
}