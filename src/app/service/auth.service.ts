import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getUsers() {
    throw new Error('Method not implemented.');
  }
  getUsersExcludingAdmin() {
    throw new Error('Method not implemented.');
  }
  updateuser: any;
  GetUserbyCode(code: any) {
    throw new Error('Method not implemented.');
  }

  baseAPI='http://localhost:3000/user'
  constructor(private http:HttpClient) { }

  //return All Data via Get Method
  getAll(){
    return this.http.get(this.baseAPI);
  }
  //get all Role Data
  getAllRole(){
    return this.http.get("http://localhost:3000/role");
  }
  // get record by single id
  getById(id:any){
    return this.http.get(this.baseAPI+'/'+id);
  }
  //register User vis post method
  registerData(inputdata:any){
    return this.http.post(this.baseAPI,inputdata);
  }
  //update user vis put
  updateData(id:any,inputdata:any){
    return this.http.put(this.baseAPI+'/'+id,inputdata);
  }
  //Get User Role
  isLoggedIn(){
    return sessionStorage.getItem('username')!=null;
  }
  //Get User Role
  getUserRole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():'';
  }
  //filter data on the bases of their roles..:
  // Get all users by role (e.g., 'admin', 'Sub-admin', 'User')
  getUsersByRole(role: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseAPI}?role=${role}`); // Filtering by 'role'
  }

  // Get all roles from the roles API (if needed)
  getRoles(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/role');
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.baseAPI}/${id}`);
  }

  // Update a user
  updateUser(id: string, userData: any): Observable<any> {
    return this.http.put(`${this.baseAPI}/${id}`, userData);
  }
  
  // Fetch users
  getUsers1(): Observable<any> {
    return this.http.get<any>(this.baseAPI);
  }

  
}

  

