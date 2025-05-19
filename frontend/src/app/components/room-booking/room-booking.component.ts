import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoomBooking, RoomBookingService } from '../../services/room-booking.service';


@Component({
  selector: 'app-room-booking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.css'],
  providers: [RoomBookingService]
})
export class RoomBookingComponent {
  bookings: RoomBooking[] = [];
  newBooking: RoomBooking = {
    roomName: '',
    bookedBy: '',
    purpose: '',
    startTime: '',
    endTime: ''
  };

  constructor(@Inject(RoomBookingService) private bookingService: RoomBookingService) {
    this.loadBookings();
  }

  loadBookings() {
    this.bookingService.getAllBookings().subscribe((data: RoomBooking[]) => this.bookings = data);
  }

  submitBooking() {
    this.bookingService.createBooking(this.newBooking).subscribe(() => {
      this.newBooking = { roomName: '', bookedBy: '', purpose: '', startTime: '', endTime: '' };
      this.loadBookings();
    });
  }
}
