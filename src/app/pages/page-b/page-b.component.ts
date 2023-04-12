import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/components/shared.module';

@Component({
  selector: 'app-page-b',
  standalone: true,
  imports: [CommonModule, SharedModule],
  template: `
    <p>
      page-b works!
    </p>

    <app-component1></app-component1>

    <app-component2></app-component2>

    <app-component4></app-component4>

    <app-component5></app-component5>
  `,
  styles: [
  ]
})
export class PageBComponent {

}
