import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginGuard } from './core/guards/login.guard';

const routes: Routes = [
  {
    path: 'youtube',
    canActivate: [AuthGuard],
    loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule),
  },
  {
    path: 'auth',
    canActivate: [LoginGuard],
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'youtube'
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {
}
