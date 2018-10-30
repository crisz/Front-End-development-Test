import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() question: string;
  @Input() answers: [{answer: string, correct: boolean}];
  answered = false;
  chosenAnswer: {answer: string, correct: boolean} = null;
  constructor() { }

  ngOnInit() {
  }

  chooseAnswer(answer) {
    if (this.chosenAnswer) { return; }
    this.answered = true;
    this.chosenAnswer = answer;
  }

}
