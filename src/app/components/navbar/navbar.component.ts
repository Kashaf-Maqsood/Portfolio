import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { navLinks, profile } from '../../data/portfolio-data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  links = navLinks;
  initials = 'KM';
  name = profile.name;
  scrolled = false;
  menuOpen = false;

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 12;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
