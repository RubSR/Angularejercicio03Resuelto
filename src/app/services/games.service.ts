import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PlataformaResponse} from "../models/Plataforma";
import {GamesResponse} from "../models/GamesResponse";
import {GameDetail} from "../models/Game";

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }


  public getPlatforms(): Observable<PlataformaResponse>{
    const url ='https://api.rawg.io/api/platforms?key=8fd0fbc07bfb46db86c63476b08347fb';
    return this.http.get<PlataformaResponse>(url);
  }

  public getGamesByPlatform(id: number): Observable<GamesResponse>{
    const url ='https://api.rawg.io/api/games?key=8fd0fbc07bfb46db86c63476b08347fb&page_size=20&platforms=';
    return this.http.get<GamesResponse>(url+ id);
  }

  public getGameDetail(id: number): Observable<GameDetail>{
    const url = `https://api.rawg.io/api/games/${id}?key=8fd0fbc07bfb46db86c63476b08347fb`;
    return  this.http.get<GameDetail>(url);
  }
}
