import { Router } from '@angular/router';
import { AppResponse } from './../dto/AppResponse';
import { TestUserPojo } from './../dto/TestUserPojo';
import { UserserviceService } from './../dto/userservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  pojo:AppResponse[]=[];
  constructor(private service:UserserviceService,private router:Router) { }

  ngOnInit(): void {
    this.userList();
  }

  userList(){

    let testUserPojo = new TestUserPojo();
    testUserPojo.actionFlag="L";
    this.service.user(testUserPojo).subscribe((data) => {
      console.log(data);
      this.pojo = data as AppResponse[];
    })

  }

  update(id:number){
    this.router.navigate(['/updateUser',id]);
  }

  delete(id:number){

    let testUserPojo = new TestUserPojo();
    testUserPojo.actionFlag="D";
    testUserPojo.id=id;

    this.service.user(testUserPojo).subscribe((data) => {
      console.log(data);
      let resp = data as AppResponse;
      alert(resp.message);
      this.ngOnInit();
    })
  }

}
