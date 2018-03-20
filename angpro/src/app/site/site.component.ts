import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})

export class SiteComponent implements OnInit {
  @Input() courses:any[];
  flag = true;
  website = {
    name : 'ConcretePage',
    url : 'http://www.concretepage.com',
    logo : 'https://fortunedotcom.files.wordpress.com/2015/09/screen-shot-2015-09-01-at-12-16-31-pm.png',
    description: 'Learn angular 2 property binding.'
  }

  constructor() { }

  ngOnInit() {
  }

}
