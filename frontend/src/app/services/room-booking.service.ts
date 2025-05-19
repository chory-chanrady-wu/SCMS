import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RoomBooking {
  id?: number;
  roomName: string;
  bookedBy: string;
  purpose: string;
  startTime: string;
  endTime: string;
}

@Injectable({
  providedIn: 'root'
})
export class RoomBookingService {
  private apiUrl = 'https://localhost:5086/api/RoomBooking'; // Change port if different

  constructor(private http: HttpClient) {}

  getAllBookings(): Observable<RoomBooking[]> {
    return this.http.get<RoomBooking[]>(this.apiUrl);
  }

  createBooking(booking: RoomBooking): Observable<any> {
    return this.http.post(this.apiUrl, booking);
  }
}
