import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-public-nav',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule
  ],
  template: `
    <mat-toolbar class="public-nav" color="primary">
      <div class="nav-container">
        <div class="nav-brand">
          <a routerLink="/" class="brand-link">
            <span class="brand-logo">D</span>
            <span class="brand-text">Dashify</span>
          </a>
        </div>
        
        <nav class="nav-links hide-mobile">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" mat-button>Home</a>
          <a routerLink="/features" routerLinkActive="active" mat-button>Features</a>
          <a routerLink="/pricing" routerLinkActive="active" mat-button>Pricing</a>
          <a routerLink="/faq" routerLinkActive="active" mat-button>FAQ</a>
        </nav>
        
        <div class="nav-actions hide-mobile">
          <a routerLink="/auth/login" mat-stroked-button>Login</a>
          <a routerLink="/auth/login" mat-raised-button>Get Started</a>
        </div>

        <!-- Mobile Menu -->
        <div class="mobile-menu hide-desktop">
          <button mat-icon-button [matMenuTriggerFor]="mobileMenu">
            <mat-icon>menu</mat-icon>
          </button>
          <mat-menu #mobileMenu="matMenu">
            <a routerLink="/" mat-menu-item>Home</a>
            <a routerLink="/features" mat-menu-item>Features</a>
            <a routerLink="/pricing" mat-menu-item>Pricing</a>
            <a routerLink="/faq" mat-menu-item>FAQ</a>
            <mat-divider></mat-divider>
            <a routerLink="/auth/login" mat-menu-item>Login</a>
            <a routerLink="/auth/login" mat-menu-item>Get Started</a>
          </mat-menu>
        </div>
      </div>
    </mat-toolbar>
  `,
  styleUrl: './public-nav.component.scss'
})
export class PublicNavComponent {}