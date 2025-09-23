import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  template: `
    <mat-card class="stat-card">
      <mat-card-content>
        <div class="stat-card__header">
          <div class="stat-card__icon" [class]="'stat-card__icon--' + variant">
            <mat-icon>{{ icon }}</mat-icon>
          </div>
          <div class="stat-card__delta" [ngClass]="{
            'stat-card__delta--positive': deltaType === 'positive',
            'stat-card__delta--negative': deltaType === 'negative',
            'stat-card__delta--neutral': deltaType === 'neutral'
          }" *ngIf="delta">
            <mat-icon>{{ deltaType === 'positive' ? 'trending_up' : deltaType === 'negative' ? 'trending_down' : 'trending_flat' }}</mat-icon>
            <span>{{ delta }}%</span>
          </div>
        </div>
        <div class="stat-card__content">
          <h3 class="stat-card__value">{{ value | number:format }}</h3>
          <p class="stat-card__title">{{ title }}</p>
          <p class="stat-card__subtitle" *ngIf="subtitle">{{ subtitle }}</p>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styleUrl: './stat-card.component.scss'
})
export class StatCardComponent {
  @Input() title: string = '';
  @Input() value: number = 0;
  @Input() format: string = '1.0-0';
  @Input() icon: string = 'trending_up';
  @Input() variant: 'primary' | 'success' | 'warning' | 'info' = 'primary';
  @Input() delta?: number;
  @Input() deltaType?: 'positive' | 'negative' | 'neutral';
  @Input() subtitle?: string;
}