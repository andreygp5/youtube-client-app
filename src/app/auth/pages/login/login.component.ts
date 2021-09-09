import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { skip, take } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { SnackbarService } from '../../../core/services/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });
  public isButtonDisabled: boolean = false;
  private valueChangesSubscription: Subscription | undefined;

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackbarService: SnackbarService,
  ) {
  }

  public ngOnInit(): void {
    this.subscribeToValueChanges();
  }

  public onFormSubmit(): void {
    this.isButtonDisabled = true;

    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    this.authService.login(email, password);
    this.subscribeToLogin();
  }

  public ngOnDestroy(): void {
    this.unsubscribeFromValueChanges();
  }

  private subscribeToLogin(): void {
    this.authService.isLoggedIn
      .pipe(
        take(2),
        skip(1)
      )
      .subscribe((isLoggedIn) => {
        if (isLoggedIn) {
          this.router.navigate(['youtube']);
        } else {
          this.snackbarService.showMsg('Not valid credentials');
        }
        this.isButtonDisabled = false;
      });
  }

  private subscribeToValueChanges(): void {
    this.loginForm.valueChanges.subscribe(() => {
      this.isButtonDisabled = !this.loginForm.valid;
    });
  }

  private unsubscribeFromValueChanges(): void {
    this.valueChangesSubscription?.unsubscribe();
  }
}
