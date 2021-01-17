import { COURSES } from './data/courses';
import { Intercurso } from './intercurso';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getCourses(): Intercurso[] {
    return COURSES;
  }
}
