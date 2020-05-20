import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateMovieComponent } from './admin/create-movie/create-movie.component';
import { HomeComponent } from './home/home.component';
import { GenresComponent } from './genres/genres.component';
import { MovieCardListComponent } from './movies/movie-card-list/movie-card-list.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { CastCardListComponent } from './casts/cast-card-list/cast-card-list.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PurchasesComponent } from './account/purchases/purchases.component';
import { FavoritesComponent } from './account/favorites/favorites.component';
import { ProfileComponent } from './account/profile/profile.component';
import { AuthGuardService } from './core/guards/auth-guard.service';
import { AdminGuardService } from './core/guards/admin-guard.service';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies/genre/:id', component: MovieCardListComponent },
  { path: 'casts/movie/:id', component: CastCardListComponent },
  { path: 'admin/createmovie', component: CreateMovieComponent, canActivate:[AdminGuardService] },
  { path: 'movies/:id', component: MovieDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'account/purchases', component: PurchasesComponent,canActivate:[AuthGuardService] },
  { path: 'account/favorites', component: FavoritesComponent,canActivate:[AuthGuardService] },
  { path: 'account/profile', component: ProfileComponent,canActivate:[AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
