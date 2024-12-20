import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private builder:FormBuilder,private toastr:ToastrService,private service:AuthService, private route:Router){

  }

  registerForm= this.builder.group({
    id:this.builder.control('',Validators.compose([Validators.required,Validators.minLength(5)])),
    name:this.builder.control('',Validators.required),
    password:this.builder.control('',Validators.compose([Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%?&])[A-Za-z\d$@$!%*?&].{8,}')])),
    email:this.builder.control('',Validators.compose([Validators.required,Validators.email])),
    gender:this.builder.control('male'),
    role:this.builder.control(''),
    isActive:this.builder.control(false)
  })

  registration(){
    if(this.registerForm.valid){
       this.service.registerData(this.registerForm.value).subscribe(res=>{
        this.toastr.success('Please Contact Admin for enable to access user','Registration Successfull');
        this.route.navigate(['login']);
       })
    }else{
       this.toastr.warning('Please Enter Valid Data')
    }
  }

}
