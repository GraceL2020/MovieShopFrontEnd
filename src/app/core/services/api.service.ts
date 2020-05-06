import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(protected http: HttpClient) { }

  //CRUD http methods
  getAll(path: string): Observable<any[]> {
    return this.http.get(`${environment.apiUrl}${path}`).pipe(
      map(resp => resp as any[])
    )
  }
  /*
  getOne(path: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}${path}`).pipe(
      map(resp=>resp as any)
    )
  }
  */
  getOne(path: string, id?: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}${path}${id}`).pipe(
      map(resp => resp as any)
    )
  }

  create(path: string, resource: Object = {}, options?): Observable<any> {
    return this.http.post(`${environment.apiUrl}${path}`, resource, options)
      .pipe(map(response => response));//, catchError(e => throwError(new Error('SOMETHING BAD HAPPENED')))
  }


}
