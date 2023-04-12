import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-a',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      page-a works!
    </p>
  `,
  styles: [
  ]
})
export class PageAComponent {

}
