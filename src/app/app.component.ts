import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counter App';

  count: number = 0;

  handleIncrement = () => {
    this.count >= 9 ? alert("Max Limit!!!") : this.count++;
  }

  handleDecrement = () => {
    this.count <= 0 ? alert("Min Limit!!!") : this.count--;
  }

  handleReset = () => {
    this.count = 0;
  }
}
