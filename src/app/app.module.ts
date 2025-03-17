import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './service/user.service';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [AppComponent, UserDashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule 
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}