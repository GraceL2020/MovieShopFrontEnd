import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateMovieComponent } from './admin/create-movie/create-movie.component';
import { HomeComponent } from './home/home.component';
import { GenresComponent } from './genres/genres.component';
import { MovieCardListComponent } from './movies/movie-card-list/movie-card-list.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { CastCardListComponent } from './casts/cast-card-list/cast-card-list.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies/genre/:id', component: MovieCardListComponent },
  { path: 'casts/movie/:id', component: CastCardListComponent },
  { path: 'admin/createmovie', component: CreateMovieComponent },
  { path: 'movies/:id', component: MovieDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
