import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from 'src/app/player.model';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent implements OnInit {
  @Input()
  player: Player;

  @Output() 
  refreshEvent= new EventEmitter();

  constructor(private playerService:PlayerService) { }

  ngOnInit() {
  }


  editPlayer(player: Player) {
    player.editing = !player.editing;
  }

  deletePlayer(id: string) {
    this.playerService
      .deletePlayer(id)
      .subscribe((data: any) => {
        console.log(data);
        this.refreshEvent.emit();
      });
  }

}
