import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material imports
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatProgressBarModule,
    MatTableModule,
    MatDividerModule
  ],
  template: `
    <div class="billing-page">
      <div class="page-header">
        <h1 class="page-title">Billing & Subscription</h1>
        <p class="page-subtitle">Manage your subscription and billing information</p>
      </div>

      <div class="billing-grid">
        <!-- Current Plan -->
        <mat-card class="plan-card">
          <mat-card-header>
            <mat-card-title>
              <mat-icon>workspace_premium</mat-icon>
              Current Plan
            </mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="plan-info">
              <div class="plan-name">Professional</div>
              <div class="plan-price">$29/month</div>
              <mat-chip-set>
                <mat-chip color="primary" selected>Active</mat-chip>
              </mat-chip-set>
            </div>
            <div class="plan-features">
              <div class="feature-item">
                <mat-icon color="primary">check</mat-icon>
                <span>Unlimited projects</span>
              </div>
              <div class="feature-item">
                <mat-icon color="primary">check</mat-icon>
                <span>Advanced analytics</span>
              </div>
              <div class="feature-item">
                <mat-icon color="primary">check</mat-icon>
                <span>Priority support</span>
              </div>
            </div>
          </mat-card-content>
          <mat-card-actions>
            <button mat-stroked-button>Change Plan</button>
            <button mat-button color="warn">Cancel Subscription</button>
          </mat-card-actions>
        </mat-card>

        <!-- Usage Stats -->
        <mat-card class="usage-card">
          <mat-card-header>
            <mat-card-title>
              <mat-icon>analytics</mat-icon>
              Usage This Month
            </mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="usage-item">
              <div class="usage-label">API Calls</div>
              <div class="usage-bar">
                <mat-progress-bar mode="determinate" value="75" color="primary"></mat-progress-bar>
                <span class="usage-text">7,500 / 10,000</span>
              </div>
            </div>
            <div class="usage-item">
              <div class="usage-label">Storage</div>
              <div class="usage-bar">
                <mat-progress-bar mode="determinate" value="45" color="accent"></mat-progress-bar>
                <span class="usage-text">4.5 GB / 10 GB</span>
              </div>
            </div>
            <div class="usage-item">
              <div class="usage-label">Team Members</div>
              <div class="usage-bar">
                <mat-progress-bar mode="determinate" value="60" color="warn"></mat-progress-bar>
                <span class="usage-text">6 / 10</span>
              </div>
            </div>
          </mat-card-content>
        </mat-card>

        <!-- Payment Method -->
        <mat-card class="payment-card">
          <mat-card-header>
            <mat-card-title>
              <mat-icon>credit_card</mat-icon>
              Payment Method
            </mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="payment-method">
              <div class="card-info">
                <mat-icon>credit_card</mat-icon>
                <div class="card-details">
                  <div class="card-number">•••• •••• •••• 4242</div>
                  <div class="card-expiry">Expires 12/25</div>
                </div>
              </div>
              <mat-chip-set>
                <mat-chip color="primary" selected>Default</mat-chip>
              </mat-chip-set>
            </div>
          </mat-card-content>
          <mat-card-actions>
            <button mat-stroked-button>Update Payment Method</button>
            <button mat-button>Add Payment Method</button>
          </mat-card-actions>
        </mat-card>

        <!-- Billing History -->
        <mat-card class="history-card">
          <mat-card-header>
            <mat-card-title>
              <mat-icon>receipt</mat-icon>
              Billing History
            </mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="invoice-list">
              <div class="invoice-item" *ngFor="let invoice of invoices">
                <div class="invoice-info">
                  <div class="invoice-date">{{ invoice.date }}</div>
                  <div class="invoice-description">{{ invoice.description }}</div>
                </div>
                <div class="invoice-amount">\${{ invoice.amount }}</div>
                <div class="invoice-actions">
                  <button mat-icon-button>
                    <mat-icon>download</mat-icon>
                  </button>
                </div>
              </div>
            </div>
          </mat-card-content>
        </mat-card>

        <!-- Stripe Integration (Placeholder) -->
        <mat-card class="stripe-card">
          <mat-card-header>
            <mat-card-title>
              <mat-icon>payment</mat-icon>
              Stripe Integration
            </mat-card-title>
            <mat-card-subtitle>Placeholder for Stripe components</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <div class="stripe-placeholder">
              <div class="stripe-logo">
                <mat-icon>credit_card</mat-icon>
                <span>Stripe</span>
              </div>
              <p>This is a placeholder for Stripe payment components. In a real application, this would integrate with Stripe Elements for secure payment processing.</p>
            </div>
          </mat-card-content>
          <mat-card-actions>
            <button mat-raised-button color="primary" disabled>
              <mat-icon>lock</mat-icon>
              Secure Payment with Stripe
            </button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styleUrl: './billing.component.scss'
})
export class BillingComponent {
  invoices = [
    { date: 'Dec 1, 2024', description: 'Professional Plan', amount: 29.00 },
    { date: 'Nov 1, 2024', description: 'Professional Plan', amount: 29.00 },
    { date: 'Oct 1, 2024', description: 'Professional Plan', amount: 29.00 },
    { date: 'Sep 1, 2024', description: 'Starter Plan', amount: 19.00 }
  ];
}