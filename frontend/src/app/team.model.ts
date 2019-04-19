import { Player } from './player.model';

export interface Team {
    _id: String;
    name: String;
    teamType: String;
    players: Player[];
}