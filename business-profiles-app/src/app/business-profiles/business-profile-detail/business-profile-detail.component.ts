import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { map } from 'rxjs'
import { BUSINESS_PROFILES } from '../data/business-profiles-data'
import { BusinessProfile } from '../models/business-profile'

@Component({
  selector: 'app-business-profile-detail',
  templateUrl: './business-profile-detail.component.html',
  styleUrls: ['./business-profile-detail.component.scss'],
})
export class BusinessProfileDetailComponent {
  constructor(private readonly activatedRoute: ActivatedRoute) {}
  businessProfileDetails$ = this.activatedRoute.params.pipe(
    map((params) => {
      const { id } = params
      return BUSINESS_PROFILES.find((profile) => profile.id === id)
    }),
  )
}
