import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
