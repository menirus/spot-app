import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPlayersComponent } from './components/list-players/list-players.component';
import { TeamCardComponent } from './components/team-card/team-card.component';
import { ListTeamsComponent } from './components/list-teams/list-teams.component';

const routes: Routes = [
  { path: 'listPlayers', component: ListPlayersComponent },
  { path: 'team', component: TeamCardComponent },
  { path: 'listTeams', component: ListTeamsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
