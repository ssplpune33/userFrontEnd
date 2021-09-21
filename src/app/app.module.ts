import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { UserListComponent } from './user-list/user-list.component';



import{ NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserserviceService } from'./dto/userservice.service';
import { UpdateUserComponent } from './update-user/update-user.component'

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    HomePageComponent,
    UserListComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
