import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/components/shared.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SharedModule],
  template: `
    <p>
      home works!
    </p>

    <app-component1></app-component1>
  `,
  styles: [
  ]
})
export class HomeComponent {

}
