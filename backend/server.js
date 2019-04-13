import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose, { mongo } from 'mongoose';
import Player from './models/Player';
import Team from './models/Team';
import * as PlayerCrud from './services/PlayerCrud'

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/players');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB databse connection established successfully!');
});

app.use('/', router);

router.route('/test').get((req, res) => {
    res.json({'abc': 'nammaa bengaluru'});
});

/**
 * 
 *  Player crud operations
 * 
 **/
router.route('/players/getAll').get(PlayerCrud.getPlayers);
router.route('/players/:name').get(PlayerCrud.getByName);
router.route('/players/deleteAll').delete(PlayerCrud.deleteAllPlayers);
router.route('/players/add').post(PlayerCrud.addPlayer);
router.route('/players/delete').delete(PlayerCrud.deletePlayer);
router.route('/players/updateByName').put(PlayerCrud.updatePlayer);

// Todo: Handle the team addition properly. Should we use player references in the schema? Explore one-to-many with names bloated up in subdoc method
router.route('/team/add').post((req, res) => {
    let team = new Team(req.body);
    team.save()
        .then(team => {
            res.status(200).json({'team': team});
        })
        .catch(err => {
            res.status(400).send('Failed to create new team');
        });
});

// app.get('/', (req, res) => res.send('Hello World!'));

app.listen(4000, () => console.log(`Express server running on port 4000`));