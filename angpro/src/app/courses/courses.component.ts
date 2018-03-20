import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  template: `
    <h2>
      {{title}}
    </h2>
    <h2 [textContent] = "title">
    {{title}}
    </h2>
    <ul>
      <li *ngFor="let Course of courses">{{Course}}</li>
    </ul>
    <table>
      <tr>
        <td [attr.colspan] = "colspan"></td>
      </tr>
    </table>
    <app-site [courses] = "courses"></app-site>

  `,
  styles: []
})
export class CoursesComponent implements OnInit {
    title="Angular Courses"
    courses;
    colspan = 2;
  constructor(public ourCourse:CoursesService) {
    this.courses = ourCourse.getCourses().courses;
    this.title = ourCourse.getCourses().title;
  }

  ngOnInit() {
    
  }

}
