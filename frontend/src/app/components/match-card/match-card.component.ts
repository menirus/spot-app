import { Component, OnInit, Inject } from '@angular/core';
import { Match } from 'src/app/match.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-match-card',
  templateUrl: './match-card.component.html',
  styleUrls: ['./match-card.component.css']
})
export class MatchCardComponent implements OnInit {
  match: Match;
  dataSource: any;
  displayedColumns: string[];

  constructor(public dialog: MatDialog) {
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

    const dialogRef = this.dialog.open(EditMatchDialogComponent, {
      width: '600px',
      height: '410px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed', result);
      
    });

  }


}



@Component({
  selector: 'edit-match-dialog',
  templateUrl: './edit-match-dialog.html'
})
export class EditMatchDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<EditMatchDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Match
  ) 
  {}
  
  onNoClick(): void {
    this.dialogRef.close();
  }
}
