import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPlayersComponent } from './components/list-players/list-players.component';
import { TeamCardComponent } from './components/team-card/team-card.component';

const routes: Routes = [
  { path: 'listPlayers', component: ListPlayersComponent },
  { path: 'team', component: TeamCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
