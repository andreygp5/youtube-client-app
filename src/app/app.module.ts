import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './header/search-bar/search-bar.component';
import { UserProfileComponent } from './header/user-profile/user-profile.component';
import { SortingSettingsComponent } from './header/sorting-settings/sorting-settings.component';
import { ResultsListComponent } from './results-list/results-list.component';
import { ResultsItemComponent } from './results-item/results-item.component';
import { ResultsItemDescComponent } from './results-item-desc/results-item-desc.component';
import { SharedModule } from './shared/shared.module';
import { DateBorderDirective } from './results-item/date-border.directive';
import { FilterByWordComponent } from './header/sorting-settings/filter-by-word/filter-by-word.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    UserProfileComponent,
    SortingSettingsComponent,
    ResultsListComponent,
    ResultsItemComponent,
    ResultsItemDescComponent,
    DateBorderDirective,
    FilterByWordComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, SharedModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
