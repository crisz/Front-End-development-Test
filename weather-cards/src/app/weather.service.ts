import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private openWeatherBaseUrl = 'api.openweathermap.org/data/2.5/forecast';
  private openWeatherApiKey = 'f4bbeb8ec1a8fb95591f2cf112aaa575';

  constructor(private http: HttpClient) { }

  getWeatherById(cityId: number) {
    return this.http.get(`http://${this.openWeatherBaseUrl}?id=${cityId}&APPID=${this.openWeatherApiKey}`);
  }
}
