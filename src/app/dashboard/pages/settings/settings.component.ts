import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

// Material imports
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatDividerModule
  ],
  template: `
    <div class="settings-page">
      <div class="page-header">
        <h1 class="page-title">Settings</h1>
        <p class="page-subtitle">Manage your account and preferences</p>
      </div>

      <mat-tab-group class="settings-tabs">
        <mat-tab label="Account">
          <div class="tab-content">
            <mat-card>
              <mat-card-header>
                <mat-card-title>Account Information</mat-card-title>
              </mat-card-header>
              <mat-card-content>
                <form [formGroup]="accountForm" class="settings-form">
                  <div class="form-row">
                    <mat-form-field appearance="outline">
                      <mat-label>First Name</mat-label>
                      <input matInput formControlName="firstName">
                    </mat-form-field>
                    <mat-form-field appearance="outline">
                      <mat-label>Last Name</mat-label>
                      <input matInput formControlName="lastName">
                    </mat-form-field>
                  </div>
                  <mat-form-field appearance="outline">
                    <mat-label>Email</mat-label>
                    <input matInput formControlName="email" type="email">
                  </mat-form-field>
                  <mat-form-field appearance="outline">
                    <mat-label>Job Title</mat-label>
                    <input matInput formControlName="jobTitle">
                  </mat-form-field>
                </form>
              </mat-card-content>
              <mat-card-actions>
                <button mat-raised-button color="primary">Save Changes</button>
              </mat-card-actions>
            </mat-card>
          </div>
        </mat-tab>

        <mat-tab label="Notifications">
          <div class="tab-content">
            <mat-card>
              <mat-card-header>
                <mat-card-title>Notification Preferences</mat-card-title>
              </mat-card-header>
              <mat-card-content>
                <div class="notification-setting">
                  <div class="setting-info">
                    <h3>Email Notifications</h3>
                    <p>Receive updates via email</p>
                  </div>
                  <mat-slide-toggle color="primary" [checked]="true"></mat-slide-toggle>
                </div>
                <mat-divider></mat-divider>
                <div class="notification-setting">
                  <div class="setting-info">
                    <h3>Push Notifications</h3>
                    <p>Receive browser notifications</p>
                  </div>
                  <mat-slide-toggle color="primary" [checked]="false"></mat-slide-toggle>
                </div>
                <mat-divider></mat-divider>
                <div class="notification-setting">
                  <div class="setting-info">
                    <h3>Marketing Updates</h3>
                    <p>Receive marketing and promotional content</p>
                  </div>
                  <mat-slide-toggle color="primary" [checked]="false"></mat-slide-toggle>
                </div>
              </mat-card-content>
            </mat-card>
          </div>
        </mat-tab>

        <mat-tab label="Security">
          <div class="tab-content">
            <mat-card>
              <mat-card-header>
                <mat-card-title>Security Settings</mat-card-title>
              </mat-card-header>
              <mat-card-content>
                <form [formGroup]="securityForm" class="settings-form">
                  <mat-form-field appearance="outline">
                    <mat-label>Current Password</mat-label>
                    <input matInput formControlName="currentPassword" type="password">
                  </mat-form-field>
                  <mat-form-field appearance="outline">
                    <mat-label>New Password</mat-label>
                    <input matInput formControlName="newPassword" type="password">
                  </mat-form-field>
                  <mat-form-field appearance="outline">
                    <mat-label>Confirm New Password</mat-label>
                    <input matInput formControlName="confirmPassword" type="password">
                  </mat-form-field>
                </form>
              </mat-card-content>
              <mat-card-actions>
                <button mat-raised-button color="primary">Update Password</button>
              </mat-card-actions>
            </mat-card>
          </div>
        </mat-tab>
      </mat-tab-group>
    </div>
  `,
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  accountForm: FormGroup;
  securityForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.accountForm = this.fb.group({
      firstName: ['Demo', Validators.required],
      lastName: ['User', Validators.required],
      email: ['demo@dashify.app', [Validators.required, Validators.email]],
      jobTitle: ['Product Manager', Validators.required]
    });

    this.securityForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    });
  }
}