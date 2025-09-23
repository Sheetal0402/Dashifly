import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// Material imports
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';

import { MockAuthService } from '../../core/services/mock-auth.service';
import { ThemeService } from '../../core/services/theme.service';

interface NavItem {
  icon: string;
  label: string;
  route: string;
  badge?: number;
}

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatBadgeModule,
    MatTooltipModule,
    MatDividerModule
  ],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss'
})
export class DashboardLayoutComponent implements OnInit, OnDestroy {
  @ViewChild('drawer') drawer!: MatSidenav;
  
  private destroy$ = new Subject<void>();
  mobileQuery: MediaQueryList;
  
  user = {
    name: 'Demo User',
    email: 'demo@dashify.app',
    avatar: 'DU'
  };

  navItems: NavItem[] = [
    { icon: 'dashboard', label: 'Overview', route: '/app/overview' },
    { icon: 'psychology', label: 'Onboarding', route: '/app/onboarding', badge: 1 },
    { icon: 'settings', label: 'Settings', route: '/app/settings' },
    { icon: 'credit_card', label: 'Billing', route: '/app/billing' }
  ];

  notifications = [
    { title: 'Welcome to Dashify!', message: 'Complete your onboarding to get started.', time: '2 min ago' },
    { title: 'System Update', message: 'New features are now available.', time: '1 hour ago' }
  ];

  private _mobileQueryListener: () => void;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private authService: MockAuthService,
    private themeService: ThemeService,
    private router: Router
  ) {
    this.mobileQuery = this.media.matchMedia('(max-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    // Subscribe to auth state changes
    this.authService.currentUser$
      .pipe(takeUntil(this.destroy$))
      .subscribe(user => {
        if (user) {
          this.user = {
            name: user.name,
            email: user.email,
            avatar: user.name.split(' ').map((n: string) => n[0]).join('').toUpperCase()
          };
        }
      });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.destroy$.next();
    this.destroy$.complete();
  }

  get isMobile(): boolean {
    return this.mobileQuery.matches;
  }

  get isDarkTheme(): boolean {
    return this.themeService.isDarkMode();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  clearNotifications(): void {
    this.notifications = [];
  }

  toggleSidenav(): void {
    if (this.drawer) {
      this.drawer.toggle();
    }
  }

  closeSidenavOnMobile(): void {
    if (this.isMobile && this.drawer) {
      this.drawer.close();
    }
  }
}