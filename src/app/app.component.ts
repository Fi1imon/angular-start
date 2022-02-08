import { Component } from '@angular/core';

export interface Header {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  headers: Header[] = [
    {title: 'Eaters of burgers', text: 'Burgers eaters are fat and ill people'},
    {title: 'Eaters of sushi', text: 'Nya KawaII', id: 228}
  ]
}
