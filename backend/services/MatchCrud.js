import Match from '../models/Match';

const getAll = (req, res) => {
    Match.find((err, matches) => {
        if(err) res.json(err);
        res.json(matches);
    })
}

const addOne = (req, res) => {
    let match = new Match(req.body);
    match.save()
        .then((match) => {
            res.json(match);
        })
        .catch((err) => {
            console.log('Error inserting');
            res.json(err);
        })
}

const update = (req, res) => {
    Match.findByIdAndUpdate(req.body._id, req.body, {new: true}, (err, match) => {
        if(err) res.json(err);
        res.json(match);
    })
}

const deleteById = (req, res) => {
    Match.findByIdAndDelete(req.params.id, (err, doc) => {
        if(err) res.json(err);
        res.json('Deleted the match', doc)
    })
}

module.exports = {
    'getAll': getAll,
    'addOne': addOne,
    'update': update,
    'delete': deleteById
}