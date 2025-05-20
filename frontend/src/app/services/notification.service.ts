import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private hubConnection!: signalR.HubConnection;
  private notificationSubject = new BehaviorSubject<string | null>(null);
  notification$ = this.notificationSubject.asObservable();

  constructor() {
    this.startConnection();
  }

  private startConnection() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5086/hub/notifications')
      .withAutomaticReconnect()
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('SignalR connected'))
      .catch(err => console.error('SignalR error:', err));

    this.hubConnection.on('ReceiveNotification', (message: string) => {
      this.notificationSubject.next(message);
    });
  }
}
