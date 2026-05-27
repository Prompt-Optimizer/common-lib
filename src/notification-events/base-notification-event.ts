export interface BaseNotificationEvent {
  userId: string;
  timestamp: string;
  recipient: { email: string; name: string };
}
