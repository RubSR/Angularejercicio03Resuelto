import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {GamesService} from "../../services/games.service";
import {GameDetail} from "../../models/Game";

@Component({
  selector: 'app-detail-game-dialog',
  templateUrl: './detail-game-dialog.component.html',
  styleUrls: ['./detail-game-dialog.component.css']
})
export class DetailGameDialogComponent implements OnInit{

  game?: GameDetail ;

  constructor(public pepeRef: MatDialogRef<DetailGameDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public gameId: number, private gameService: GamesService) {
  }
  ngOnInit() {
    this.getGameDetail();
  }

  private getGameDetail(){
    this.gameService.getGameDetail(this.gameId).subscribe({
      next: value => {
        this.game = value;
        console.log(this.game);
      },
      error: err => console.log(err),
      complete: ()=>{
        //TODO: Loader
      }
    });
  }
}
