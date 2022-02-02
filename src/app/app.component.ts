import { Component } from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  arr = [1, 4, 8, 8]

  dogs = [
    {title: 'dog 1', Name: 'Popka', comments:[
        {owner: 'Sasha', age: 24},
        {owner: 'Nastya', age: 23}
      ]},
    {title: 'dog 2', Name: 'Piska', comments:[
        {owner: 'Egor', age: 24},
        {owner: 'Masha', age: 23}
      ]}
  ]
}
