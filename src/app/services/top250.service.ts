import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Emergency} from "../models/emergency.model";
import {Film} from "../models/film.model";

@Injectable({
  providedIn: 'root'
})
export class Top250Service {

  url = 'https://imdb-api.com/en/API/Top250Movies/k_6rhrghcl';

  constructor(private http: HttpClient) { }

  getCards(): Observable<Film[]> {
    return this.http.get<Film[]>(this.url);
  }

}
