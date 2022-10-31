import { Movie, MovieVideo, MovieImage, MovieCredits } from './../../models/movie';
import { Component, OnInit } from '@angular/core';
import { IMAGES_SIZES } from 'src/app/constants/image.sizes';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie | null = null;
  movieVideos: MovieVideo[] = [];
  movieImages: MovieImage[] = [];
  movieCredits: MovieCredits | null = null; 

  imageSize = IMAGES_SIZES;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({id}) => {
      this.getMovie(id);
      this.getMovieVideo(id);
      this.getMovieImages(id);
      this.getMovieCredits(id);
    });
  }

  getMovie(id: string) {
    this.moviesService.getMovieById(id).subscribe((movie) => (this.movie = movie));
  }

  getMovieVideo(id: string) {
    this.moviesService.getMovieVideo(id).subscribe((videos) => (this.movieVideos = videos));
  }

  getMovieImages(id: string) {
    this.moviesService.getMovieImages(id).subscribe((images) => (this.movieImages = images));
  }

  getMovieCredits(id: string) {
    this.moviesService.getMovieCredits(id).subscribe((credits) => {
      this.movieCredits = credits;
      this.movieCredits.cast = this.movieCredits.cast.filter((member) => member.profile_path != null);
    });
  }
}