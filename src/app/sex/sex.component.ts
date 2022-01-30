import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sex',
  templateUrl: './sex.component.html',
  styleUrls: ['./sex.component.scss']
})
export class SexComponent implements OnInit {

  title = 'Initial'

  onInput(event: any) {
    this.title = event.target.value
  }

  constructor() { }

  ngOnInit(): void {
  }

}
