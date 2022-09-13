import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { BusinessProfileService } from '../business-profile.service'

@Component({
  selector: 'app-business-profiles',
  templateUrl: './business-profiles.component.html',
  styleUrls: ['./business-profiles.component.scss'],
})
export class BusinessProfilesComponent {
  constructor(
    private readonly businessProfileService: BusinessProfileService,
  ) {}
  businessProfiles$ = this.businessProfileService.getBusinessProfiles()
}
