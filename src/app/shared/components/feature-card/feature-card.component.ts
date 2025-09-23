import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  template: `
    <mat-card class="feature-card">
      <mat-card-content>
        <div class="feature-card__icon">
          <mat-icon>{{ icon }}</mat-icon>
        </div>
        <h3 class="feature-card__title">{{ title }}</h3>
        <p class="feature-card__description">{{ description }}</p>
        <div class="feature-card__category" *ngIf="category">
          {{ category }}
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styleUrl: './feature-card.component.scss'
})
export class FeatureCardComponent {
  @Input() icon: string = 'star';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() category?: string;
}