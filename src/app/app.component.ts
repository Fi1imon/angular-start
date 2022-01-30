import { Component } from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  title = 'Non Static title'
  number = 42
  arr = [1,2,3]
  obj = {a: 1, b: {c: 2}}

  inputPisanina = ''


  onClick () {
    console.log('Shake your butt')
  }

  // img = 'https://downloader.disk.yandex.ru/preview/7ae76fc5a20e77760b9317a1d57464644a13907a3f1de13885f3fe68a0af21f5/61f6f5f4/gSm03OoaJLNQMsARHjwXoXLwQ8TVSMvQe53ywA9PN2zRgTuAuh1jWnq0qx40_6zq8W1A_lJzb-AsHb1zUPKEMw%3D%3D?uid=0&filename=igor.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'

  constructor() {
    // setTimeout(() => {
    //   this.img = 'https://downloader.disk.yandex.ru/preview/3120b89e09c9d97a358808d020bc0a96411d245332de58cdf9f08035a81590a9/61f6f644/AgY8M-1rWv0s9b2bZmOVMXLwQ8TVSMvQe53ywA9PN2xnLvHmaSOq6T1lLaXPZ7Lpp6TRiuanNGVO4EUdeYuYHw%3D%3D?uid=0&filename=sasha.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'
    // }, 3000)
  }
}
