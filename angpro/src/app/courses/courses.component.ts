import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  template: `
    <h2>
    {{title}}
    </h2>
    <ul>
      <li *ngFor="let Course of courses">{{Course}}</li>
    </ul>
  `,
  styles: []
})
export class CoursesComponent implements OnInit {
    title="Angular Courses"
    courses;
  constructor(public ourCourse:CoursesService) {
    this.courses = ourCourse.getCourses().courses;
    this.title = ourCourse.getCourses().title;
  }

  ngOnInit() {
    
  }

}
