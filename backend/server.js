import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose, { mongo } from 'mongoose';
import Player from './models/Player';

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
})

router.route('/players').get((req, res) => {
    console.log('hell snow');
    Player.find((err, players) => {
        if (err)
            console.log(err);
        else {
            console.log('what the heck');
            res.json(players);
        }
    });
})

router.route('/players/add').post((req, res) => {
    let player = new Player(req.body);
    player.save()
        .then(player => {
            res.status(200).json({'player': 'Added succesfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        })
})
// app.get('/', (req, res) => res.send('Hello World!'));

app.listen(4000, () => console.log(`Express server running on port 4000`));