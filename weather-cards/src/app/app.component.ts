import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public cityList: City[];
  public unit = 'K';
  ngOnInit() {
    this.cityList = [
      { name: 'London', id: 2643744 },
      { name: 'Bristol', id: 4749005 },
      { name: 'Rome', id: 4219762 }
    ];
  }
}

export interface City {
  id: number;
  name: string;
}
