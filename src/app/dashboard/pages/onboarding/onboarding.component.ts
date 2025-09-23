import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Material imports
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatCardModule,
    MatSnackBarModule,
    MatChipsModule
  ],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.scss'
})
export class OnboardingComponent implements OnInit {
  profileForm: FormGroup;
  preferencesForm: FormGroup;
  
  industries = [
    'Technology', 'Healthcare', 'Finance', 'Education', 'Retail', 
    'Manufacturing', 'Media', 'Non-profit', 'Government', 'Other'
  ];

  teamSizes = [
    '1-10', '11-50', '51-200', '201-1000', '1000+'
  ];

  features = [
    { id: 'analytics', name: 'Advanced Analytics', description: 'Detailed insights and reporting' },
    { id: 'collaboration', name: 'Team Collaboration', description: 'Real-time team features' },
    { id: 'automation', name: 'Workflow Automation', description: 'Automate repetitive tasks' },
    { id: 'integrations', name: 'Third-party Integrations', description: 'Connect with external tools' },
    { id: 'security', name: 'Enhanced Security', description: 'Advanced security features' },
    { id: 'support', name: 'Priority Support', description: '24/7 dedicated support' }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.profileForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      jobTitle: ['', Validators.required],
      company: ['', Validators.required],
      industry: ['', Validators.required],
      teamSize: ['', Validators.required],
      phoneNumber: ['', [Validators.pattern(/^\+?[\d\s\-\(\)]+$/)]]
    });

    this.preferencesForm = this.formBuilder.group({
      communicationMethod: ['email', Validators.required],
      newsletterOptIn: [true],
      marketingOptIn: [false],
      selectedFeatures: [[]],
      primaryGoal: ['', Validators.required],
      experienceLevel: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onProfileSubmit(): void {
    if (this.profileForm.valid) {
      // Save profile data
      console.log('Profile data:', this.profileForm.value);
    }
  }

  onPreferencesSubmit(): void {
    if (this.preferencesForm.valid) {
      // Save preferences data
      console.log('Preferences data:', this.preferencesForm.value);
    }
  }

  onComplete(): void {
    this.snackBar.open('Welcome to Dashify! Your setup is complete.', 'Close', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
    
    // Navigate to dashboard
    this.router.navigate(['/app/overview']);
  }

  toggleFeature(featureId: string): void {
    const currentFeatures = this.preferencesForm.get('selectedFeatures')?.value || [];
    const index = currentFeatures.indexOf(featureId);
    
    if (index > -1) {
      currentFeatures.splice(index, 1);
    } else {
      currentFeatures.push(featureId);
    }
    
    this.preferencesForm.patchValue({ selectedFeatures: currentFeatures });
  }

  isFeatureSelected(featureId: string): boolean {
    const selectedFeatures = this.preferencesForm.get('selectedFeatures')?.value || [];
    return selectedFeatures.includes(featureId);
  }
}