import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() cityId;
  @Input() cityName;
  @Input() unit;
  public weatherDescription: string;
  public weatherTemperature;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService
      .getWeatherById(this.cityId)
      .subscribe((response: any) => {
        this.weatherDescription = response.list[0].weather[0].description;
        this.weatherTemperature = response.list[0].main;
      });
  }

  getTemp() {
    if (!this.weatherTemperature) { return {temp_min: '', temp_max: ''}; }
    const {temp_min, temp_max} = this.weatherTemperature;
    if (this.unit === 'C') {
      return {temp_min: (temp_min - 273.15).toFixed(2), temp_max: (temp_max - 273.15).toFixed(2)};
    }
    if (this.unit === 'K') {
      return {temp_min, temp_max};
    }
  }

}
