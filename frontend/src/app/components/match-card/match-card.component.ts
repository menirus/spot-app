import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Match } from 'src/app/match.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatTable } from '@angular/material';
import { TeamService } from 'src/app/services/team.service';
import { Team } from 'src/app/team.model';

@Component({
  selector: 'app-match-card',
  templateUrl: './match-card.component.html',
  styleUrls: ['./match-card.component.css']
})
export class MatchCardComponent implements OnInit {
  match: Match;
  dataSource: any;
  displayedColumns: string[];

  constructor(public dialog: MatDialog, private teamService: TeamService) {
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


  openDialog(): void {
    this.teamService.getTeams()
      .subscribe((teams: Team[]) => {
        const dialogRef = this.dialog.open(EditMatchDialogComponent, {
          width: '600px',
          height: '410px',
          data: { match: { teams: [] }, teams: teams }
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('Dialog closed', result);
          
        });
      })

  }


}



@Component({
  selector: 'edit-match-dialog',
  templateUrl: './edit-match-dialog.html'
})
export class EditMatchDialogComponent {
  displayedColumns = ["sets", "teamA", "teamB"];
  tableData = [{set: "Set1", "teamA": 12, "teamB": 21}];
  teamAInp: number;
  teamBInp: number;

  @ViewChild(MatTable) matchtable: MatTable<any>;

  constructor(
    public dialogRef: MatDialogRef<EditMatchDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Match
  ) 
  {}
  
  addSet(): void {
    this.tableData.push(
      { "set": "Set "+(this.tableData.length+1), 
        "teamA": this.teamAInp, 
        "teamB": this.teamBInp
      });
      this.matchtable.renderRows();
      this.teamAInp = null;
      this.teamBInp = null;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
