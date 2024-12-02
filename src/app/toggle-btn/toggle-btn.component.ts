import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-toggle-btn',
  standalone: true,
  imports: [],
  templateUrl: './toggle-btn.component.html',
  styleUrl: './toggle-btn.component.css'
})
export class ToggleBtnComponent {
  constructor(private renderer: Renderer2) {}

ngOnInit() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    this.renderer.addClass(document.body, 'dark-bg');
  } else {
    this.renderer.removeClass(document.body, 'dark-bg');
  }
}

toggleTheme(event: any) {
  const isChecked = event.target.checked;
  const subjectItems = document.querySelectorAll('.subject-item') as NodeListOf<HTMLLIElement>;
  if (isChecked) {
    this.renderer.addClass(document.body, 'dark-bg');
    localStorage.setItem('theme', 'dark');
  } else {
    this.renderer.removeClass(document.body, 'dark-bg');
    localStorage.setItem('theme', 'light');
  }

  subjectItems.forEach((item) => {
    if (isChecked) {
      item.classList.add('dark-theme');
    } else {
      item.classList.remove('dark-theme');
    }
  });
}

}
