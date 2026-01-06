import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageFormComponent } from './components/message-form/message-form.component';
import { NotificationLogComponent } from './components/notification-log/notification-log.component';

@Component({
  selector: 'app-notifications-page',
  standalone: true,
  imports: [CommonModule, MessageFormComponent, NotificationLogComponent],
  template: `
    <div class="min-h-screen bg-gray-50 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h1 class="text-3xl font-bold text-gray-900">Notification System</h1>
          <p class="mt-2 text-sm text-gray-600">
            Submit new notifications and view delivery history
          </p>
        </div>

        <app-message-form (submitSuccess)="onNotificationSubmitted()"></app-message-form>

        <app-notification-log [refreshTrigger]="refreshTrigger"></app-notification-log>
      </div>
    </div>
  `
})
export class NotificationsPage {
  refreshTrigger = 0;

  onNotificationSubmitted(): void {
    this.refreshTrigger++;
  }
}
