import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/match.model';

@Component({
  selector: 'app-match-card',
  templateUrl: './match-card.component.html',
  styleUrls: ['./match-card.component.css']
})
export class MatchCardComponent implements OnInit {
  match: Match;
  dataSource: any;
  displayedColumns: string[];

  constructor() {
    this.match = {
      "day": new Date("01-01-2018"),
      "teams": [ { "_id": "asdf", "name": "Surya/Harshith" }, { "_id": "asdesf", "name": "Rohith/Rashmith" } ],
      "sets": [ { "scores": [12, 21] } ]
    }

    this.displayedColumns = [ 'teamName', 'set1' , 'set2' ];

    this.dataSource = [
      {teamName: "Surya/Harshith", scores: [12, 21]},
      {teamName: "Rohith/Rashmith", scores: [21, 19]}
    ];
  }

  ngOnInit() {

  }

}
