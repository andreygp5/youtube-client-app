import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SortingSettingsComponent } from './sorting-settings/sorting-settings.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FilterByWordComponent } from './sorting-settings/filter-by-word/filter-by-word.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchBarComponent,
    SortingSettingsComponent,
    UserProfileComponent,
    FilterByWordComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class HeaderModule {
}
