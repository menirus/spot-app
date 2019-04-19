import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/team.model';

@Component({
  selector: 'app-list-teams',
  templateUrl: './list-teams.component.html',
  styleUrls: ['./list-teams.component.css']
})
export class ListTeamsComponent implements OnInit {
  teams: Team[];
  
  constructor() { }

  ngOnInit() {
  }

}
