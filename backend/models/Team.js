import mongoose, { mongo } from 'mongoose';
import Player from './Player';

const Schema = mongoose.Schema;

let Team = new Schema({
    name: {
        type: String,
        unique: true
       //default: 
    },
    teamType: {
        type: String,
        enum: ['Singles', 'Doubles', 'Mixed Doubles']
    },
    players: [ {type: Schema.Types.ObjectId, ref: Player }]
});

export default mongoose.model('Team', Team);