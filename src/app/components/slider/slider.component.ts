import { Movie } from './../../models/movie';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { IMAGES_SIZES } from 'src/app/constants/image.sizes';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [trigger('slideFade', [state('void', style({opacity: 0})), transition('void <=> *', [animate('1s')])])]
})
export class SliderComponent implements OnInit {
@Input() movies: Movie[] = [];
@Input() isBanner = true;

currentSliderIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    if (!this.isBanner) {
      return;
    }

    setInterval(() => {
      this.currentSliderIndex = ++ this.currentSliderIndex % this.movies.length;
    }, 5000);
  }

  getImagePath(path: string) {
    return `${IMAGES_SIZES.large + path}`;
  }

}
