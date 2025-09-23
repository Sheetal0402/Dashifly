import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MockDataService } from '../../shared/services/mock-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule
  ],
  template: `
    <div class="faq">
      <!-- Hero Section -->
      <section class="faq-hero">
        <div class="container">
          <div class="hero-content">
            <h1 class="hero-title">Frequently Asked Questions</h1>
            <p class="hero-subtitle">
              Find answers to common questions about Dashify. Can't find what you're looking for?
            </p>
            <button mat-raised-button color="primary" class="hero-cta">
              <mat-icon>support_agent</mat-icon>
              Contact Support
            </button>
          </div>
        </div>
      </section>

      <!-- FAQ Content -->
      <section class="faq-content">
        <div class="container">
          <div class="faq-categories">
            <!-- Getting Started -->
            <div class="category-section">
              <h2 class="category-title">Getting Started</h2>
              <mat-accordion class="faq-accordion">
                <mat-expansion-panel *ngFor="let faq of getStartedFaqs">
                  <mat-expansion-panel-header>
                    <mat-panel-title>{{ faq.question }}</mat-panel-title>
                  </mat-expansion-panel-header>
                  <p>{{ faq.answer }}</p>
                </mat-expansion-panel>
              </mat-accordion>
            </div>

            <!-- Pricing & Billing -->
            <div class="category-section">
              <h2 class="category-title">Pricing & Billing</h2>
              <mat-accordion class="faq-accordion">
                <mat-expansion-panel *ngFor="let faq of pricingFaqs">
                  <mat-expansion-panel-header>
                    <mat-panel-title>{{ faq.question }}</mat-panel-title>
                  </mat-expansion-panel-header>
                  <p>{{ faq.answer }}</p>
                </mat-expansion-panel>
              </mat-accordion>
            </div>

            <!-- Features & Integrations -->
            <div class="category-section">
              <h2 class="category-title">Features & Integrations</h2>
              <mat-accordion class="faq-accordion">
                <mat-expansion-panel *ngFor="let faq of featuresFaqs">
                  <mat-expansion-panel-header>
                    <mat-panel-title>{{ faq.question }}</mat-panel-title>
                  </mat-expansion-panel-header>
                  <p>{{ faq.answer }}</p>
                </mat-expansion-panel>
              </mat-accordion>
            </div>

            <!-- Security & Privacy -->
            <div class="category-section">
              <h2 class="category-title">Security & Privacy</h2>
              <mat-accordion class="faq-accordion">
                <mat-expansion-panel *ngFor="let faq of securityFaqs">
                  <mat-expansion-panel-header>
                    <mat-panel-title>{{ faq.question }}</mat-panel-title>
                  </mat-expansion-panel-header>
                  <p>{{ faq.answer }}</p>
                </mat-expansion-panel>
              </mat-accordion>
            </div>

            <!-- General FAQs from API -->
            <div class="category-section" *ngIf="faqs$ | async as faqs">
              <h2 class="category-title">General Questions</h2>
              <mat-accordion class="faq-accordion">
                <mat-expansion-panel *ngFor="let faq of faqs">
                  <mat-expansion-panel-header>
                    <mat-panel-title>{{ faq.question }}</mat-panel-title>
                  </mat-expansion-panel-header>
                  <p>{{ faq.answer }}</p>
                </mat-expansion-panel>
              </mat-accordion>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="faq-contact">
        <div class="container">
          <div class="contact-content">
            <h2>Still Have Questions?</h2>
            <p>Our support team is here to help you get the most out of Dashify.</p>
            <div class="contact-options">
              <div class="contact-option">
                <mat-icon>email</mat-icon>
                <h3>Email Support</h3>
                <p>Get help via email within 24 hours</p>
                <button mat-stroked-button>Send Email</button>
              </div>
              <div class="contact-option">
                <mat-icon>chat</mat-icon>
                <h3>Live Chat</h3>
                <p>Chat with our team in real-time</p>
                <button mat-stroked-button>Start Chat</button>
              </div>
              <div class="contact-option">
                <mat-icon>video_call</mat-icon>
                <h3>Schedule Demo</h3>
                <p>Get a personalized product demo</p>
                <button mat-stroked-button>Book Demo</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Search Help -->
      <section class="help-search">
        <div class="container">
          <div class="search-content">
            <h2>Search Our Help Center</h2>
            <p>Explore our comprehensive documentation and tutorials.</p>
            <div class="search-box">
              <mat-icon>search</mat-icon>
              <input type="text" placeholder="Search for help articles, tutorials, guides..." class="search-input">
              <button mat-raised-button color="primary">Search</button>
            </div>
            <div class="popular-topics">
              <h3>Popular Topics</h3>
              <div class="topic-tags">
                <span class="topic-tag">Dashboard Setup</span>
                <span class="topic-tag">API Integration</span>
                <span class="topic-tag">Data Import</span>
                <span class="topic-tag">Team Management</span>
                <span class="topic-tag">Custom Reports</span>
                <span class="topic-tag">Mobile App</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styleUrl: './faq.component.scss'
})
export class FaqComponent implements OnInit {
  faqs$!: Observable<Array<{question: string, answer: string}>>;

  getStartedFaqs = [
    {
      question: 'How do I create my first dashboard?',
      answer: 'After signing up, you\'ll be guided through our onboarding wizard which helps you create your first dashboard. You can also use our pre-built templates to get started quickly.'
    },
    {
      question: 'What data sources can I connect?',
      answer: 'Dashify supports over 150+ integrations including Google Analytics, Salesforce, HubSpot, Slack, and many more. You can also import data via CSV or use our REST API.'
    },
    {
      question: 'How long does setup take?',
      answer: 'Most users have their first dashboard up and running within 15 minutes. Our onboarding process is designed to be quick and intuitive.'
    }
  ];

  pricingFaqs = [
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time. There are no cancellation fees or long-term contracts. Your account will remain active until the end of your current billing period.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for all paid plans. If you\'re not satisfied with Dashify, contact us within 30 days for a full refund.'
    },
    {
      question: 'What happens if I exceed my plan limits?',
      answer: 'We\'ll notify you when you\'re approaching your plan limits. You can upgrade your plan at any time, or we\'ll help you optimize your usage to stay within your current plan.'
    }
  ];

  featuresFaqs = [
    {
      question: 'Can I customize my dashboards?',
      answer: 'Absolutely! Dashify offers extensive customization options including custom widgets, color schemes, layouts, and branding options for Enterprise customers.'
    },
    {
      question: 'How real-time is the data?',
      answer: 'Data updates in real-time or near real-time depending on the source. Most integrations update within 1-5 minutes, while some may have longer intervals based on API limitations.'
    },
    {
      question: 'Can I share dashboards with my team?',
      answer: 'Yes! You can share dashboards with team members, set different permission levels, and even create public dashboards with custom URLs.'
    }
  ];

  securityFaqs = [
    {
      question: 'How secure is my data?',
      answer: 'We use bank-level security with end-to-end encryption, SOC 2 Type II compliance, and regular security audits. Your data is stored in secure, geographically distributed data centers.'
    },
    {
      question: 'Do you support SSO?',
      answer: 'Yes, Enterprise plans include Single Sign-On (SSO) support with SAML 2.0, including integrations with Active Directory, Okta, and other identity providers.'
    },
    {
      question: 'Where is my data stored?',
      answer: 'Data is stored in secure cloud infrastructure with multiple backup locations. Enterprise customers can choose their preferred data region for compliance requirements.'
    }
  ];

  constructor(private mockDataService: MockDataService) {}

  ngOnInit() {
    this.faqs$ = this.mockDataService.getFAQs();
  }
}