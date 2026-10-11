import { Component, signal } from '@angular/core'
import { NgOptimizedImage } from '@angular/common';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-navbar',
  imports: [NgOptimizedImage,ButtonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  isDark = signal(false);

  toggleDarkMode() {
    this.isDark.update(value => !value );
    document.documentElement.classList.toggle('my-app-dark',this.isDark());
}


}
