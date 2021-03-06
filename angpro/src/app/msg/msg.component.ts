import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.css']
})
export class MsgComponent implements OnInit {
  @Input() prefixMsg: string;
  @Input() siteName: string;
  constructor() { }

  ngOnInit() {
  }

}
