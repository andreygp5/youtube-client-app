import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { TestValuesComponent } from './components/test-values/test-values.component';

@NgModule({
  declarations: [
    LoginComponent,
    TestValuesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    LoginComponent,
  ],
})
export class AuthModule {
}
