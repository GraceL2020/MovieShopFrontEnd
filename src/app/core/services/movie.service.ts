import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Movie } from 'src/app/shared/models/movie';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(protected http: HttpClient, private apiService: ApiService) { }

  getHighestGrossingMovies(path: string): Observable<Movie[]> {
    return this.http.get(`${environment.apiUrl}${path}`).pipe(
      map(resp => resp as any[])
    );
  }
  /*
  getMovieById(id:number): Observable<Movie>{
    return this.apiService.getOne('movies/'+id);
  }
  */
  getMovieById(id: number): Observable<Movie> {
    return this.apiService.getOne('movies/', id);
  }
  getMoviesByGenreId(genreId: number): Observable<Movie[]> {
    return this.apiService.getAll(`${'movies/genre/'}${genreId}`);
  }

}
