export enum NotificationCategory {
  SPORTS = 'SPORTS',
  FINANCIAL = 'FINANCIAL',
  MOVIES = 'MOVIES',
}

export interface CreateNotificationRequest {
  category: NotificationCategory;
  content: string;
}

export interface CreateNotificationResponse {
  id: string;
  category: NotificationCategory;
  content: string;
  createdAt: string;
}
