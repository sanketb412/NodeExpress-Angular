import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

import { UserServiceService } from 'src/app/services/userService/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: UserServiceService,
  ) { }

  form = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.email, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  })

  ngOnInit(): void {
  }

  
  submit() {
    let data = {
      "email": this.form.controls.userName.value,
      "service": "advance",
      "password": this.form.controls.password.value
    }
    console.log(this.form.value);
    this.userService.login(data).subscribe((data: any) => {
      console.log(data);
    });
  }
}
