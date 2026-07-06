import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';
import { profile } from '../../data/portfolio-data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  profile = profile;

  facts = [
    { label: 'Based in', value: profile.location },
    { label: 'Currently', value: 'Developer Intern, Deep Cognitive Solutions' },
    { label: 'Studied', value: 'BS Software Engineering, University of the Punjab' },
    { label: 'Also does', value: 'Graphic design on the side' }
  ];
}
