import mongoose, { mongo } from 'mongoose';

const Schema = mongoose.Schema;

let Player = new Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    bio: {
        type: String,
        default: "I'm an easy going guy tho!"
    }
});

export default mongoose.model('Player', Player);