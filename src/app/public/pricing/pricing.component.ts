import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PriceCardComponent } from '../../shared/components/price-card/price-card.component';
import { MockDataService, PricingTier } from '../../shared/services/mock-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    PriceCardComponent
  ],
  template: `
    <div class="pricing">
      <!-- Hero Section -->
      <section class="pricing-hero">
        <div class="container">
          <div class="hero-content">
            <h1 class="hero-title">Simple, Transparent Pricing</h1>
            <p class="hero-subtitle">
              Choose the perfect plan for your business. No hidden fees, cancel anytime.
            </p>
            
            <!-- Billing Toggle -->
            <div class="billing-toggle">
              <span class="billing-label" [class.active]="!isAnnual">Monthly</span>
              <mat-slide-toggle 
                [(ngModel)]="isAnnual" 
                class="billing-switch"
                color="accent">
              </mat-slide-toggle>
              <span class="billing-label" [class.active]="isAnnual">
                Annual
                <span class="billing-discount">Save 20%</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Pricing Cards -->
      <section class="pricing-cards">
        <div class="container">
          <div class="pricing-grid" *ngIf="pricingTiers$ | async as tiers">
            <app-price-card
              *ngFor="let tier of tiers"
              [name]="tier.name"
              [price]="getPrice(tier.price)"
              [period]="getBillingPeriod()"
              [description]="tier.description"
              [features]="tier.features"
              [popular]="tier.popular || false"
              [buttonText]="tier.buttonText">
            </app-price-card>
          </div>
        </div>
      </section>

      <!-- Feature Comparison -->
      <section class="feature-comparison">
        <div class="container">
          <h2 class="comparison-title">Compare Plans</h2>
          <div class="comparison-table">
            <div class="comparison-row comparison-header">
              <div class="comparison-cell">Features</div>
              <div class="comparison-cell">Starter</div>
              <div class="comparison-cell popular">Professional</div>
              <div class="comparison-cell">Enterprise</div>
            </div>
            
            <div class="comparison-row">
              <div class="comparison-cell feature-name">Team Members</div>
              <div class="comparison-cell">Up to 5</div>
              <div class="comparison-cell">Up to 25</div>
              <div class="comparison-cell">Unlimited</div>
            </div>
            
            <div class="comparison-row">
              <div class="comparison-cell feature-name">Analytics</div>
              <div class="comparison-cell">Basic</div>
              <div class="comparison-cell">Advanced</div>
              <div class="comparison-cell">Enterprise</div>
            </div>
            
            <div class="comparison-row">
              <div class="comparison-cell feature-name">Integrations</div>
              <div class="comparison-cell">10</div>
              <div class="comparison-cell">Unlimited</div>
              <div class="comparison-cell">All + Custom</div>
            </div>
            
            <div class="comparison-row">
              <div class="comparison-cell feature-name">Support</div>
              <div class="comparison-cell">Email</div>
              <div class="comparison-cell">Priority</div>
              <div class="comparison-cell">24/7 Phone</div>
            </div>
            
            <div class="comparison-row">
              <div class="comparison-cell feature-name">Storage</div>
              <div class="comparison-cell">5GB</div>
              <div class="comparison-cell">100GB</div>
              <div class="comparison-cell">Unlimited</div>
            </div>
            
            <div class="comparison-row">
              <div class="comparison-cell feature-name">API Access</div>
              <div class="comparison-cell"><mat-icon class="no">close</mat-icon></div>
              <div class="comparison-cell"><mat-icon class="yes">check</mat-icon></div>
              <div class="comparison-cell"><mat-icon class="yes">check</mat-icon></div>
            </div>
            
            <div class="comparison-row">
              <div class="comparison-cell feature-name">White-label</div>
              <div class="comparison-cell"><mat-icon class="no">close</mat-icon></div>
              <div class="comparison-cell"><mat-icon class="no">close</mat-icon></div>
              <div class="comparison-cell"><mat-icon class="yes">check</mat-icon></div>
            </div>
            
            <div class="comparison-row">
              <div class="comparison-cell feature-name">SSO</div>
              <div class="comparison-cell"><mat-icon class="no">close</mat-icon></div>
              <div class="comparison-cell"><mat-icon class="no">close</mat-icon></div>
              <div class="comparison-cell"><mat-icon class="yes">check</mat-icon></div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="pricing-faq">
        <div class="container">
          <h2 class="faq-title">Frequently Asked Questions</h2>
          <div class="faq-grid">
            <div class="faq-item">
              <h3>Can I change my plan anytime?</h3>
              <p>Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated.</p>
            </div>
            <div class="faq-item">
              <h3>Is there a free trial?</h3>
              <p>Yes! All plans come with a 14-day free trial. No credit card required to get started.</p>
            </div>
            <div class="faq-item">
              <h3>What payment methods do you accept?</h3>
              <p>We accept all major credit cards, PayPal, and can arrange invoicing for Enterprise customers.</p>
            </div>
            <div class="faq-item">
              <h3>Do you offer discounts?</h3>
              <p>Yes! Annual billing saves you 20%. We also offer discounts for non-profits and educational institutions.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Stripe Integration Placeholder -->
      <section class="payment-integration">
        <div class="container">
          <div class="stripe-placeholder">
            <h3>Secure Payment Processing</h3>
            <p>Powered by Stripe - Bank-level security for all transactions</p>
            <div class="stripe-badges">
              <span class="badge">SSL Encrypted</span>
              <span class="badge">PCI Compliant</span>
              <span class="badge">256-bit Security</span>
            </div>
            <!-- Note: Real Stripe integration would be implemented here -->
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="pricing-cta">
        <div class="container">
          <div class="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Join thousands of businesses already using Dashify.</p>
            <button mat-raised-button color="primary" class="cta-button">
              <mat-icon>rocket_launch</mat-icon>
              Start Free Trial
            </button>
          </div>
        </div>
      </section>
    </div>
  `,
  styleUrl: './pricing.component.scss'
})
export class PricingComponent implements OnInit {
  pricingTiers$!: Observable<PricingTier[]>;
  isAnnual = false;

  constructor(private mockDataService: MockDataService) {}

  ngOnInit() {
    this.pricingTiers$ = this.mockDataService.getPricingTiers();
  }

  getPrice(monthlyPrice: number): number {
    return this.isAnnual ? Math.round(monthlyPrice * 12 * 0.8) : monthlyPrice;
  }

  getBillingPeriod(): string {
    return this.isAnnual ? 'year' : 'month';
  }
}