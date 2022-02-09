import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Header} from "../app.component";

@Component({
  selector: 'app-header-form',
  templateUrl: './header-form.component.html',
  styleUrls: ['./header-form.component.scss']
})
export class HeaderFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<Header> = new EventEmitter<Header>()

  title = ''
  text = ''
  constructor() { }

  ngOnInit(): void {
  }

  onAddPost() {
    if (this.title.trim() && this.text.trim()) {
      const post: Header = {
        title: this.title,
        text: this.text
      }

      this.onAdd.emit(post)

      this.title = this.text = ''
    }

  }

}
