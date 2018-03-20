import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses/courses.service';
import { LogService } from './log/log.service';
import { SiteComponent } from './site/site.component';
import { MsgComponent } from './msg/msg.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SiteComponent,
    MsgComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [CoursesService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
