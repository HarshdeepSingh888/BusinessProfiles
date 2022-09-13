import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { BUSINESS_PROFILES } from './data/business-profiles-data'
import { BusinessProfile } from './models/business-profile'

@Injectable({
  providedIn: 'root',
})
export class BusinessProfileService {
  constructor() {}

  getBusinessProfiles(): Observable<BusinessProfile[]> {
    return of(BUSINESS_PROFILES)
  }
}
