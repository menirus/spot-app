import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from '../team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getTeams() {
    return this.http.get(`${this.uri}/teams/getAll`);
  }

  addTeam(team: Team) {
    return this.http.post(`${this.uri}/teams/addOne`, team);
  }

  updateTeam(team: Team) {
    return this.http.put(`${this.uri}/teams/update`, team);
  }

  deleteTeam(id: String) {
    return this.http.delete(`${this.uri}/teams/delete/${id}`);
  }

}
