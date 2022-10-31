import { Movie } from './../../models/movie';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-banner',
  templateUrl: './movie-banner.component.html',
  styleUrls: ['./movie-banner.component.scss']
})
export class MovieBannerComponent implements OnInit {
  @Input() title: string = '';
  @Input() items: Movie[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
