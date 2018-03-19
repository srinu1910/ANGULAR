import { Injectable } from '@angular/core';
import {Icourses} from "./icourses";
import { LogService } from '../log/log.service';

@Injectable()
export class CoursesService{
  constructor(private logs:LogService) { }
  getCourses():Icourses{
    return {courses:["AngularJS",".NET", "PHP"],title:"sdfasdf"};
  }

}
