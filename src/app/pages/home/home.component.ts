import {Component, OnInit} from '@angular/core';
import {Plataforma} from "../../models/Plataforma";
import {GamesService} from "../../services/games.service";
import {Games} from "../../models/GamesResponse";
import {MatDialog} from "@angular/material/dialog";
import {DetailGameDialogComponent} from "../../dialogs/detail-game-dialog/detail-game-dialog.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  platforms: Plataforma[] = [];
  games: Games[] = [];

  constructor(private gamesService: GamesService, private dialog: MatDialog) {
  }


  ngOnInit() {
    this.getPlatforms();
  }

  private getPlatforms(): void{

    this.gamesService.getPlatforms().subscribe({
      next: value => {
        this.platforms = value.results;
        console.log(this.platforms);
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        //TODO: LO QUE QUERAIS
      }
    });
  }

  fetchGames(id: number) {
    //TODO: LLAMAR AL SERVICE PARA QUE TRAIGA LA LISTA DE JUEGOS POR PLATAFORMA
    this.gamesService.getGamesByPlatform(id).subscribe({
      next: value => {
        this.games = value.results;
        console.log(this.games);
      },
      error: err => {
        console.log(err);
      },
      complete: ()=>{

      }
    });
  }

  verDetalle($event: number) {
    console.log($event);

    //2. Le mandamos el id al dialog y este es el que se encarga de llamar a la api
    this.dialog.open(DetailGameDialogComponent,{
      width: '600px',
      data: $event
    });

  }
}
