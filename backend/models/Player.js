import mongoose, { mongo } from 'mongoose';

const Schema = mongoose.Schema;

let Player = new Schema({
    username: {
        type: String,
        unique: true
    },
    fullname: {
        type: String
    },
    age: {
        type: Number
    },
    gender: {
        type: String,
        enum: ['Male', 'Female']
    },
    bio: {
        type: String,
        default: "I'm an easy going guy tho!"
    }
});

Player.index({username: 1}, {unique: true});

export default mongoose.model('Player', Player);