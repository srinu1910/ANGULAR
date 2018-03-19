import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses/courses.service';
import { LogService } from './log/log.service';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [CoursesService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
