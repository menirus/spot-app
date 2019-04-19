import { Component, OnInit, Inject } from '@angular/core';
import { Team } from 'src/app/team.model';
import { Player } from 'src/app/player.model';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css']
})
export class TeamCardComponent implements OnInit {
  team: Team;

  constructor(public dialog: MatDialog) {
    this.team = {
      'name': 'Dream team',
      '_id': '13423451234',
      'teamType': 'Singles',
      'players': [ ({} as Player) ]
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddTeamDialogueComponent, {
      width: '250px',
      data: {team: this.team}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed');
      
    });
  }

  ngOnInit() {
    
  }

}


@Component({
  selector: 'add-team-dialogue',
  templateUrl: './add-team-dialogue.html',
  styleUrls: ['./team-card.component.css']
})
export class AddTeamDialogueComponent {

  constructor(
    public dialogRef: MatDialogRef<AddTeamDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Team
  ) 
  {}
  
  onNoClick(): void {
    this.dialogRef.close();
  }
}
