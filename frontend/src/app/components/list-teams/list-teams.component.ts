import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/team.model';
import { TeamService } from 'src/app/services/team.service';
import { MatDialog } from '@angular/material';
import { PlayerService } from 'src/app/services/player.service';
import { Player } from '@angular/core/src/render3/interfaces/player';
import { AddTeamDialogueComponent } from '../team-card/team-card.component';

@Component({
  selector: 'app-list-teams',
  templateUrl: './list-teams.component.html',
  styleUrls: ['./list-teams.component.css']
})
export class ListTeamsComponent implements OnInit {
  teams: Team[];
  newTeam: Team;
  
  constructor(public dialog: MatDialog, private playerService: PlayerService, private teamService: TeamService) { }

  ngOnInit() {
    this.fetchTeams();
    this.newTeam = {} as Team;
  }

  openAddTeamDialog(): void {
    this.playerService.getPlayers()
      .subscribe((data: Player[]) => {
        const dialogRef = this.dialog.open(AddTeamDialogueComponent, {
          width: '600px',
          height: '410px',
          data: {team: this.newTeam, players: data}
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('Dialog closed', result);
          if(result === {} || result === undefined)
            return;
          this.teamService.addTeam(result)
            .subscribe(result => {
              console.log(result);
              this.fetchTeams();
            });
        });
      })
  }
  

  fetchTeams() {
    console.log('Refreshing teams!!');
    this.teamService.getTeams()
      .subscribe((data: Team[]) => {
        this.teams = data;
      })
  }

}
