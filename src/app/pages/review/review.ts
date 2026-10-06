import { Component, inject, OnInit } from '@angular/core';
import { QuestionQuiz } from '../../core/model/interfaces/QuestionQuiz.model';
import { ReviewService } from '../../core/services/review/review-service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-review',
  imports: [TranslatePipe],
  templateUrl: './review.html',
  styleUrl: './review.css',
})
export class Review implements OnInit {

  questionsQuiz! : QuestionQuiz[];
  reviewService = inject(ReviewService);
  currentQuestion! : QuestionQuiz;
  currentIndexQuestion = 0;

 ngOnInit() : void{
  this.questionsQuiz=this.reviewService.getQuestionsQuiz();  
  this.currentQuestion=this.questionsQuiz[0];
 }

 increment(){
  this.currentIndexQuestion++;
  this.currentQuestion=this.questionsQuiz[this.currentIndexQuestion];
 }

 decrement(){
  this.currentIndexQuestion--;
  this.currentQuestion=this.questionsQuiz[this.currentIndexQuestion];
 }

}
