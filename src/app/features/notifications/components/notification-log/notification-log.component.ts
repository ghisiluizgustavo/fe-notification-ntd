import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification.service';
import { NotificationLog } from '../../models/notification-log.dto';
import { SpinnerComponent } from '../../../../shared/ui/spinner/spinner.component';
import { EmptyStateComponent } from '../../../../shared/ui/empty-state/empty-state.component';
import { AlertComponent } from '../../../../shared/ui/alert/alert.component';

@Component({
  selector: 'app-notification-log',
  standalone: true,
  imports: [CommonModule, SpinnerComponent, EmptyStateComponent, AlertComponent],
  templateUrl: './notification-log.component.html'
})
export class NotificationLogComponent implements OnInit {
  private readonly notificationService = inject(NotificationService);

  @Input() refreshTrigger?: number;

  logs: NotificationLog[] = [];
  isLoading = false;
  errorMessage = '';
  showError = false;

  ngOnInit(): void {
    this.loadLogs();
  }

  ngOnChanges(): void {
    if (this.refreshTrigger !== undefined) {
      this.loadLogs();
    }
  }

  loadLogs(): void {
    this.isLoading = true;
    this.showError = false;

    this.notificationService.getNotificationLogs().subscribe({
      next: (logs) => {
        this.logs = this.sortLogsByDate(logs);
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.showError = true;
        this.errorMessage = error.message || 'Failed to load notification logs. Please try again.';
      }
    });
  }

  private sortLogsByDate(logs: NotificationLog[]): NotificationLog[] {
    return logs.sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  }

  getChannelBadgeClass(type: string): string {
    const baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';
    
    switch (type) {
      case 'SMS':
        return `${baseClasses} bg-blue-100 text-blue-800`;
      case 'EMAIL':
        return `${baseClasses} bg-purple-100 text-purple-800`;
      case 'PUSH':
        return `${baseClasses} bg-green-100 text-green-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  }

  getStatusBadgeClass(status: string): string {
    const baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';
    
    switch (status) {
      case 'DELIVERED':
        return `${baseClasses} bg-green-100 text-green-800`;
      case 'SENT':
        return `${baseClasses} bg-blue-100 text-blue-800`;
      case 'PENDING':
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      case 'FAILED':
        return `${baseClasses} bg-red-100 text-red-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  }

  getCategoryBadgeClass(category: string): string {
    const baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';
    
    switch (category) {
      case 'SPORTS':
        return `${baseClasses} bg-orange-100 text-orange-800`;
      case 'FINANCIAL':
        return `${baseClasses} bg-emerald-100 text-emerald-800`;
      case 'MOVIES':
        return `${baseClasses} bg-pink-100 text-pink-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  }

  trackByLogId(index: number, log: NotificationLog): number {
    return log.id;
  }
}
