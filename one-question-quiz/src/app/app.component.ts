import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  question = 'What\'s the most populated country in the world?';
  answers = [
    {
      answer: 'India',
      correct: false,
    },
    {
      answer: 'China',
      correct: true
    },
    {
      answer: 'USA',
      correct: false
    }
  ];
}
