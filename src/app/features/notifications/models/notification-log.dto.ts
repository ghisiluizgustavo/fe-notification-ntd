import { NotificationCategory } from './notification.dto';

export enum NotificationChannel {
  SMS = 'SMS',
  EMAIL = 'EMAIL',
  PUSH = 'PUSH'
}

export enum DeliveryStatus {
  PENDING = 'PENDING',
  SENT = 'SENT',
  DELIVERED = 'DELIVERED',
  FAILED = 'FAILED'
}

export interface NotificationLog {
  id: number;
  category: string;
  type: string;
  content: string;
  status: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
}

export interface NotificationLogsResponse {
  logs: NotificationLog[];
  total: number;
}
