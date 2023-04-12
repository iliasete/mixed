import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/components/shared.module';

@Component({
  selector: 'app-page-a',
  standalone: true,
  imports: [CommonModule, SharedModule],
  template: `
    <p>
      page-a works!
    </p>

    <app-component1></app-component1>

    <app-component2></app-component2>
    
    <app-component3></app-component3>
  `,
  styles: [
  ]
})
export class PageAComponent {

}
