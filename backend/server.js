import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose, { mongo } from 'mongoose';
import * as PlayerCrud from './services/PlayerCrud'
import * as TeamCrud from './services/TeamCrud'

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/players', { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

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
router.route('/players/getAll').get(PlayerCrud.getAll);
router.route('/players/:name').get(PlayerCrud.getByName);
router.route('/players/delete/:id').delete(PlayerCrud.deleteOne);
router.route('/players/deleteAll').delete(PlayerCrud.deleteAll);
router.route('/players/add').post(PlayerCrud.addOne);
router.route('/players/update').put(PlayerCrud.update);

/**
 *
 *  Team crud operations 
 * 
 **/
router.route('/teams/getAll').get(TeamCrud.getAll);
router.route('/teams/addOne').post(TeamCrud.addOne);
router.route('/teams/update').put(TeamCrud.update);
router.route('/teams/delete/:id').delete(TeamCrud.deleteOne);
router.route('/teams/deleteAll').delete(TeamCrud.deleteAll);


app.listen(4000, () => console.log(`Express server running on port 4000`));