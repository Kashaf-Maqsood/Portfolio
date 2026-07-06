import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { profile, skillGroups } from '../../data/portfolio-data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  profile = profile;
  stack = skillGroups;
}
