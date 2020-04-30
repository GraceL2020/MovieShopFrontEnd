import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { Cast } from 'src/app/shared/models/cast';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CastService {

  constructor(protected http: HttpClient, private apiService: ApiService) { }

  getCastsForMovie(movieId: number): Observable<Cast[]> {
    return this.apiService.getAll(`${'casts/movie/'}${movieId}`);
  }
}
