import { Component, OnInit, Inject } from '@angular/core';
import { Team } from 'src/app/team.model';
import { Player } from 'src/app/player.model';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css']
})
export class TeamCardComponent implements OnInit {
  team: Team;
  players: Player[];

  constructor(public dialog: MatDialog, private playerService: PlayerService) {
    this.team = {
      'name': 'Dream team',
      '_id': '13423451234',
      'teamType': 'Singles',
      'players': [ ({} as Player) ]
    }
  }

  openDialog(): void {
    this.playerService.getPlayers()
      .subscribe((data: Player[]) => {
        this.players = data;
        console.log(this.players)
        const dialogRef = this.dialog.open(AddTeamDialogueComponent, {
          width: '600px',
          height: '410px',
          data: {team: this.team, players: this.players}
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('Dialog closed');
          
        });
      })
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
