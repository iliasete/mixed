import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/components/shared.module';

@Component({
  selector: 'app-page-c',
  standalone: true,
  imports: [CommonModule, SharedModule],
  template: `
    <p>
      page-c works!
    </p>

    <app-component1></app-component1>

    <app-component5></app-component5>

    <app-component6></app-component6>

    <app-component7></app-component7>

    <app-component8></app-component8>
  `,
  styles: [
  ]
})
export class PageCComponent {

}
