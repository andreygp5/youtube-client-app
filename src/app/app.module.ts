import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HeaderModule } from './modules/header/header.module';
import { ResultsListModule } from './modules/results-list/results-list.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HeaderModule,
    ResultsListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
