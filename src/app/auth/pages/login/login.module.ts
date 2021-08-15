import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginFormComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LoginComponent,
  ],
})
export class LoginModule {
}
