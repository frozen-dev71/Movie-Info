import { IMAGES_SIZES } from './../../constants/image.sizes';
import { Movie } from './../../models/movie';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-single',
  templateUrl: './movie-single.component.html',
  styleUrls: ['./movie-single.component.scss']
})
export class MovieSingleComponent implements OnInit {
  @Input() movieData: Movie | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  getImagePath() {
    return `${IMAGES_SIZES.large + this.movieData?.backdrop_path}`;
  }
}
