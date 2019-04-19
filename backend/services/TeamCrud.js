import Team from '../models/Team'

const getAll = (req, res) => {
    Team.find()
        .populate('players', 'fullname username')
        .exec((err, teams) => {
        if(err) res.send('Error retreiving teams');
        res.json(teams);
        });
}

const addOne = (req, res) => {
    let team = new Team(req.body);
    team.save()
        .then(team => {
            res.status(200).json({'added': team});
        })
        .catch(err => {
            res.status(400).send('Some error occurred while adding the team');
        })
}

const update = (req, res) => {
    Team.findByIdAndUpdate(req.body._id, req.body, (err, team) => {
        if(err) res.send('Cannot update the team info! Sorry :(');
        res.json(team);
    })
}

const deleteOne = (req, res) => {
    console.log(req.params);
    Team.findByIdAndDelete(req.params.id, (err, doc) => {
        console.log(err, doc);
        if(err) res.json('Unable to delete team');
        res.json('Deleted the team succesfully!');
    })
}

const deleteAll = (req, res) => {
    Team.deleteMany({}, (err) => {
        if(err) res.send('Unable to delete the teams');
        res.send('Deleted all teams succesfully!!');
    })
}

module.exports = {
    'getAll': getAll,
    'addOne': addOne,
    'update': update,
    'deleteOne': deleteOne,
    'deleteAll': deleteAll
}