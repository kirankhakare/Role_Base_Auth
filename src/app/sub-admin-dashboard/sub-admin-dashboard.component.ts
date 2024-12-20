import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sub-admin-dashboard',
  templateUrl: './sub-admin-dashboard.component.html',
  styleUrls: ['./sub-admin-dashboard.component.css']
})
export class SubAdminDashboardComponent implements OnInit {
  users: any[] = [];
  showModal: boolean = false;
  editUserData: any = {};

  constructor(private userService: AuthService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getUsers1();
  }

  // Fetch users from the service
  getUsers1() {
    this.userService.getUsers1().subscribe(
      (data: any) => {
        this.users = data;
        console.log('Fetched users:', this.users);
      },
      (error: any) => {
        console.error('Error fetching data', error);
      }
    );
  }

  // Open Edit Modal with user data
  editUser(index: number) {
    const user = this.users[index];
    if (user.role === 'admin' || user.role === 'Sub-admin') {
      this.toastr.warning('You cannot edit admin or sub-admin user.');
      return;
    }
    this.editUserData = { ...user }; // Copy data for editing
    this.showModal = true;
  }

  // Update user details
  updateUser() {
    const index = this.users.findIndex(user => user.id === this.editUserData.id);
    if (index !== -1) {
      this.userService.updateUser(this.editUserData.id, this.editUserData).subscribe(() => {
        this.users[index] = { ...this.editUserData }; // Update user data locally
        this.showModal = false;
      });
    }
  }

  // Close the modal
  closeModal() {
    this.showModal = false;
  }

  // Delete a user
  deleteUser(id: string, role: string) {
    if (role === 'admin' || role === 'Sub-admin') {
      this.toastr.warning('You cannot delete admin or sub-admin user.');
      return;
    }
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(id).subscribe(() => {
        this.users = this.users.filter(user => user.id !== id); // Remove user from local array
      });
    }
  }
}
