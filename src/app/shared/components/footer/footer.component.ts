import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule
  ],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <div class="footer-brand">
              <span class="brand-logo">D</span>
              <span class="brand-text">Dashify</span>
            </div>
            <p class="footer-description">
              The most powerful dashboard platform for modern businesses.
              Transform your data into actionable insights.
            </p>
            <div class="social-links">
              <button mat-icon-button>
                <mat-icon>facebook</mat-icon>
              </button>
              <button mat-icon-button>
                <mat-icon>twitter</mat-icon>
              </button>
              <button mat-icon-button>
                <mat-icon>linkedin</mat-icon>
              </button>
              <button mat-icon-button>
                <mat-icon>github</mat-icon>
              </button>
            </div>
          </div>

          <div class="footer-section">
            <h3 class="footer-title">Product</h3>
            <ul class="footer-links">
              <li><a routerLink="/features">Features</a></li>
              <li><a routerLink="/pricing">Pricing</a></li>
              <li><a href="#">Integrations</a></li>
              <li><a href="#">API</a></li>
              <li><a href="#">Mobile App</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3 class="footer-title">Company</h3>
            <ul class="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Partners</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3 class="footer-title">Support</h3>
            <ul class="footer-links">
              <li><a routerLink="/faq">Help Center</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">System Status</a></li>
              <li><a href="#">Security</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3 class="footer-title">Legal</h3>
            <ul class="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">GDPR</a></li>
              <li><a href="#">Compliance</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="footer-copyright">
            <p>&copy; {{ currentYear }} Dashify. All rights reserved.</p>
          </div>
          <div class="footer-legal-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}