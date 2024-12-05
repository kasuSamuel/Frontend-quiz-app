import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { QuizItem, Question } from '../layout';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-question-page',
  standalone: true,
  imports: [ CommonModule,],
  templateUrl: './question-page.component.html',
  styleUrl: './question-page.component.css'
})
export class QuestionPageComponent implements OnInit{
  quizzes: QuizItem[] = [];
  

  constructor(private dataService: DataService) {
    // this.dataService.getQuizzes().subscribe((quizzes: QuizItem[]) => {
    //   this.quizzes =  quizzes;
    //   // console.log(this.quizzes);
    //   // console.log(this.quizzes[0].questions);
    // })

  }
  ngOnInit(): void {
    this.dataService.subjectTitle$.subscribe((title: string) => {
      console.log('hi',title);
    })
  }
}
