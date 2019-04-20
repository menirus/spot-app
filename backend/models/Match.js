import mongoose, { mongo } from 'mongoose';
import Team from './Team';

const Schema = mongoose.Schema;

let Match = new Schema({
    teams: [ {type: Schema.Types.ObjectId, ref: Team} ],
    sets: [
        {
            scores: [ Number ],
        }
    ],
    day: Date
});

export default mongoose.model('Match', Match);