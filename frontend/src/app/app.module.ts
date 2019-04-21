import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule, MatInputModule, MatSelectModule, MatDividerModule, MatChipsModule, MatTableModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayerService } from './services/player.service';
import { MatCardModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';

import { ListPlayersComponent } from './components/list-players/list-players.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PlayerCardComponent } from './components/player-card/player-card.component';
import { PlayerEditCardComponent } from './components/player-edit-card/player-edit-card.component';
import { TeamCardComponent, AddTeamDialogueComponent } from './components/team-card/team-card.component';
import { ListTeamsComponent } from './components/list-teams/list-teams.component';
import { MatchCardComponent, EditMatchDialogComponent } from './components/match-card/match-card.component';



@NgModule({
  declarations: [
    AppComponent,
    ListPlayersComponent,
    PlayerCardComponent,
    PlayerEditCardComponent,
    TeamCardComponent,
    AddTeamDialogueComponent,
    ListTeamsComponent,
    MatchCardComponent,
    EditMatchDialogComponent
  ],
  entryComponents: [AddTeamDialogueComponent, EditMatchDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
    MatChipsModule,
    MatTableModule,
    FormsModule
  ],
  providers: [
    PlayerService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
