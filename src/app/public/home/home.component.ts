import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { TestimonialComponent } from '../../shared/components/testimonial/testimonial.component';
import { MockDataService, Testimonial } from '../../shared/services/mock-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    TestimonialComponent
  ],
  template: `
    <div class="home">
      <!-- Hero Section -->
      <section class="hero">
        <div class="container">
          <div class="hero__content">
            <h1 class="hero__title">
              Transform Your Business with
              <span class="hero__highlight">Dashify</span>
            </h1>
            <p class="hero__subtitle">
              The most powerful dashboard platform for modern businesses. 
              Get insights, track performance, and make data-driven decisions with ease.
            </p>
            <div class="hero__actions">
              <button mat-raised-button color="primary" class="hero__cta">
                <mat-icon>rocket_launch</mat-icon>
                Start Free Trial
              </button>
              <button mat-stroked-button routerLink="/features" class="hero__secondary">
                <mat-icon>play_circle</mat-icon>
                See Features
              </button>
            </div>
            <p class="hero__note">
              <mat-icon>verified</mat-icon>
              14-day free trial • No credit card required • Cancel anytime
            </p>
          </div>
          <div class="hero__visual">
            <div class="hero__dashboard-preview">
              <!-- Placeholder for dashboard preview -->
              <div class="preview-card">
                <div class="preview-header">
                  <div class="preview-dot"></div>
                  <div class="preview-dot"></div>
                  <div class="preview-dot"></div>
                </div>
                <div class="preview-content">
                  <div class="preview-stat">
                    <div class="preview-stat__value">$94.2K</div>
                    <div class="preview-stat__label">Revenue</div>
                  </div>
                  <div class="preview-chart"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="stats">
        <div class="container">
          <div class="stats__grid">
            <div class="stats__item">
              <h3 class="stats__number">10K+</h3>
              <p class="stats__label">Active Users</p>
            </div>
            <div class="stats__item">
              <h3 class="stats__number">99.9%</h3>
              <p class="stats__label">Uptime</p>
            </div>
            <div class="stats__item">
              <h3 class="stats__number">24/7</h3>
              <p class="stats__label">Support</p>
            </div>
            <div class="stats__item">
              <h3 class="stats__number">150+</h3>
              <p class="stats__label">Integrations</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Preview -->
      <section class="features-preview">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Why Choose Dashify?</h2>
            <p class="section-subtitle">
              Everything you need to track, analyze, and grow your business in one powerful platform.
            </p>
          </div>
          <div class="features-grid">
            <div class="feature-item">
              <div class="feature-icon">
                <mat-icon>analytics</mat-icon>
              </div>
              <h3>Real-time Analytics</h3>
              <p>Get instant insights with live data visualization and custom reports.</p>
            </div>
            <div class="feature-item">
              <div class="feature-icon">
                <mat-icon>security</mat-icon>
              </div>
              <h3>Enterprise Security</h3>
              <p>Bank-level security with encryption and compliance standards.</p>
            </div>
            <div class="feature-item">
              <div class="feature-icon">
                <mat-icon>integration_instructions</mat-icon>
              </div>
              <h3>Easy Integrations</h3>
              <p>Connect with 150+ tools and services seamlessly.</p>
            </div>
          </div>
          <div class="features-preview__cta">
            <button mat-raised-button routerLink="/features" color="accent">
              View All Features
              <mat-icon>arrow_forward</mat-icon>
            </button>
          </div>
        </div>
      </section>

      <!-- Testimonials -->
      <section class="testimonials">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Trusted by Industry Leaders</h2>
            <p class="section-subtitle">
              See what our customers are saying about Dashify.
            </p>
          </div>
          <div class="testimonials-grid" *ngIf="testimonials$ | async as testimonials">
            <app-testimonial 
              *ngFor="let testimonial of testimonials"
              [name]="testimonial.name"
              [role]="testimonial.role"
              [company]="testimonial.company"
              [avatar]="testimonial.avatar"
              [quote]="testimonial.quote"
              [rating]="testimonial.rating">
            </app-testimonial>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta">
        <div class="container">
          <div class="cta__content">
            <h2 class="cta__title">Ready to Transform Your Business?</h2>
            <p class="cta__subtitle">
              Join thousands of companies already using Dashify to make better decisions.
            </p>
            <div class="cta__actions">
              <button mat-raised-button color="primary" class="cta__button">
                <mat-icon>rocket_launch</mat-icon>
                Start Free Trial
              </button>
              <button mat-stroked-button routerLink="/pricing" class="cta__secondary">
                View Pricing
              </button>
            </div>
            
            <!-- Placeholder Intercom integration -->
            <div class="cta__intercom">
              <button mat-icon-button class="intercom-button" title="Chat with us">
                <mat-icon>chat</mat-icon>
              </button>
              <!-- Note: Real Intercom integration would go here -->
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  testimonials$!: Observable<Testimonial[]>;

  constructor(private mockDataService: MockDataService) {}

  ngOnInit() {
    this.testimonials$ = this.mockDataService.getTestimonials();
  }
}