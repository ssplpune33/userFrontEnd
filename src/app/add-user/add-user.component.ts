import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TestUserPojo } from '../dto/TestUserPojo';
import { UserserviceService } from '../dto/userservice.service';
import { AppResponse } from '../dto/AppResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup;
  testUserPojo: TestUserPojo = new TestUserPojo();

  title="User Registration";
  
  constructor(private formBuilder: FormBuilder, private service: UserserviceService,private router:Router) {

    this.userForm = this.formBuilder.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      mobileNumber: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      dob: new FormControl('', Validators.required),
    })

  }
appResponse:any;

  ngOnInit(): void {
  }

  submission() {
    if (this.userForm.invalid) {
      return
    }

    this.testUserPojo = this.userForm.value;
    this.testUserPojo.actionFlag = "A";
    
    console.log(this.testUserPojo);

    this.service.user(this.testUserPojo).subscribe((data) => {
      console.log(data);
      let resp = data as AppResponse;
      alert(resp.message);
      this.userForm.reset();
    this.router.navigate(['']);

    }

    )
  }

}
