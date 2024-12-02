export interface Question {
    question: string;
    options: string[];  
    answer: string;     
  }
  
  export interface QuizItem {
    title: string;
    icon: string;
    iconBg: string;
    questions: Question[];  
  }
  