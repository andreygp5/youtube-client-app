import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { YoutubeApiInterceptor } from './youtube/interceptors/youtube-api.interceptor';
import { reducers } from './store/app.store';
import { YoutubeEffects } from './store/effects/youtube.effects';
import { SearchEffects } from './store/effects/search.effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([YoutubeEffects, SearchEffects]),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: YoutubeApiInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
