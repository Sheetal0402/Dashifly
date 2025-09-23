import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-price-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <mat-card class="price-card" [class.price-card--popular]="popular">
      <div class="price-card__badge" *ngIf="popular">
        <span>Most Popular</span>
      </div>
      <mat-card-content>
        <div class="price-card__header">
          <h3 class="price-card__title">{{ name }}</h3>
          <p class="price-card__description">{{ description }}</p>
        </div>
        
        <div class="price-card__price">
          <span class="price-card__currency">$</span>
          <span class="price-card__amount">{{ price }}</span>
          <span class="price-card__period">/{{ period }}</span>
        </div>

        <ul class="price-card__features">
          <li *ngFor="let feature of features" class="price-card__feature">
            <mat-icon>check_circle</mat-icon>
            <span>{{ feature }}</span>
          </li>
        </ul>
      </mat-card-content>
      
      <mat-card-actions class="price-card__actions">
        <button mat-raised-button 
                [color]="popular ? 'primary' : 'accent'"
                class="price-card__button">
          {{ buttonText }}
        </button>
      </mat-card-actions>
    </mat-card>
  `,
  styleUrl: './price-card.component.scss'
})
export class PriceCardComponent {
  @Input() name: string = '';
  @Input() price: number = 0;
  @Input() period: string = 'month';
  @Input() description: string = '';
  @Input() features: string[] = [];
  @Input() popular: boolean = false;
  @Input() buttonText: string = 'Get Started';
}