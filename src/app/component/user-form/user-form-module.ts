import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form.component';

@NgModule({
  declarations: [UserFormComponent],
  imports: [CommonModule, ReactiveFormsModule]
})
export class UserFormModule {}