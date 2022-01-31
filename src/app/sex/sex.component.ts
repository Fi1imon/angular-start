import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sex',
  templateUrl: './sex.component.html',
  styleUrls: ['./sex.component.scss']
})
export class SexComponent implements OnInit {

  TurnOn = false

  buttTxt = 'Turn On'

  buttChange (event: any) {
    if (this.buttTxt === 'Turn On') {
      this.buttTxt = 'Turn Off'
    }
    else this.buttTxt = 'Turn On'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
