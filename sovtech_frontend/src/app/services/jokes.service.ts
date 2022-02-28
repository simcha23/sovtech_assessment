import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  // baseUrl = "localhost:8080/sovtech/";

  constructor(private http: HttpClient) { }

  // getCategories() {
  //   return this.http.get(this.baseUrl + 'categories');
  // }

  getCategories() {
    return this.http.get("https://api.chucknorris.io/jokes/categories");
  }
  // getJoke(category: string) {
  //   return this.http.get(this.baseUrl + 'jokes/' + category);
  // }
  
  getJoke(category: string) {
    return this.http.get("https://api.chucknorris.io/jokes/random?category=" + category);
  }
}
