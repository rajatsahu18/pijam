import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class CoursesDataService {
  url = 'https://json-mock-server-rajatsahu18.vercel.app/lms'
  constructor(private http:HttpClient) {}
  courses()
  {
    return this.http.get(this.url)
  }
}

