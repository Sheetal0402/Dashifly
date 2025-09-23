import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { FeatureCardComponent } from '../../shared/components/feature-card/feature-card.component';
import { MockDataService, Feature } from '../../shared/services/mock-data.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatTabsModule,
    FeatureCardComponent
  ],
  template: `
    <div class="features">
      <!-- Hero Section -->
      <section class="features-hero">
        <div class="container">
          <div class="hero-content">
            <h1 class="hero-title">Powerful Features for Modern Business</h1>
            <p class="hero-subtitle">
              Everything you need to track, analyze, and optimize your business performance in one comprehensive platform.
            </p>
            <button mat-raised-button color="primary" class="hero-cta">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      <!-- Features by Category -->
      <section class="features-content">
        <div class="container">
          <mat-tab-group class="features-tabs" animationDuration="300ms">
            <mat-tab label="All Features">
              <div class="features-grid" *ngIf="allFeatures$ | async as features">
                <app-feature-card
                  *ngFor="let feature of features"
                  [icon]="feature.icon"
                  [title]="feature.title"
                  [description]="feature.description"
                  [category]="feature.category">
                </app-feature-card>
              </div>
            </mat-tab>
            
            <mat-tab label="Analytics">
              <div class="features-grid" *ngIf="analyticsFeatures$ | async as features">
                <app-feature-card
                  *ngFor="let feature of features"
                  [icon]="feature.icon"
                  [title]="feature.title"
                  [description]="feature.description"
                  [category]="feature.category">
                </app-feature-card>
              </div>
            </mat-tab>
            
            <mat-tab label="Security">
              <div class="features-grid" *ngIf="securityFeatures$ | async as features">
                <app-feature-card
                  *ngFor="let feature of features"
                  [icon]="feature.icon"
                  [title]="feature.title"
                  [description]="feature.description"
                  [category]="feature.category">
                </app-feature-card>
              </div>
            </mat-tab>
            
            <mat-tab label="Integrations">
              <div class="features-grid" *ngIf="integrationFeatures$ | async as features">
                <app-feature-card
                  *ngFor="let feature of features"
                  [icon]="feature.icon"
                  [title]="feature.title"
                  [description]="feature.description"
                  [category]="feature.category">
                </app-feature-card>
              </div>
            </mat-tab>
          </mat-tab-group>
        </div>
      </section>

      <!-- Additional Features Section -->
      <section class="additional-features">
        <div class="container">
          <h2 class="section-title">More Features You'll Love</h2>
          <div class="additional-grid">
            <div class="additional-item">
              <h3>Custom Dashboards</h3>
              <p>Create personalized dashboards with drag-and-drop widgets tailored to your specific needs.</p>
            </div>
            <div class="additional-item">
              <h3>Automated Reports</h3>
              <p>Schedule and automate report generation and delivery to stakeholders via email or Slack.</p>
            </div>
            <div class="additional-item">
              <h3>Real-time Alerts</h3>
              <p>Set up intelligent alerts based on custom thresholds and get notified when metrics change.</p>
            </div>
            <div class="additional-item">
              <h3>Data Export</h3>
              <p>Export your data in multiple formats including CSV, PDF, and Excel for further analysis.</p>
            </div>
            <div class="additional-item">
              <h3>Team Collaboration</h3>
              <p>Share insights, add comments, and collaborate with your team directly within the platform.</p>
            </div>
            <div class="additional-item">
              <h3>White-label Options</h3>
              <p>Customize the platform with your brand colors, logo, and domain for enterprise clients.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="features-cta">
        <div class="container">
          <div class="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Join thousands of businesses already using Dashify to make better decisions.</p>
            <div class="cta-actions">
              <button mat-raised-button color="primary">Start Free Trial</button>
              <button mat-stroked-button>Schedule Demo</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styleUrl: './features.component.scss'
})
export class FeaturesComponent implements OnInit {
  allFeatures$!: Observable<Feature[]>;
  analyticsFeatures$!: Observable<Feature[]>;
  securityFeatures$!: Observable<Feature[]>;
  integrationFeatures$!: Observable<Feature[]>;

  constructor(private mockDataService: MockDataService) {}

  ngOnInit() {
    this.allFeatures$ = this.mockDataService.getFeatures();
    
    this.analyticsFeatures$ = this.allFeatures$.pipe(
      map(features => features.filter(f => f.category === 'analytics'))
    );
    
    this.securityFeatures$ = this.allFeatures$.pipe(
      map(features => features.filter(f => f.category === 'security'))
    );
    
    this.integrationFeatures$ = this.allFeatures$.pipe(
      map(features => features.filter(f => f.category === 'integrations'))
    );
  }
}