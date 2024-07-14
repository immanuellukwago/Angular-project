import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent {
  // interpolation binding
  hotelName: string = 'Immanuel Hotel';
  numberOfRooms: number = 90;
  hidden = false;
  add() {
    this.hidden = !this.hidden;
  }
}
