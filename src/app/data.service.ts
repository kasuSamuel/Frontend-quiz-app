import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { QuizItem } from './layout';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataFromJson = '../../assets/data.json';

  constructor(private http: HttpClient) { }

  getQuizzes(): Observable<QuizItem[]> {
    return this.http.get<QuizItem[]>(this.dataFromJson);
  }

  private subjectTitle = new BehaviorSubject<string>('');
  subjectTitle$ = this.subjectTitle.asObservable();

  changeTitle(quizTitle: string) {
    this.subjectTitle.next(quizTitle);
  }



  
}
