import { Component } from '@angular/core';
import { ToggleBtnComponent } from './toggle-btn/toggle-btn.component';
import { FirstPageComponent } from "./first-page/first-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ToggleBtnComponent, FirstPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
