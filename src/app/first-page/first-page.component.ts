import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { QuizItem } from '../layout';
import { CommonModule } from '@angular/common';
import { QuestionPageComponent } from '../question-page/question-page.component';
@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [CommonModule, QuestionPageComponent],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.css'
})


export class FirstPageComponent implements OnInit {
  quizzes: QuizItem[] = [];
  showQuestion: boolean = false;

  constructor(private dataService: DataService) {
    this.dataService.getQuizzes().subscribe((quizzes: QuizItem[]) => {
      this.quizzes =  quizzes;
      console.log(this.quizzes);

    })
  }
  ngOnInit(): void {
  }

  
  goToQuestion() {
    this.showQuestion = true;
  }

  goToHome() {
    this.showQuestion = false;
  }
}
