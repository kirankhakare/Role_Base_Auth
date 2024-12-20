import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

// Role Constants
const Roles = {
  ADMIN: 'admin',
  USER: 'User',
  SUB_ADMIN: 'Sub-admin'
};

// Route Constants
const Routes = {
  HOME: 'home',
  LOGIN: 'login',
  REGISTER: 'register',
  SUB_ADMIN_DASHBOARD: 'sub-admin-dashboard',
  USER: 'user'
};

// Allowed Routes for Each Role
const AllowedRoutes = {
  admin: [Routes.HOME, Routes.LOGIN, Routes.SUB_ADMIN_DASHBOARD, Routes.USER, Routes.REGISTER],
  user: [Routes.HOME],
  subAdmin: [Routes.HOME, Routes.LOGIN, Routes.SUB_ADMIN_DASHBOARD, Routes.REGISTER]
};

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isLoggedIn = this.authService.isLoggedIn();
    const menuPath = route.url.length > 0 ? route.url[0]?.path : Routes.HOME;
    const userRole = this.authService.getUserRole();

    console.log(`AuthGuard: Checking access for role "${userRole}" to path "${menuPath}"`);

    // If user is not logged in, redirect to login
    if (!isLoggedIn) {
      this.toastr.info('Please log in to access this page.');
      this.router.navigate([Routes.LOGIN]);
      return false;
    }

    // Role-based access control
    switch (userRole) {
      case Roles.ADMIN:
        return true; // Admin has access to all routes
      case Roles.USER:
        if (AllowedRoutes.user.includes(menuPath)) {
          return true;
        }
        break;
      case Roles.SUB_ADMIN:
        if (AllowedRoutes.subAdmin.includes(menuPath)) {
          return true;
        }
        break;
      default:
        console.error(`AuthGuard: Unknown role "${userRole}"`);
    }

    // If access is denied
    this.toastr.warning('Access Denied! You do not have permission to access this page.');
    this.router.navigate([Routes.HOME]);
    return false;
  }
}
