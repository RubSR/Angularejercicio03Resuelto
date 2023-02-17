import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Games} from "../../models/GamesResponse";

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent {

  @Input() game? : Games;
  @Output() alPresionarBotonVer = new EventEmitter<number>();

  botonVer(){
    this.alPresionarBotonVer.emit(this.game?.id)
  }


}
