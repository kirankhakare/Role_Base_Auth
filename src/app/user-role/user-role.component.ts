import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.css']
})
export class UserRoleComponent implements OnInit {
  users: any[] = []; // Array to hold users based on role
  userCount: number = 0; // Store the number of users based on role
  roleCode: string = 'User'; // Default to 'User' role (can be changed dynamically)

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.loadUsersByRole(this.roleCode); // Load users by default 'User' role
  }

  loadUsersByRole(role: string): void {
    this.authService.getUsersByRole(role).subscribe(
      (data: any[]) => {
        this.users = data; // Store the users with the given role
        this.userCount = this.users.length; // Count the number of users
      },
      (error) => {
        console.error('Error fetching users by role:', error);
      }
    );
  }

  // Switch roles and reload the users
  switchRole(role: string): void {
    this.roleCode = role;
    this.loadUsersByRole(role); // Reload users for the selected role
  }
}
