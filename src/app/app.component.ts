import {Component, OnInit} from '@angular/core';

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
export class AppComponent implements OnInit{
  headers: Header[] = [
    {title: 'Eaters of burgers', text: 'Burgers eaters are fat and ill people', id: 1},
    // {title: 'Eaters of sushi', text: 'Nya KawaII', id: 228}
  ]

  ngOnInit() {
    setTimeout( () => {
      console.log('Timeout')
      this.headers[0] = {
        title: 'Changed',
        text:'Be happy',
        id: 228
      }
    }, 5000)
  }

  updatePosts (post: Header) {
    this.headers.unshift(post)
    // console.log('Post', post)
  }

  deletePost(id: number) {
    console.log('Id to remove ', id)
    this.headers = this.headers.filter( p => p.id !== id)
  }
}
