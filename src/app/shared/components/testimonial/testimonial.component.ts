import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    <mat-card class="testimonial">
      <mat-card-content>
        <div class="testimonial__quote">
          <span class="testimonial__quote-mark">"</span>
          <p>{{ quote }}</p>
        </div>
        <div class="testimonial__author">
          <img [src]="avatar" [alt]="name" class="testimonial__avatar">
          <div class="testimonial__details">
            <h4 class="testimonial__name">{{ name }}</h4>
            <p class="testimonial__role">{{ role }}, {{ company }}</p>
          </div>
        </div>
        <div class="testimonial__rating" *ngIf="rating">
          <span class="testimonial__star" *ngFor="let star of getStars()" [class.filled]="star">★</span>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent {
  @Input() name: string = '';
  @Input() role: string = '';
  @Input() company: string = '';
  @Input() avatar: string = '';
  @Input() quote: string = '';
  @Input() rating: number = 5;

  getStars(): boolean[] {
    return Array(5).fill(false).map((_, index) => index < this.rating);
  }
}