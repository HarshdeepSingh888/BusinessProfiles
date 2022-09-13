import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BusinessProfilesComponent } from './business-profiles/business-profiles.component'
import { BusinessProfileComponent } from './business-profile/business-profile.component'
import { BusinessProfileDetailComponent } from './business-profile-detail/business-profile-detail.component'

@NgModule({
  declarations: [
    BusinessProfilesComponent,
    BusinessProfileComponent,
    BusinessProfileDetailComponent,
  ],
  imports: [CommonModule],
  exports: [
    BusinessProfilesComponent,
    BusinessProfileComponent,
    BusinessProfileDetailComponent,
  ],
})
export class BusinessProfilesModule {}
