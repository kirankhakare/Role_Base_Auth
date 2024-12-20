import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserlistingComponent } from './userlisting/userlisting.component';
import { AuthGuard } from './guard/auth.guard';
import { UserRoleComponent } from './user-role/user-role.component';
import { SubAdminDashboardComponent } from './sub-admin-dashboard/sub-admin-dashboard.component';




const routes: Routes = [
  {path:'', component:HomeComponent,canActivate:[AuthGuard]},
  {path:'register', component:RegisterComponent,canActivate:[AuthGuard]},
  {path:'login', component:LoginComponent},
  {path:'user' , component:UserlistingComponent,canActivate:[AuthGuard]},
  {path:'user_role',component:UserRoleComponent,canActivate:[AuthGuard]},
  {path:'sub-admin-dashboard',component:SubAdminDashboardComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
