import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from '../../auth/services/auth.service';
import { youtubeClearVideos } from '../../store/actions/youtube.actions';

@Injectable({
  providedIn: 'root',
})
export class VideoResultsService {
  constructor(
    private router: Router,
    private authService: AuthService,
    private store: Store,
  ) {
    this.subscribeToLoggingIn();
  }

  private subscribeToLoggingIn(): void {
    this.authService.isLoggedIn.subscribe((res) => {
      if (!res) {
        this.store.dispatch(youtubeClearVideos());
      }
    });
  }
}
