import { Component , inject} from '@angular/core';
import { ReviewService } from '../../core/services/review/review-service';
import { QuestionQuizWithOptions } from '../../core/model/interfaces/QuestionQuiz.model';
import { PracticeService } from '../../core/services/practice/practice-service';
import { NgClass } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';


@Component({
  selector: 'app-practice',
  imports: [NgClass, TranslatePipe],
  templateUrl: './practice.html',
  styleUrl: './practice.css',
})
export class Practice {
questionsQuizWithOptions! : QuestionQuizWithOptions[];
  practiceService = inject(PracticeService);
  currentQuestion! : QuestionQuizWithOptions;
  currentIndexQuestion = 0;
  
  optionCorrect : boolean[] = [false, false, false];
  optionFalse : boolean[] = [false, false, false];
   

 ngOnInit() : void{
  this.questionsQuizWithOptions=this.practiceService.getQuestionsQuizWithOptions();  
  this.currentQuestion=this.questionsQuizWithOptions[0];
 }

 increment(){
  this.currentIndexQuestion++;
  this.currentQuestion=this.questionsQuizWithOptions[this.currentIndexQuestion];
  this.initialiserInterface();
 }

 decrement(){
  this.currentIndexQuestion--;
  this.currentQuestion=this.questionsQuizWithOptions[this.currentIndexQuestion];
  this.initialiserInterface();
 }

 choisirReponse(indexReponse : number){    
    this.optionCorrect[this.currentQuestion.correctAnswerIndex]=true;    
    if(indexReponse!==this.currentQuestion.correctAnswerIndex){   
      this.optionFalse[indexReponse]=true;  
    }
 }

 initialiserInterface(){
  this.optionCorrect=Array(3).fill(false);
  this.optionFalse=Array(3).fill(false);
 }
}
