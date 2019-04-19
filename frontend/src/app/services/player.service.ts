import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  uri = 'http://localhost:4000';
  constructor(private http: HttpClient) { 

  }

  getPlayers() {
    return this.http.get(`${this.uri}/players/getAll`);
  }

  getPlayerByName(name: String) {
    return this.http.get(`${this.uri}/players/${name}`);
  }

  updatePlayer(player: Player) {
    if(player._id)
      return this.http.put(`${this.uri}/players/update`, player);
    else
      return this.http.post(`${this.uri}/players/add`, player);
  }

  deletePlayer(id: string) {
    return this.http.delete(`${this.uri}/players/delete/${id}`);
  }

}
