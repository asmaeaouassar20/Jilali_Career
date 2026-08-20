import { Component, OnInit } from '@angular/core';
import { StoryService } from '../../core/services/stories/story-service';
import { SuccessStory } from '../../core/model/interfaces/SuccessStory.model';
import { Star } from "../../svg/star/star";

@Component({
  selector: 'app-success-stories',
  imports: [Star],
  templateUrl: './success-stories.html',
  styleUrl: './success-stories.css',
})
export class SuccessStories implements OnInit {

  constructor(private storyService:StoryService){}
  stories : SuccessStory[] = [];

  ngOnInit(): void {
    this.stories=this.storyService.getStories();
  }

}
