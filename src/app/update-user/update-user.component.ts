import { AppResponse } from './../dto/AppResponse';
import { TestUserPojo } from './../dto/TestUserPojo';
import { UserserviceService } from './../dto/userservice.service';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { id } from '@swimlane/ngx-datatable';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  userForm: FormGroup;
  testUserPojo: TestUserPojo = new TestUserPojo();
  
  title="Update User"

  constructor(private formBuilder: FormBuilder, private service: UserserviceService,private activatedRoute: ActivatedRoute,private router:Router) {

    this.userForm = this.formBuilder.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      mobileNumber: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      dob: new FormControl('', Validators.required),
    })
   }

  ngOnInit(): void {

    this.edit();
    
  }

  edit(){

    let testUserPojo = new TestUserPojo();
    testUserPojo.id = this.activatedRoute.snapshot.params['id'];
    testUserPojo.actionFlag = "E";
    

    this.service.user(testUserPojo).subscribe((data) => {
      console.log(data);

      this.userForm.patchValue(data)
    })
  }
   
  submission() {
    if (this.userForm.invalid) {
      return
    }

    this.testUserPojo = this.userForm.value;
    this.testUserPojo.actionFlag = "U";
    this.testUserPojo.id = this.activatedRoute.snapshot.params['id'];
    
    console.log(this.testUserPojo);

    this.service.user(this.testUserPojo).subscribe((data) => {
      console.log(data);
      let resp = data as AppResponse;
      alert(resp.message);
    this.router.navigate(['/userList']);
    }

    )
  }
  

}
