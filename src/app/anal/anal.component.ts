import {Component} from "@angular/core";

@Component({
  selector: 'app-anal',
  template: `
<section>
  <div class="anal">

    <h2>Anal is bad</h2>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi asperiores doloremque fuga maiores modi
      repellendus totam voluptate voluptates voluptatibus.</p>

  </div>
</section>
  `,
  styles: [`
    .anal {
      width: 1440px;
      border: 1px solid green;
      margin: auto;
      padding: 0.5rem;
    }
    p {
      word-spacing: 3px;
    }
  `]
})

export class AnalComponent {

}
