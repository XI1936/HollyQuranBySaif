import { Constants } from './constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient ) { }

get(requestUrl){
  const URL=Constants.BASE_API_URL+requestUrl;
  return this.http.get(URL);
}
}
