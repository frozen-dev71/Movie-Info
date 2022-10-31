import { MoviesComponent } from './pages/movies/movies.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GenresComponent } from './pages/genres/genres.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'movie/:id',
    component: MovieDetailComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'movies/genres/:genreId',
    component: MoviesComponent
  },
  {
    path: 'genres',
    component: GenresComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
