import {Component, Input, OnInit} from '@angular/core';
import {Header} from "../app.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  post!: Header;

  constructor() { }

  ngOnInit(): void {
  }

}
