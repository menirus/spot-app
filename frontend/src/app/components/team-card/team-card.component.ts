import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { Team } from 'src/app/team.model';
import { Player } from 'src/app/player.model';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css']
})
export class TeamCardComponent implements OnInit {
  @Input()
  team: Team;
  players: Player[];


  @Output() 
  refreshTeamsEvent = new EventEmitter();

  constructor(public dialog: MatDialog, private playerService: PlayerService, private teamService: TeamService) {
    this.team = {
      'name': 'Dream team',
      '_id': '13423451234',
      'teamType': 'Singles',
      'players': [ ({} as Player) ]
    }
  }

  deleteTeam(): void {
    this.teamService.deleteTeam(this.team._id)
      .subscribe(result => {
        console.log(result);
        this.refreshTeamsEvent.emit();
      })
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
          console.log('Dialog closed', result);
          if(result == {})
            return;
          this.teamService.updateTeam(result)
            .subscribe(result => {
              console.log(result);
              this.refreshTeamsEvent.emit();
            });
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
