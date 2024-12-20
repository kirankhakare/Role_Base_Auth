import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  username: string | null = '';

  ngOnInit(): void {
    // Retrieve the username from sessionStorage
    this.username = sessionStorage.getItem('username');
  }
}
