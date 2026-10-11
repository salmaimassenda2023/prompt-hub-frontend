import { Component } from '@angular/core'
import { NgOptimizedImage } from '@angular/common';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-navbar',
  imports: [NgOptimizedImage,ButtonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {}
