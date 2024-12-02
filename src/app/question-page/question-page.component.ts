import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { QuizItem, Question } from '../layout';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-question-page',
  standalone: true,
  imports: [ CommonModule,],
  templateUrl: './question-page.component.html',
  styleUrl: './question-page.component.css'
})
export class QuestionPageComponent implements OnInit{
  @Input() questions: any[] = [];
  quizzes: QuizItem[] = [];
  currentQuestionIndex: number = 0;
  totalScores: number = 0;
  currentQuizIndex: number = 0;  
  title: string = ''; 
  selectedAnswer: string | null = null;
  currentQuizTitle: string = '';

  selectedQuiz: QuizItem | undefined ;;

  // Flag to determine when to show the correct answer
  showAnswer: boolean = false;

  constructor(private dataService: DataService) {
    this.dataService.getQuizzes().subscribe((quizzes: QuizItem[]) => {
      this.quizzes =  quizzes;
      
    })
  }
  ngOnInit() {
    // Subscribe to title changes
    this.dataService.subjectTitle$.subscribe(title => {
      this.currentQuizTitle = title; // Update the title whenever it changes
      console.log('Updated Title:', title);
      this.selectedQuiz = this.quizzes.find(quiz => quiz.title === this.currentQuizTitle);
      console.log('Selected Quiz:',this.selectedQuiz);
      
    });
  }

  

  // getSelectedQuiz() {
  //   return this.selectedQuiz = this.quizzes.find(quiz => quiz.title === this.currentQuizTitle);
  // }
  // get currentQuestion(): Question {
  //   return this.quizzes[this.currentQuizTitle].questions[this.currentQuestionIndex];
  // }
  // To move to the next question
  // nextQuestion(): void {
  //   if (this.selectedAnswer) {
  //     const subjectItem = document.querySelector('.subject-item') as HTMLElement;
  //     const icon = document.querySelector('.icon') as HTMLElement;
  //     if (this.selectedAnswer === this.currentQuestion.answer) {
  //       this.totalScores += 1;
  //       // alert(`Your total score is: ${this.totalScores}`);
  //       subjectItem.classList.add('correct');
        
        
  //     } else {
  //       subjectItem.classList.add('incorrect');

  //     }
  //   } else {
  //     alert('Please select an answer');
  //   }
    
    

  //   // Go to the next question, or end if it's the last one
  //   if (this.currentQuestionIndex < this.quizzes[this.currentQuizIndex].questions.length - 1) {
  //     this.currentQuestionIndex++;  // Go to the next question
  //     this.selectedAnswer = null;  // Reset selected answer
  //     this.showAnswer = false;  // Reset showAnswer flag
  //   } else {
  //     alert("You've completed the quiz!");
  //   }
  // }

  // Set the answer when the user selects an option
  // selectAnswer(option: string): void {
  //   this.selectedAnswer = option;
  //   this.showAnswer = true; // Show the correct answer after selection
  // }
}
