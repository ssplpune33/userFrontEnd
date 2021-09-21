import { UpdateUserComponent } from './update-user/update-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [

  { path:'',component:HomePageComponent },
  { path:'addUser',component:AddUserComponent },
  { path:'userList',component:UserListComponent },
  { path:'updateUser/:id',component:UpdateUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
