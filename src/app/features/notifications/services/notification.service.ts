import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { CreateNotificationRequest, CreateNotificationResponse } from '../models/notification.dto';
import { NotificationLog, NotificationLogsResponse } from '../models/notification-log.dto';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private readonly http = inject(HttpClient);
  private readonly apiService = inject(ApiService);

  createNotification(request: CreateNotificationRequest): Observable<CreateNotificationResponse> {
    return this.http.post<CreateNotificationResponse>(
      this.apiService.getEndpoint('/notification'),
      request
    );
  }

  getNotificationLogs(): Observable<NotificationLog[]> {
    return this.http.get<NotificationLog[]>(
      this.apiService.getEndpoint('/notification/logs')
    );
  }
}
