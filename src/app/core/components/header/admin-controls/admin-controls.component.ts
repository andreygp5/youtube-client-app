import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-controls',
  templateUrl: './admin-controls.component.html',
  styleUrls: ['./admin-controls.component.scss'],
})
export class AdminControlsComponent {

  constructor(private router: Router) {
  }

  navigateToAddVideo(): void {
    this.router.navigate(['admin/create-video-card'])
  }
}
