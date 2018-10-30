import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  private url = 'https://raw.githubusercontent.com/h6gs/tech-test-json/master/football-team.data.json';
  constructor(private http: HttpClient) { }

  getPlayers() {
    return this.http.get(this.url);
  }
}
