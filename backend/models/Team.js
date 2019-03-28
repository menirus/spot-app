import mongoose, { mongo } from 'mongoose';
import Player from './Player';

const Schema = mongoose.Schema;

let Team = new Schema({
    name: {
        type: String,
        unique: true
       //default: 
    },
    type: {
        type: String,
        enum: ['Singles', 'Doubles', 'Mixed Doubles']
    },
    players: {
        type: [Player.schema],
        required: true
    }
});

export default mongoose.model('Team', Team);