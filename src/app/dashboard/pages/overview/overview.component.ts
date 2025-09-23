import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

// Material imports
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';

// Shared components
import { StatCardComponent } from '../../../shared/components/stat-card/stat-card.component';

// Services
import { MockDataService, DashboardStats, Activity } from '../../../shared/services/mock-data.service';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatChipsModule,
    StatCardComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent implements OnInit {
  stats$!: Observable<DashboardStats>;
  activities$!: Observable<Activity[]>;

  constructor(private mockDataService: MockDataService) {}

  ngOnInit(): void {
    this.stats$ = this.mockDataService.getStats();
    this.activities$ = this.mockDataService.getRecentActivity();
  }
}