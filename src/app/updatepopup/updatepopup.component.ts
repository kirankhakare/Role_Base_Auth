import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-updatepopup',
  templateUrl: './updatepopup.component.html',
  styleUrls: ['./updatepopup.component.css']
})
export class UpdatepopupComponent implements OnInit {

  rolelist: any;
  editdata: any;

  constructor(private builder: FormBuilder, private service: AuthService, private toastr: ToastrService,
    private dialogref: MatDialogRef<UpdatepopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  ngOnInit(): void {
    this.service.getAllRole().subscribe(res=>{
      this.rolelist = res;
    })
    if (this.data.usercode != '' && this.data.usercode != null) {
      this.loaduserdata(this.data.usercode);
    }
  }

  registerForm = this.builder.group({
    id: this.builder.control(''),
    name: this.builder.control(''),
    password: this.builder.control(''),
    email: this.builder.control(''),
    gender: this.builder.control('male'),
    role: this.builder.control('', Validators.required),
    isActive: this.builder.control(false)
  });

  loaduserdata(code: any) {
    this.service.getById(code).subscribe(res => {
      this.editdata = res;
      console.log(this.editdata);

      this.registerForm.setValue({
        id: this.editdata.id, name: this.editdata.name,
        password: this.editdata.password, email: this.editdata.email, gender: this.editdata.gender,
        role: this.editdata.role, isActive: this.editdata.isActive
      });
    });
  }
  updateUser() {
    this.service.updateData(this.registerForm.value.id, this.registerForm.value).subscribe(res => {
      this.toastr.success('Updated successfully.');
      this.dialogref.close();
    });
  }

}
